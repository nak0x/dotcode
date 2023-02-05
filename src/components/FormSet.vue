<template>
  <div class="form-container">
    <div class="field-container" v-for="(v, i) in availableFields" :key="i">
      <div class="field" v-if="fields.indexOf(v.name) != -1 && v.type!='textarea'">
        <label :for="v.name">{{"<"+v.name+"/>"}}</label>
        <input :type="v.type" :name="v.name" :id="v.name" :placeholder="v.placeholder">
      </div>
      <div class="field" v-if="fields.indexOf(v.name) != -1 && v.type=='textarea'">
        <label :for="v.name">{{"<"+v.name+"/>"}}</label>
        <textarea :type="v.type" :name="v.name" :id="v.name" :placeholder="v.placeholder"></textarea>
      </div>
    </div>
    <router-link :to="dataSendLink" class="btn-container"><button type="submit">{{dataButtonLabel}}</button></router-link>
  </div>
</template>

<script>
export default {
  name: "form-set",
  props: [
      "dataFields",
      "dataButtonLabel",
      "dataSendLink"
  ],
  data(){
    return {
      fields: [],
      availableFields: {
        name: {
          name: "name",
          type: "text",
          placeholder: "Name"
        },
        email: {
          name: "email",
          type: "email",
          placeholder: "Email"
        },
        message: {
          name: "message",
          type: "textarea",
          placeholder: "Message"
        },
        password: {
          name: "password",
          type: "password",
          placeholder: "Password"
        }
      }
    }
  },
  beforeMount() {
    this.fields = this.dataFields.split(",");
    console.log(this.fields)
  },
  mounted() {window.scrollTo(0, 0)}
}
</script>

<style scoped>
.btn-container{
  display: grid;
  text-decoration: none;
}

.form-container{
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.field{
  display: flex;
  flex-direction: column;
  gap: .2rem;
}
label{
  font-size: 18pt;
}

textarea{
  min-height: 6rem;
}

input, textarea{
  padding: 1rem;
  min-width: 30rem;
  font-size: 13pt;
  background-color: transparent;
  border-bottom: solid 2px var(--clr-text);
}

input:hover, textarea:hover{
  background-color: #fff2;
}

input:focus-visible, textarea:focus-visible{
  outline: none;
  background-color: #fff;
  color: var(--clr-background);
  font-weight: 600;
}
</style>