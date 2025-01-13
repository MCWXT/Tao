import { ref, reactive, watch } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '/assets/data/routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;