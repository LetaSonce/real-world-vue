import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsVue.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/event/:id',
      name: 'EventDetails',
      props: true,
      component: EventDetailsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    }
  ]
})

export default router
