<template>
  <base-section>
    <div class="form-container">
      <h2>Transaction Form</h2>
      <form>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Freelance Project"
          required
        />

        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          placeholder="Payment for completed project"
          required
        ></textarea>

        <label for="value">Value</label>
        <input
          type="number"
          id="value"
          name="value"
          step="0.01"
          placeholder="150"
          required
        />

        <label for="type">Type</label>
        <select id="type" name="type" required>
          <option value="">Select Type</option>
          <option value="income" selected>Income</option>
          <option value="expense">Expense</option>
        </select>

        <label for="niche">Niche</label>
        <select id="niche" name="niche" required>
          <option value="other">Select Niche</option>
          <option value="marketing">Marketing</option>
          <option value="development" selected>Development</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>

        <base-button style="font-size: 16px !important" :type="'btn'" :mode="'main'"
          >add new move</base-button
        >
      </form>
    </div>
  </base-section>
</template>
<style scoped>
.form-container {
  margin: auto;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  border-top: 6px solid #708654;
}

.form-container h2 {
  text-align: center;
  color: #708654;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

button {
  margin-top: 1.5rem;
  width: 100%;
  background-color: #708654;
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #5e7345;
}
</style>
