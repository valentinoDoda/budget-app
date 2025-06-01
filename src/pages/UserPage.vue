<template>
  <base-section>
    <div class="user_page">
      <div class="user_card">
        <div class="user_logo">
          <div class="logo_img">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt=""
              srcset=""
            />
          </div>
          <router-link to="/register">EDIT</router-link>
        </div>
        <div class="user_info">
          <h4>{{userData.name}}</h4>
          <p>{{userData.job}}</p>
        </div>
        <div class="user_budget">
          <h4>Budget</h4>
          <p>${{userData.budget}}</p>
        </div>
        <div class="user_nav">
          <div class="user_option">
            <div class="option_img">
              <img src="../icons/home_2040461.png" alt="" srcset="" />
            </div>
            <router-link :to="{ name: 'UserHome' }">Home</router-link>
          </div>
          <div class="user_option">
            <div class="option_img">
              <img
                src="../icons/money-transaction_12313319.png"
                alt=""
                srcset=""
              />
            </div>
            <router-link :to="{ name: 'UserMoves' }">Moves</router-link>
          </div>
          <div class="user_option">
            <div class="option_img">
              <img src="../icons/bar-chart_809171.png" alt="" srcset="" />
            </div>
            <router-link :to="{ name: 'UserStats' }">Statisticks</router-link>
          </div>
          <div class="user_option">
            <div class="option_img">
              <img src="../icons/add_5251381.png" alt="" srcset="" />
            </div>
            <router-link :to="{ name: 'UserAdd' }">Add</router-link>
          </div>
        </div>
        <base-button
          style="font-size: 16px"
          :type="''"
          :mode="'third'"
          :to="{ name: 'Hero' }"
          >log out</base-button
        >
      </div>
      <div>
        <router-view v-slot="{ Component }">
            <component :data="userData" :is="Component"></component>
        </router-view>
      </div>
    </div>
  </base-section>
</template>

<script>
export default{
  computed:{
      userData(){
        return this.$store.getters.getUserData
      }
  },
}
</script>
<style scoped>
.user_page {
    margin-top: 30px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.user_card {
  border-radius: 6px;
  background-color: #1a1f14;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.user_logo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.user_logo .logo_img {
  height: 50px;
  width: 50px;
}
.logo_img img {
  border-radius: 50px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.user_logo a {
  font-size: 12px;
  color: #ced8be;
}

.user_card {
  max-width: 300px;
  padding: 20px 10px;
}

.user_info p {
  color: #ced8be;
  font-size: 18px;
}

h4 {
  color: #e5eadd;
  font-size: 23px;
  font-weight: 500;
  font-family: var(--paragraphs-fonts);
}

.user_budget h4 {
  margin-bottom: 8px;
}

.user_budget {
  background-color: #708654;
  padding: 20px 10px;
  border-radius: 6px;
}

.user_budget p {
  font-size: 23px;
  color: #e5eadd;
}

.user_option {
  border-radius: 6px;
  padding: 10px;
  gap: 8px;
  display: flex;
  align-items: center;
}

.user_option:hover {
  background-color: #ced8be;
}

.user_option:hover a {
  color: #1a1f14;
}

.user_option:hover img {
  filter: brightness(0) saturate(100%) invert(5%) sepia(4%) saturate(6614%)
    hue-rotate(45deg) brightness(94%) contrast(86%);
}

.user_option a {
  color: #ced8be;
  width: 100%;
}
.option_img {
  height: 20px;
  width: 20px;
}

.user_nav {
  display: flex;

  flex-direction: column;
  gap: 16px;
}
.option_img img {
  filter: brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(7481%)
    hue-rotate(32deg) brightness(109%) contrast(101%);
  width: 100%;
  height: 100%;
}
</style>
