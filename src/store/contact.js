export default {
    namespaced: true, 
    state() {
        return {
            contacts: [
                { id: 1, firstname: "John", lastname: "Doe", phone: 5551234567 },
                { id: 2, firstname: "Jane", lastname: "Smith", phone: 5552345678 },
                { id: 3, firstname: "Alice", lastname: "Johnson", phone: 5553456789 },
                { id: 4, firstname: "Bob", lastname: "Williams", phone: 5554567890 },
                { id: 5, firstname: "Charlie", lastname: "Brown", phone: 5555678901 },
                { id: 6, firstname: "Emily", lastname: "Davis", phone: 5556789012 },
                { id: 7, firstname: "Michael", lastname: "Miller", phone: 5557890123 },
                { id: 8, firstname: "Sarah", lastname: "Wilson", phone: 5558901234 },
                { id: 9, firstname: "David", lastname: "Moore", phone: 5559012345 },
                { id: 10, firstname: "Laura", lastname: "Taylor", phone: 5550123456 }
            ],
            searchQuery: ""
        }
    },
    mutations: {
        setSearchQuery(state, query) {
            state.searchQuery = query;
        },
        addContact(state, contact) {
            state.contacts.push({
                id: state.contacts.length + 1,
                firstname: contact.firstName, 
                lastname: contact.lastName, 
                phone: contact.phone
            });  
        }
    },
    actions: {
        setSearchQuery({commit}, query) {
            commit("setSearchQuery", query);
        },
        addContact({ commit }, contact) {
            commit("addContact", contact);
        } 
    },
    getters: {
        contacts(state) {
            if (state.searchQuery) {
                return state.contacts.filter(contact => 
                    contact.firstname.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                    contact.lastname.toLowerCase().includes(state.searchQuery.toLowerCase())
                );
            }
            return state.contacts;
        }
    }
}