// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";

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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
