<template>
  <li>
    <div class="move_element">
      <div class="move_type">
        <div class="type_bar income"></div>
      </div>
      <div class="move_title">
        <p>Title of the move</p>
      </div>
      <div class="move_value">$200</div>
      <div class="move_date"></div>
      <button>view more</button>
    </div>
  </li>
  <li>
    <div class="move_element">
      <div class="move_type">
        <div class="type_bar expense"></div>
      </div>
      <div class="move_title">
        <p>Title of the move</p>
      </div>
      <div class="move_value">$200</div>
      <div class="move_date"></div>
      <button @click="viewDetails">view more</button>
    </div>
  </li>
</template>
<script>
export default {
    methods:{
        viewDetails(){
            this.$router.push({name:"MoveDetail", params:{detail: "2"}})
        }
    }
}
</script>
<style scoped>
li{
    margin-top:23px;
}
button{
    cursor: pointer;
    background: none;
    border: none;
    font-size: 14px;
    text-decoration: underline;
    color: #cbcbdd;
}
.move_element{
    color: white;
    font-size: 18px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background-color: #1a1f14;
    padding: 10px;
}

.move_type{
    height: 100%;
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
