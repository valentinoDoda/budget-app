export default {
  state() {
    return {
      userData: null,
      budget: null,
      incomes: null,
      expenses: null,
    };
  },

  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
  },

  actions: {
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
