<template>
  <base-section>
    <div class="card">
      <div class="date">date : 13/03/2025</div>
      <div class="type expense">Income</div>
      <div class="amount">$300</div>

      <div class="field">
        <div class="field-title">Title:</div>
        <div class="field-value">Shoes</div>
      </div>

      <div class="field">
        <div class="field-title">Description:</div>
        <div class="field-value">Shoes about football shoes</div>
      </div>

      <div class="field">
        <div class="field-title">Niche:</div>
        <div class="field-value">Shopping</div>
      </div>
      <button @click="goBack" class="go-back">GO BACK</button>
    </div>
  </base-section>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
}
.card {
  margin: auto;
  background-color: #1e1e1e; /* Almost black */
  color: #fff;
  padding: 1.5rem;
  width: 300px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.date {
  font-size: 0.9rem;
  text-align: center;
  color: #aaa;
}

.income {
  background-color: #708654;
}

.expense {
  background-color: #682929;
}

.type {
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 2px;
}

.amount {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: -0.5rem;
}

.field {
  margin-top: 0.5rem;
}

.field-title {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.1rem;
}

.field-value {
  color: #999;
  font-size: 0.95rem;
}

.go-back {
  margin-top: 2rem;
  background-color: white;
  color: #000;
  padding: 0.7rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.go-back:hover {
  background-color: #ddd;
}
</style>
