<template>
  <div>
    <company-filter />
    <button @click="onCreate">Create a company</button>
    <div class="output-companies">
      <table border="1">
        <tr>
          <td>Назва</td>
          <td>Адреса</td>
          <td>Номер телефону</td>
          <td>Спеціалізація</td>
          <td>Години праці</td>
          <td>Видалити</td>
        </tr>
        <tr v-for="company in getCompanies" :key="company">
          <company-component :companyObj="company"></company-component>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompanyComponent from "./CompanyComponent.vue";
import CompanyFilter from "./CompanyFilter.vue";
export default {
  name: "CompaniesPage",
  components: { 
    CompanyComponent,
    CompanyFilter,
  },
  methods: {
    onCreate() {
      this.$router.push({
        name: "config",
      });
    },
  },
  computed: {
    ...mapGetters(["getCompanies"]),
  },
};
</script>

<style lang="css">
.output-companies {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
table {
  max-width: 80vw;
}
td {
  padding: 5px;
}
</style>