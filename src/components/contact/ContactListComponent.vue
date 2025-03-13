<template>
    <div class="contact-list">
        <div v-for="(contactsGroup, letter) in groupByContact" :key="letter" style="border-top: 1px solid #e9e9e9;">
            <div class="contact-section">{{ letter }}</div>
            <div v-for="contact in contactsGroup" :key="contact.id">
                {{ contact.firstname }} {{ contact.lastname }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            groupedContacts: []
        }
    },
    computed: {         
        contacts() {    
            return this.$store.getters['contact/contacts'];
        },
        groupByContact() {
            const groups = {};
            this.contacts.forEach(contact => {
                const letter = contact.firstname[0].toUpperCase();
                if (!groups[letter]) {
                    groups[letter] = [];
                }
                groups[letter].push(contact);
            });
            
            // Sort the groups by letter in ascending order
            const sortedGroups = Object.keys(groups).sort().reduce((result, key) => {
                result[key] = groups[key];
                return result;
            }, {});
            
            return sortedGroups;
        }
    }
}
</script>

<style>
    .contact-section {
        font-size: 12px;
        font-weight: bold;
        padding: 10px 15px;
        background: #f5f5f5;
        color: #555;
    }
    .contact-list div {
        padding: 10px 15px;
        display: block;
        align-items: center; 
        font-size: 16px;
    }
</style>