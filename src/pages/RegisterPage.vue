<template>
  <base-section>
    <div class="form-container">
      <h2>User Info</h2>
      <form @submit.prevent="submitRegister">
        <label for="name">Name</label>
        <input
         
          type="text"
          id="name"
          v-model.trim="name"
          name="name"
          :placeholder="setUserData.name"
          required
        />

        <label for="lastname">Last Name</label>
        <input
          
          type="text"
          id="lastname"
          v-model.trim="lastName"
          name="lastname"
          :placeholder="setUserData.lastName"
          required
        />

        <label for="age">Age</label>
        <input
        
          type="number"
          id="age"
          v-model.trim="age"
          name="age"
          min="0"
          :placeholder="setUserData.age"
          required
        />

        <label for="job">Job</label>
        <input
          type="text"
          id="job"
          v-model.trim="job"
          name="job"
          :placeholder="setUserData.job"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      age: "",
      job: "",
    };
  },
  computed: {
    setUserData() {
      return this.$store.getters.getUserData;
    },
  },
  methods: {
    submitRegister() {
      const token = this.$store.getters.getToken;
      const userId = this.$store.getters.getUserId;
      if (userId) {
        fetch(
          `https://budget-app-c959e-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=${token}`,
          {
            method: "PUT",
            body: JSON.stringify({
              name: this.name,
              lastName: this.lastName,
              age: this.age,
              job: this.job,
              budget: this.$store.getters.getUserBudget || 0,
              incomes: this.$store.getters.getUserIncomes || 0,
              expenses: this.$store.getters.getUserExpenses || 0,
            }),
          }
        );
        this.$router.replace({ name: "User" });
      } else {
        console.log("no user id");
      }
    },
  },
};
</script>
<style scoped>
.form-container {
  margin: auto;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  border-top: 6px solid #708654;
}

.form-container h2 {
  text-align: center;
  color: #708654;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  margin-top: 1.5rem;
  width: 100%;
  background-color: #708654;
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #5e7345;
}
</style>
