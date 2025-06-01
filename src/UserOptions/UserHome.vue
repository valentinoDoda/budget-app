<template>
  <div class="user_home_card">
    <div class="user_budget">
      <p class="date">
        Date : <span>{{ userDate }}</span>
      </p>
      <h4>Budget</h4>
      <p>${{userData.budget}}</p>
    </div>
    <div class="user_incomes">
      <p class="title">Expenses</p>
      <p class="value">${{userData.expenses}}</p>
    </div>
    <div class="user_expenses">
      <p class="title">Expenses</p>
      <p class="value">${{userData.incomes}}</p>
    </div>
  </div>

  <base-button
    class="addBtn"
    :type="''"
    :mode="'main'"
    :to="{ name: 'UserAdd' }"
    >add new move</base-button
  >
</template>

<script>
export default {
  data() {
    
  },
  computed: {
    userData(){
      return this.$store.getters.getUserData
    },

    userDate() {
      const locale = navigator.language;
      const options = {
        weekday: "long", // "Τετάρτη"
        year: "numeric", // "2020"
        month: "long", // "Αύγουστος"
        day: "numeric", // "12"
      };
      const formatter = new Intl.DateTimeFormat(locale, options);
      const curDate = new Date();
      return formatter.format(curDate);
    },
  },
};
</script>

<style scoped>
.addBtn {
  font-size: 18px !important;
  width: max-content;
  font-weight: 500 !important;
  margin: 60px auto;
}
.user_home_card {
  display: grid;
  gap: 22px;
  grid-template-columns: 1fr 1fr;
}
.user_budget .date {
  font-size: 14px;
  color: #8e8686;
}
.user_budget {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #1a1f14;
  grid-row: 1 / 3;
}

.user_budget h4 {
  font-weight: 500;
  font-size: 32px;
  color: white;
}

.user_budget p {
  color: #e5eadd;
  font-size: 21px;
}

.user_incomes .title,
.user_expenses .title {
  margin-bottom: 12px;
  font-size: 21px;
}
.user_incomes .value,
.user_expenses .value {
  font-size: 18px;
  color: #e5eadd;
}

.user_incomes,
.user_expenses {
  color: white;
}
.user_expenses {
  background-color: #682929;
}
.user_incomes {
  background-color: #5a6d43;
}
.user_expenses,
.user_incomes,
.user_budget {
  border-radius: 6px;
  padding: 20px 10px;
}
</style>
