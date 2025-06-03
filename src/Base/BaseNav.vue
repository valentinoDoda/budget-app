<template>
  <base-section>
    <nav>
      <h1><router-link :to="goToUser">budget control</router-link></h1>
      <ul v-if="!curRoute">
        <li :class="{ no_active: curRoute == 'Login' }">
          <base-button
            class="links"
            :mode="'second'"
            :type="''"
            :to="{ name: 'Login', replace: true }"
          >
            login
          </base-button>
        </li>
        <li :class="{ no_active: curRoute == 'Sign' }">
          <base-button
            class="links"
            :mode="'main'"
            :type="''"
            :to="{ name: 'Sign', replace: true }"
          >
            sign up
          </base-button>
        </li>
      </ul>
      <ul v-else>
        <li>
          <base-button
            class="links"
            :mode="'third'"
            :type="'btn'"
            @click="logout"
          >
            log out
          </base-button>
        </li>
      </ul>
    </nav>
  </base-section>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("setUser", {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
      this.$store.commit("clearMovements");
      this.$router.replace("/");
    },
  },
  computed: {
    curRoute() {
      return (
        this.$route.path.startsWith("/user") || this.$route.name == "Register"
      );
    },
    goToUser() {
      if (this.curRoute) {
        return { name: "User" };
      } else {
        return { name: "Hero" };
      }
    },
  },
};
</script>

<style scoped>
.links {
  font-weight: 500 !important;
  font-size: 16px !important;
}
nav {
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.no_active {
  display: none;
}
nav ul {
  gap: 16px;
  display: flex;
}

nav li a {
  font-family: var(--paragraphs-fonts);
  font-size: 21px;
}

nav h1 a {
  color: var(--titles-color);
  font-size: 40px;
}
</style>
