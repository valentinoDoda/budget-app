<template>
  <load-spinner v-if="showSpinner"></load-spinner>
  <div v-else class="sign_card">
    <h3>Sign In</h3>
    <p>Sign In and Stay on Top of Your Budget</p>
    <form @submit.prevent="submitForm">
      <div class="form_element">
        <label for="email">Email: </label><br />
        <input type="email" v-model.trim="email" name="" required id="email" />
      </div>
      <div class="form_element">
        <label for="password">Password:</label><br />
        <input
          type="password"
          v-model.trim="password"
          name=""
          required
          id="password"
        />
        <p v-if="!formIsValid">Set correct fields</p>
      </div>

      <base-button
        :type="'btn'"
        style="width: 100%; font-size: 14px"
        :mode="'second'"
        >Sign In</base-button
      >
      <p>or if you don’t have acount</p>

      <base-button
        :to="{ name: 'Sign', replace: true }"
        :type="''"
        style="width: 100%; font-size: 14px; margin-top: 24px"
        :mode="'main'"
        >Register</base-button
      >
    </form>
  </div>
</template>
<script>
import LoadSpinner from "../components/LoadSpinner.vue";
export default {
  components: {
    LoadSpinner,
  },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      showSpinner: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      if (this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.formIsValid = true;
      this.showSpinner = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.showSpinner = false;
        this.error = err.message || "Failed to auth";
        alert(this.error);
      }
      if (!this.error) {
        console.log("i am here");
        await this.$store.dispatch("fetchUserData");
        this.$router.replace({ name: "User" });
      }
      this.error = null;
    },
  },
};
</script>
<style scoped>
h3 {
  font-size: 38px;
  color: var(--titles-color);
}

p {
  font-size: 14px;
  padding-top: 24px;
}
label,
input {
  font-size: 12px;
}
p,
label {
  color: var(--description-color);
}
.sign_card {
  border-radius: 6px;
  background-color: #1a1f14;
  text-align: center;
  max-width: 377px;
  margin: auto;
  padding: 40px 20px;
}
input {
  margin-top: 6px;
  padding: 6px;
  width: 100%;
  height: 23px;
  border: none;
  border-radius: 6px;
}
form {
  padding: 0 52px;
}
.form_element {
  margin: 21px 0;

  text-align: justify;
}
</style>
