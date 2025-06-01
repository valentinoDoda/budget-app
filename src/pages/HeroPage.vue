<template>
  <base-section>
    <div class="hero-section">
      <h1>Take Control of Your Finances</h1>
      <p>
        Track your income and expenses with ease. Stay on top of your budget
        with a clean and smart interface designed for everyday use.
      </p>
      <base-button
        :mode="'main'"
        style="margin: auto; width: max-content"
        to="/sign"
        >Start Managing Today</base-button
      >
    </div>
  </base-section>
</template>

<style scoped>
.hero-section {
  margin-top: 90px;
  text-align: center;
}

.hero-section h1 {
  font-weight: medium;
  color: var(--titles-color);
  font-size: 50px;
  margin-bottom: 30px;
}

.hero-section p {
  font-size: 24px;
  color: var(--description-color);
  margin-bottom: 90px;
}
</style>
