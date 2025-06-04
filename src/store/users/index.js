export default {
  state() {
    return {
      userData: null,
    };
  },

  mutations: {
    changeBudget(state, payload) {
      state.userData.budget = payload;
    },
    changeIncomes(state, payload) {
      state.userData.incomes += payload;
    },
    changeExpenses(state, payload) {
      state.userData.expenses += payload;
    },
    setUserData(state, payload) {
      state.userData = payload;
    },
  },

  actions: {
    async changeUserBudget(context) {
      const token = context.getters.getToken;
      const userId = context.getters.getUserId;
      const response = await fetch(
        `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=${token}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            budget: context.getters.getUserBudget,
            incomes: context.getters.getUserIncomes,
            expenses: context.getters.getUserExpenses,
          }),
        }
      );
      console.log(response);
    },
    async fetchUserData(context) {
      try {
        const response = await fetch(
          `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/users/${context.getters.getUserId}.json`
        );
        const responseData = await response.json();

        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch user."
          );
          throw error;
        }
        context.commit("setUserData", responseData);
      } catch (err) {
        console.log(this.err);
      }
    },
  },

  getters: {
    getUserData(state) {
      return state.userData;
    },
    getUserBudget(state) {
      return state.userData.budget;
    },
    getUserIncomes(state) {
      return state.userData.incomes;
    },
    getUserExpenses(state) {
      return state.userData.expenses;
    },
  },
};
