<template>
  <div class="moves_nav">
    <p>moves</p>
    <div class="filter">
      <div class="filter_type">
        <select ref="type" name="" id="">
          <option selected value="">all</option>
          <option value="income">income</option>
          <option value="expense">exprense</option>
        </select>
      </div>
      <div class="search">
        <img @click="changeType" src="../icons/search_4121114.png" alt="" />
      </div>
    </div>
  </div>
  <h3
    style="text-align: center; font-size: 23px; padding: 10px; color: #999999"
    v-if="allMovements.length == 0"
  >
    No momvements yet, add some
  </h3>
  <ul v-else>
    <move-element
      v-for="movement in allMovements"
      :movementItem="movement"
      :key="movement.title"
    ></move-element>
  </ul>
</template>
<script>
import MoveElement from "../components/MoveElement.vue";
export default {
  components: {
    MoveElement,
  },
  computed: {
    allMovements() {
      return this.$store.getters.getMoves;
    },
  },
  mounted() {
    console.log("I done");
    this.$store.dispatch("setMovements");
  },
  methods: {
    changeType() {
      console.log(this.$refs.type.value);
    },
  },
};
</script>
<style scoped>
.moves_nav p {
  color: white;
}
.moves_nav {
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #1a1f14;
  padding: 10px;
  display: flex;
}
.filter {
  gap: 8px;
  display: flex;
}
option {
  font-size: 12px;
  color: black;
}
select {
  outline: none;
  color: white;
  font-size: 16px;
  background: none;
  border: none;
}
.search {
  height: 20px;
  width: 20px;
}
.search img {
  cursor: pointer;
  height: 100%;
  width: 100%;
  filter: brightness(0) saturate(100%) invert(95%) sepia(22%) saturate(233%)
    hue-rotate(24deg) brightness(92%) contrast(83%);
}
</style>
