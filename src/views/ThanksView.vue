<template>
<div class="view-container">
  <h1>Thanks !</h1>
  <p>We give you an answer in two days {{cool}}</p>
</div>
</template>

<script>
export default {
  name: "GreetingsView",
  data(){
    return {
      cool: "(づ｡◕‿‿◕｡)づ"
    }
  },
  mounted() {window.scrollTo(0, 0)}
}
</script>

<style scoped>
.view-container{
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  place-items: center;
  padding-top: 30vh;
}
</style>