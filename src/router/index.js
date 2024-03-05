import { createRouter, createWebHistory } from "vue-router";
import PLKView from "../views/Plk.vue";
import MainPage from "../views/MainPage.vue"; // Dodaj import dla komponentu Main

const routes = [
  {
    path: "/plk",
    name: "PLKView",
    component: PLKView,
  },
  {
    path: "/",
    name: "Main", // Nazwa ścieżki
    component: MainPage, // Komponent dla ścieżki głównej
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
