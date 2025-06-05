export default {
  state() {
    return {
      movements: [],
      isFetching: false,
    };
  },

  mutations: {
    resetFetching(state) {
      state.isFetching = false;
    },
    addMovements(state, payload) {
      state.movements.unshift(payload);
    },
    setMovements(state, payload) {
      state.movements.unshift(payload);
    },
    clearMovements(state) {
      state.movements = [];
    },
  },
  getters: {
    getMoves(state) {
      return state.movements;
    },
    getIncomes(_, getters){
      return getters.getMoves.filter(move => move.type == "income")
    },
    getExpenses(_, getters){
      return getters.getMoves.filter(move => move.type == "expense")
    }
  },
  actions: {
    async addMovements(context, move) {
      const getUserId = context.getters.getUserId;
      if (move.type == "income") {
        const budget = context.getters.getUserBudget + move.value;
        context.commit("changeBudget", budget);
        context.commit("changeIncomes", move.value);
        context.commit("addMovements", move);

        await context.dispatch("changeUserBudget");
      } else {
        if (move.value < context.getters.getUserBudget) {
          const budget = context.getters.getUserBudget - move.value;
          context.commit("changeBudget", budget);
          context.commit("changeExpenses", move.value);
          context.commit("addMovements", move);

          await context.dispatch("changeUserBudget");
        } else {
          console.log("You cannot add expense bigger than budget");
          return 0;
        }
      }

      try {
        const response = await fetch(
          `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/movements/${getUserId}.json`,
          {
            method: "POST",
            body: JSON.stringify(move),
          }
        );
        if (!response.ok) {
          console.log(response);
          throw new Error(
            "Something went wrong with fetching movements or just dont exist yet"
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
    async setMovements(context) {
      const getUserId = context.getters.getUserId;
      console.log(context.getters.getIncomes);
      if (!context.state.isFetching) {
        console.log("fetch", context.state.isFetching);
        const response = await fetch(
          `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/movements/${getUserId}.json`
        );

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(
            "Something went wrong with fetching movements or just dont exist yet"
          );
        }
        context.state.isFetching = true;
        if (context.state.movements.length == 0 && responseData) {
          for (const key in responseData) {
            context.commit("setMovements", responseData[key]);
          }
        } else {
          console.log(responseData, "the database is empty");
        }
        console.log("stop fetch", context.state.isFetching);
      }
    },
  },
};
