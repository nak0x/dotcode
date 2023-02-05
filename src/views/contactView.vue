<template>
  <div class="centered-view">
    <h3 class="form-title">{{"<"+"Contact us !"+"/>" }}</h3>
    <contact-form
        data-fields="name,email,message"
        data-button-label="Send !"
        data-send-link="/thanks"
    ></contact-form>
  </div>
</template>

<script>
import contactForm from "@/components/FormSet.vue";
export default {
  name: 'contactView',
  components: {
    contactForm
  },
  mounted() {window.scrollTo(0, 0)}
}
</script>

<style scoped>
.form-title{
  font-size: 21pt;
}
.centered-view{
  display: grid;
  place-items: center;
  grid-auto-flow: row;
  grid-auto-row: auto;
}
</style>