import { createStore } from "vuex";
import userModule from "./users/index";
const store = createStore({
  modules: { userModule },
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },

  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },

  actions: {
    async login(context, payload) {
      try {
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
      } catch (err) {
        console.log(this.err);
      }
    },
    async signup(context, payload) {
      try {
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
      } catch (err) {
        console.log(this.err);
      }
    },
  },

  getters: {
    getToken(state) {
      return state.token;
    },
    getUserId(state) {
      return state.userId;
    },
  },
});

export default store;
