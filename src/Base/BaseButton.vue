<template>
  <button :class="mode" v-if="type == 'btn'">
    <slot></slot>
  </button>
  <router-link :class="mode" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ["mode", "type"],
};
</script>

<style scoped>
a {
  text-align: center;
  display: block;
}

.main {
  color: white;
  background-color: #5a6d43;
}
.second {
  background-color: white;
  color: #5a6d43;
}
.third {
  color: #f4f6ef;
  background-color: #171616;
}
.main,
.second,
.third {
  cursor: pointer;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 21px;
}
</style>
>
