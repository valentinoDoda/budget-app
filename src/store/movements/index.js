export default {
  state() {
    return {
      movements: [],
      isFetching: false
    };
  },

  mutations: {
    addMovements(state, payload) {
      state.movements.unshift(payload);
    },
    setMovements(state, payload) {
      state.movements.unshift(payload);
    },
    clearMovements(state){
      state.movements = [];
    }
  },
  getters: {
    getMoves(state) {
      return state.movements;
    },
  },
  actions: {
    addMovements(context, move) {
      const getUserId = context.getters.getUserId;
      context.commit("addMovements", move);

      try {
        const response = fetch(
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
      if(!context.state.isFetching){
        console.log('fetch', context.state.isFetching)
      const response = await fetch(
        `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/movements/${getUserId}.json`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(
          "Something went wrong with fetching movements or just dont exist yet"
        );
      }
      context.state.isFetching = true
      if (context.state.movements.length == 0 && responseData) {
        for (const key in responseData) {
          context.commit("setMovements", responseData[key]);
        }
      } else {
        console.log(responseData, "the database is empty");
      }
      console.log('stop fetch', context.state.isFetching)
    }
    },
  },
};
