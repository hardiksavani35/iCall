import { createStore } from 'vuex'

import contact from './store/contact.js'; 

const store = createStore({
    modules: {
        contact: contact
    }
});

export default store;