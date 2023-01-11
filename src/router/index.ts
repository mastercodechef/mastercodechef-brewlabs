import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/PageHome.vue';
import Project from '../views/PageProject.vue';
import Services from '../views/PageServices.vue';
import NotFound from '../views/PageNotFound.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Brewlabs Home' }
  },
  {
    path: '/factory',
    name: 'Factory',
    component: Services,
    meta: { title: 'Brewlabs Factory' }
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 }
  },
});

export const updatePageMeta = (title: string) => {
  document.title = title;
}

export default router;
