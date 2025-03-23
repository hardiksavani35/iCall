import { createStore } from 'vuex'

import contact from './store/contact.js'; 
import favorite from './store/favorite.js';

const store = createStore({
    modules: {
        contact: contact,
        favorite: favorite
    }
});

export default store;