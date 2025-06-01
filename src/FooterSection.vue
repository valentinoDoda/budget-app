<template>
  <div class="footer">
    <base-section>
      <div class="terms">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="mailto:valododa123@gmail.com">Contact: valododa123@gmail.com</a></li>
        </ul>
        <p>© Valentin Doda.</p>
      </div>
    </base-section>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 120px;
  min-width: 100%;
  background-color: #171616;
}

a,
p {
  color: #71746b;
}

ul li {
  padding-top: 6px;
}
.terms {
  display: flex;
  align-items: end;
  justify-content: space-between;
}
</style>
