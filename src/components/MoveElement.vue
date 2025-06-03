<template>
  <li>
    <div class="move_element">
      <div class="move_type">
        <div class="type_bar" :class="movementItem.type"></div>
      </div>
      <div class="move_title">
        <p>{{ movementItem.title }}</p>
      </div>
      <div class="move_value">{{ valueFormat }}</div>
      <div class="move_date">{{ dateFormat }}</div>
      <button>view more</button>
    </div>
  </li>
</template>
<script>
export default {
  props: ["movementItem"],
  computed: {
    valueFormat() {
      const locale = navigator.language;
      const euroFormatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "EUR",
      });
      return euroFormatter.format(this.movementItem.value);
    },

    dateFormat() {
      const locale = navigator.language;
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat(locale, options);
      const dateItem = new Date(this.movementItem.date);
      return formatter.format(dateItem);
    },
  },
  methods: {
    viewDetails() {
      this.$router.push({ name: "MoveDetail", params: { detail: "2" } });
    },
  },
};
</script>
<style scoped>

li {
  margin-top: 23px;
}
button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  color: #cbcbdd;
}

.move_element {
  color: white;
  font-size: 18px;
  text-align: left;
  gap: 10px;
  display: grid;
  grid-template-columns: 10px repeat(3, 20%) auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: #1a1f14;
  padding: 10px;
}

.income {
  background-color: #5a6d43;
}
.expense {
  background-color: #682929;
}

.type_bar {
  border-radius: 50px;
  height: 10px;
  width: 10px;
}
</style>
