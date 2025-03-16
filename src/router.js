import { createWebHistory, createRouter } from 'vue-router'

import ContactsComponent from './components/contact/ContactsComponent.vue';
import AddContactComponent from './components/contact/AddContactComponent.vue';

const routes = [
    { path: '/', name: "contact", component: ContactsComponent },
    { path: '/add-contact', name: "add-contact", component: AddContactComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;