<template>
  <div class="view-container">
    <div class="left">
      <code-block data-lines="26"></code-block>
    </div>
    <div class="right">
      <h1 class="section-title">{{"<"+"Discover the bootcamp"+"/>"}}</h1>
      <p class="description">
        Accelerate your career with our online bootcamp. Learn in-demand skills from industry professionals at your own pace. Our hands-on, project-based curriculum will give you a well-rounded education and a portfolio of work to showcase. Join our supportive community of classmates and alumni for networking opportunities. Start your journey today.
      </p>
      <button class="cta">Discover the bootcamp</button>
    </div>
  </div>
</template>

<script>
import codeBlock from "@/components/CodeBlock.vue";
export default {
  name: "helloWorld",
  components: {
    codeBlock
  }
}
</script>

<style scoped>
.view-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-inline: 2rem;
}

.right{
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
}

</style>