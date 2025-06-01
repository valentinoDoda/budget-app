import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userData: null,
      userId: null,
      token: null,
      tokenExpiration: null,
      budget: 0,
      incomes: 0,
      expenses: 0,
    };
  },

  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },

  actions: {
    async login(context, payload) {
      const fetchData = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPUZj35jh8arG_wW1OGLuSfzDz1E2dPVE",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await fetchData.json();
      if (!fetchData.ok) {
        console.log(responseData);
        const error = new Error(responseData || "gkol");
        throw error;
      }

      console.log(responseData);
      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
    async signup(context, payload) {
      const request = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPUZj35jh8arG_wW1OGLuSfzDz1E2dPVE",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await request.json();
      if (!request.ok) {
        console.log(responseData);
        const error = new Error(responseData || "gkol");
        throw error;
      }
      console.log(responseData);
      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },

    async fetchUserData(context) {
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
      console.log(context.state.userData);
    },
  },

  getters: {
    getUserData(state) {
      return state.userData;
    },

    getToken(state) {
      return state.token;
    },
    getUserId(state) {
      return state.userId;
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
});

export default store;
