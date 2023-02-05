<template>
  <div class="code-block" v-if="lines.length > 0">
    <CodeLine v-for="(line, idx) in lines" :key="idx" :data-words="line.words" ></CodeLine>
  </div>
</template>

<script>
import CodeLine from "@/components/CodeLine.vue";
export default {
  name: "CodeBlock.vue",
  data(){
    return {
      lines: []
    }
  },
  props: ["dataLines"],
  components: {
    "CodeLine": CodeLine
  },
  mounted() {
    for(let i=0; i < this.dataLines; i++){
      this.lines.push({
        _id: i,
        words: Math.floor(Math.random()*7)+4
      })
    }
    console.log(this.lines)
  }
}
</script>

<style scoped>

.code-block{
  display: grid;
  gap: .5rem;
}

</style>