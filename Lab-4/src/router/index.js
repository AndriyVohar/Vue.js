import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import CompaniesPage from "@/components/CompaniesPage.vue";
import CompaniesConfig from "@/components/CompaniesConfig.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/companies",
    name: "companies",
    component: CompaniesPage,
  },
  {
    path: "/companies/:companyId?",
    name: "config",
    component: CompaniesConfig,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
