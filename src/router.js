import { createWebHistory, createRouter } from 'vue-router'

import ContactsComponent from './components/contact/ContactsComponent.vue';
import AddContactComponent from './components/contact/AddContactComponent.vue';
import ContactDetailsComponent from './components/contact/ContactDetailsComponent.vue';
import FavouritesComponent from './components/favourite/FavouritesComponent.vue';

const routes = [
    { path: '/', name: "contact", component: ContactsComponent },    
    { path: '/add-contact', name: "add-contact", component: AddContactComponent },
    { path: '/view-contact/:id', name: "view-contact", component: ContactDetailsComponent },
    { path: '/favourite', name: "favourite", component: FavouritesComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;