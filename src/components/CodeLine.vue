F<template>
  <div class="line-container" v-if="words">
    <div
        class="word"
        v-for="(word, idx) in words"
        :key="idx"
        :style="`height: 1rem;border-radius: .3rem;display: block;background-color: ${word.color};width: ${word.width}rem;`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CodeLine.vue",
  data(){
    return {
      words: []
    }
  },
  props: ["dataWords"],
  mounted() {
    const colors = ["#fafbfe", "#3299de", "#de66de", "#de7732"]
    for(let i=0; i < this.dataWords; i++){
      this.words.push({
        color: colors[Math.floor(Math.random()*colors.length)],
        width: Math.floor(Math.random() * 5)+1
      })
    }
  }
}
</script>

<style scoped>
  .line-container{
    display: flex;
    gap: .5rem;
  }

  .word{
    filter: grayscale(1) opacity(.3) brightness(5);
    transition: filter .5s ease-in-out;
    transition-delay: 3s;
  }

  .word:hover{
    filter: grayscale(0);
    transition: filter 0ms ease-in-out;
    transition-delay: 0s;
  }
</style>