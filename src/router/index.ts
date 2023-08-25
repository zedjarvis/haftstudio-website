// Composables
import { setupLayouts } from "virtual:meta-layouts";
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from "vue-router/auto/routes"; // file routes


const router = createRouter({
  routes: setupLayouts(routes), // Register the file routes
  history: createWebHistory(),
})

export default router
