<template lang="">
    <div>
        <form class="newEnterprise">
            <label for="">Name:<input type="text" name="" id="new-name" v-model="inputName"/></label>
            <label for="">Adress:<input type="text" name="" id="new-adress" v-model="inputAdress"/></label>
            <label for="">Phone:<input type="text" name="" id="new-phone" v-model="inputPhone"/></label>
            <label for="">Specialization:<input type="text" name="" id="new-specialization" v-model="inputSpecialization"/></label>
            <label for="">Hours:<input type="text" name="" id="new-hours" v-model="inputHours"/></label>
            <button @click="newEnterprises()">Create new</button>
        </form>
    </div>
</template>
<script>
export default {
  name: "AddEnterprisePage",
  data() {
    return {
      inputName: "",
      inputAdress: "",
      inputPhone: "",
      inputSpecialization: "",
      inputHours: "",
      enterprise: {},
    };
  },
  watch: {
    enterprise() {
        console.log("enterprise yes");
        console.log(this.enterprise);
        localStorage.clear();
      localStorage.setItem('enterprise',JSON.stringify(this.enterprise));
    },
  },
  methods: {
    newEnterprises() {
      this.enterprise = {
        name: this.inputName,
        address: this.inputAdress,
        phone: this.inputPhone,
        specialization: this.inputSpecialization,
        hours: this.inputHours,
      };
      console.log(this.enterprise);
    },
  },
};
</script>
<style lang="css">
</style>