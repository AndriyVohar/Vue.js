<template>
  <td>{{ companyObj.name }}</td>
  <td>{{ companyObj.address }}</td>
  <td>{{ companyObj.phone }}</td>
  <td>{{ companyObj.specialization }}</td>
  <td>{{ companyObj.workingHours }}</td>
  <td><button @click="onDeleteCompany(companyObj.name)">Delete</button></td>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CompanyComponent",
  props: {
    companyObj: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["onDeleteCompany"]),
  },
};
</script>

<style lang="scss" scoped>
</style>