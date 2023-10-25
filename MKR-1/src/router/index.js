import { createRouter, createWebHashHistory } from "vue-router";

import EnterpriseListPage from '@/components/EnterpriseListPage.vue';
import AddEnterprisePage from '@/components/AddEnterprisePage.vue';
import AboutPage from '@/components/AboutPage.vue';


const routes = [
  {
    path: "/",
      component: EnterpriseListPage,
    name: "home",
  },
  { 
    path: "/add", 
    component: AddEnterprisePage, 
    name: "add" 
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about"
  }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  export default router