import { createWebHistory, createRouter } from 'vue-router'

import ContactsComponent from './components/contact/ContactsComponent.vue';

const routes = [
    { path: '/', name: "name", component: ContactsComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;