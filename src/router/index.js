import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeVue.vue";

import BuscadorPeleador from "@/views/BuscadorPeleador.vue";
import ListadoPeleadores from "@/views/ListadoPeleadores.vue";
import ResultadoPeleador from "@/views/ResultadoPeleador.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/buscador",
    name: "Buscador",
    component: BuscadorPeleador,
  },
  {
    path: "/peleadores",
    name: "Peleadores",
    component: ListadoPeleadores,
  },
  {
    path: "/peleadores/:id",
    name: "resultado",
    component: ResultadoPeleador,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;