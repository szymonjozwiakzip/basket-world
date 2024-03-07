import { createRouter, createWebHistory } from "vue-router";
import PLKView from "../views/Plk.vue";
import MainPage from "../views/MainPage.vue";
import a1eView from "../views/a1ethniki.vue";
import ABAView from "../views/Aba.vue";
import NemzetiView from "../views/Nemzeti.vue";
import BasketbolSuperLigiView from "../views/BasketbolSuperLigi.vue";
import BBLView from "../views/Bbl.vue";
import BNXTView from "../views/Plk.vue";
import BritishBasketLeagueView from "../views/Plk.vue";
import DiviziaAView from "../views/Plk.vue";
import EstonianLatvianView from "../views/Plk.vue";
import FPBView from "../views/Plk.vue";
import IsraelSuperLeagueView from "../views/Plk.vue";
import LegaBasketAView from "../views/Plk.vue";
import LKLView from "../views/Plk.vue";
import NBLView from "../views/Plk.vue";
import NikeSBLView from "../views/Plk.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/plk",
    name: "PLKView",
    component: PLKView,
  },
  {
    path: "/a1ethniki",
    name: "a1eView",
    component: a1eView,
  },
  {
    path: "/aba",
    name: "ABAView",
    component: ABAView,
  },
  {
    path: "/nemzeti",
    name: "NemzetiView",
    component: NemzetiView,
  },
  {
    path: "/basketbol-super-ligi",
    name: "BasketbolSuperLigiView",
    component: BasketbolSuperLigiView,
  },
  {
    path: "/bbl",
    name: "BBLView",
    component: BBLView,
  },
  {
    path: "/bnxt",
    name: "BNXTView",
    component: BNXTView,
  },
  {
    path: "/britishbl",
    name: "BritishBasketLeagueView",
    component: BritishBasketLeagueView,
  },
  {
    path: "/divizia-a",
    name: "DiviziaAView",
    component: DiviziaAView,
  },
  {
    path: "/est-lat",
    name: "EstonianLatvianView",
    component: EstonianLatvianView,
  },
  {
    path: "/fpb",
    name: "FPBView",
    component: FPBView,
  },
  {
    path: "/israel-super-league",
    name: "IsraelSuperLeagueView",
    component: IsraelSuperLeagueView,
  },
  {
    path: "/legabasket-a",
    name: "LegaBasketAView",
    component: LegaBasketAView,
  },
  {
    path: "/lkl",
    name: "LKLView",
    component: LKLView,
  },
  {
    path: "/nbl",
    name: "NBLView",
    component: NBLView,
  },
  {
    path: "/nikesbl",
    name: "NikeSBLView",
    component: NikeSBLView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
