<template lang="">
    <div>
        <div class="menu">
            <form class="filters">
                Фільтр пошуку: 
                <label for="">Name:<input type="text" name="" id="filter-name" v-model="inputName"/></label>
                <label for="">Adress:<input type="text" name="" id="filter-adress" v-model="inputAdress"/></label>
                <label for="">Phone:<input type="text" name="" id="filter-phone" v-model="inputPhone"/></label>
                <label for="">Specialization:<input type="text" name="" id="filter-specialization" v-model="inputSpecialization"/></label>
                <button @click="filterEnterprises()">Find</button>
            </form>
        </div>
        <div class="page">
            <div v-for="enterprise in filteredEnterprisesList" :key="enterprise" class="enterprises">
                <div class="enterpr">Name: {{enterprise.name}}</div>
                <div class="enterpr">Adress: {{enterprise.adress}}</div>
                <div class="enterpr">Phone: {{enterprise.phone}}</div>
                <div class="enterpr">Specialization: {{enterprise.specialization}}</div>
                <div class="enterpr">Hours: {{enterprise.hours}}</div>
                <button @click="deleteEnterprise(enterprise)">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "EnterpriseListPage.vue",
  data() {
    return {
      inputName: null,
      inputAdress: null,
      inputPhone: null,
      inputSpecialization: null,
      enterprisesList: [
        {
          name: "Famous Brands Grocery Store",
          address: "123 Main Street",
          phone: "123-456-789",
          specialization: "food products",
          hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 2:00 PM",
        },
        {
          name: "Health Focus Pharmacy",
          address: "45 Medical Avenue",
          phone: "987-654-321",
          specialization: "medical supplies",
          hours: "Mon-Sat: 8:00 AM - 8:00 PM, Sun: 10:00 AM - 4:00 PM",
        },
        {
          name: "Tech City Electronics",
          address: "67 Tech Boulevard",
          phone: "111-222-333",
          specialization: "electronics",
          hours: "Mon-Fri: 10:00 AM - 7:00 PM, Sat: 10:00 AM - 5:00 PM",
        },
        {
          name: "Fashion Haven Boutique",
          address: "789 Style Street",
          phone: "555-123-456",
          specialization: "clothing and apparel",
          hours: "Mon-Sat: 10:00 AM - 6:00 PM, Sun: Closed",
        },
        {
          name: "Green Thumb Garden Center",
          address: "321 Garden Avenue",
          phone: "777-888-999",
          specialization: "gardening supplies",
          hours: "Mon-Sat: 9:00 AM - 5:00 PM, Sun: 11:00 AM - 3:00 PM",
        },
        {
          name: "AutoPro Auto Parts",
          address: "456 Car Street",
          phone: "444-333-222",
          specialization: "automotive parts",
          hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
        },
        {
          name: "Books 'n More Bookstore",
          address: "101 Reading Lane",
          phone: "666-999-111",
          specialization: "books and literature",
          hours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: 12:00 PM - 5:00 PM",
        },
      ],
      filteredEnterprisesList:null,
    };
  },
  mounted(){
    this.filteredEnterprisesList = this.enterprisesList;
    if (localStorage.getItem('enterprise')) {
        // console.log(localStorage.getItem('enterprise'));
        // console.log(JSON.parse(localStorage.getItem('enterprise')));
      this.enterprisesList.push(JSON.parse(localStorage.getItem('enterprise')));
    }
  },
  watch:{

  },
  methods: {
    filterEnterprises() {
        this.filteredEnterprisesList=this.enterprisesList;
        if(this.inputName){
            this.filteredEnterprisesList = this.filteredEnterprisesList.filter((obj)=>obj.name==this.inputName)
        }
        if(this.inputAdress){
            this.filteredEnterprisesList = this.filteredEnterprisesList.filter((obj)=>obj.adress==this.inputAdress)
        }
        if(this.inputPhone){
            this.filteredEnterprisesList = this.filteredEnterprisesList.filter((obj)=>obj.phone==this.inputPhone)
        }
        if(this.inputSpecialization){
            this.filteredEnterprisesList = this.filteredEnterprisesList.filter((obj)=>obj.specialization==this.inputSpecialization)
        }
    },
    deleteEnterprise(enterprise){
        let id = this.enterprisesList.indexOf(enterprise);
        this.enterprisesList.splice(id,1);
    }
  },
};
</script>
<style lang="css">
.link-to-add {
  border: 2px solid yellowgreen;
  color: yellowgreen;
  margin-bottom: 10px;
  margin-right: 20px;
}
.filters {
  margin: 10px;
}
.enterprises {
  display: flex;
  margin: 5px;
  border: 1px solid black;
}
.enterpr {
  margin-left: 10px;
}
</style>