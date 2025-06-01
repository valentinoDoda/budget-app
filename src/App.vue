<template>
  <base-nav></base-nav>
  <router-view></router-view>
  <footer-section></footer-section>
</template>

<script>
import BaseNav from "./Base/BaseNav.vue";
import FooterSection from "./FooterSection.vue";
export default {
  components: {
    FooterSection,
    BaseNav,
  },
};
</script>

<style>
body {
  background-color: var(--bg-color);
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
* {
  /* colors */
  --bg-color: #333c2b;
  --second-bg: #1a1f14;
  --titles-color: #e5eadd;
  --description-color: #ced8be;

  --expenses-color: #682929;
  --incomes-color: #708654;

  --add-new-color: #708654;

  /* font family */

  --paragraphs-fonts: "Inter", sans-serif;
  --headings-fonts: "Poppins", sans-serif;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--paragraphs-fonts);
}

h1,
h2,
h3 {
  font-family: var(--headings-fonts);
}

</style>
