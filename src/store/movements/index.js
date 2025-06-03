export default {
  state() {
    return {
      movements: null,
    };
  },

  mutations: {
    setMovements(state, payload) {
      state.movements = payload;
    },
  },

  actions: {
    async setMovements(context, data) {
      try{
        const response = await fetch(
        `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/movements/${getUserId}.json`
        );

        const responseData = await response.json();
        if(!response.ok){
            throw new Error ("Something went wrong with fetching movements or just dont exist yet")
        }
        console.log(responseData)
    }catch(err){
        throw err
    }
    },
  },
};
