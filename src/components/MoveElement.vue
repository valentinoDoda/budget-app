<template>
  <li>
    <div class="move_element">
      <div class="move_type">
        <div class="type_bar" :class="movementItem.type"></div>
      </div>
      <div class="move_title">
        <p>{{ movementItem.title }}</p>
      </div>
      <div class="move_value">
        <p>{{ valueFormat }}</p>
      </div>
      <div class="move_date">
        <p>{{ dateFormat }}</p>
      </div>
      <div class="move_view">
        <button @click="viewDetails" :class="movementItem.type+'View'">
          <p>view more</p>
        </button>
      </div>
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
      const details = {
        title: this.movementItem.title,
        description: this.movementItem.description,
        type: this.movementItem.type,
        niche: this.movementItem.niche,
        date: this.dateFormat,
        value: this.valueFormat,
      };

      this.$store.commit("setMovementDetails", details);
      this.$router.push({
        name: "MoveDetail",
        params: { detail: new Date(this.movementItem.date).toISOString() },
      });
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
.incomeView {
  background-color: none;
}
.expenseView {
  background-color: none;
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

@media (max-width: 520px) {
  .move_element {
    text-align: center;
    grid-template-columns: repeat(3, 1fr);
  }
  .move_view .incomeView {
    background-color: #5a6d43;
  }
  .move_view .expenseView {
    background-color: #682929;
  }
  .move_view {
    border-radius: 4px;
    grid-column: 1/5;
  }
  .move_view button {
    border-radius: 4px;
    color: white;
    padding: 10px;
    width: 100%;
  }
  .move_type {
    display: none;
  }
}
</style>
