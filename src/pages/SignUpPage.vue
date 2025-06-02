<template>
  <div class="sign_card">
    <h3>Sign Up</h3>
    <p>
      Get the Financial Clarity You Deserve — Take Control and Make Every Dollar
      Count
    </p>
    <form @submit.prevent="register">
      <div class="form_element">
        <label for="email">Email: </label><br />
        <input v-model="email" type="email" name="" id="email" required />
      </div>
      <div class="form_element">
        <label for="password">Password:</label><br />
        <input
          v-model="password"
          type="password"
          name=""
          id="password"
          required
        />
      </div>

      <base-button
        :type="'btn'"
        style="width: 100%; font-size: 14px"
        :mode="'main'"
        >Register</base-button
      >
      <p>Already have an acount</p>

      <base-button
        :to="{ name: 'Login', replace: true }"
        :type="''"
        style="display: block; width: 100%; font-size: 14px; margin-top: 24px"
        :mode="'second'"
        >Sign In</base-button
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async register() {
      if (this.password.length < 6) {
        alert("password must be longer");
        return 0;
      }
      try {
        await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || "Failed to auth";
      }
      if (!this.error) {
        //
        this.$router.replace("/register");
        console.log(
          this.$store.getters.getUserId,
          this.$store.getters.getToken
        );
      }else{
        alert(this.error)
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
