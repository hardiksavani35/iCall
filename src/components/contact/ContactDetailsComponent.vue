<template>
    <div class="view-contact">
        <div class="header">
            <button class="cancel" @click="goBack">Back</button>
            <span class="title">View Contact</span>
            <button class="done" @click="editContact">Edit</button>
        </div>

        <div class="profile-section">
            <div class="profile-pic">
                <i class="fas fa-user"></i>
            </div>
            <h2>{{ contact.firstname || 'No Name' }} {{ contact.lastname || '' }}</h2>
            <p>{{ contact.phone || 'No Phone' }}</p>
        </div>

        <div class="action-buttons">
            <button class="btn btn-light"><i class="fas fa-phone"></i></button>
            <button class="btn btn-light"><i class="fas fa-comment"></i></button>
            <button class="btn btn-light"><i class="fas fa-envelope"></i></button>
            <button class="btn btn-light"><i class="fas fa-trash"></i></button>
        </div>
    </div>
</template>

<script> 
export default {
    computed: { 
        contact() {
            return this.$store.getters['contact/contacts'].find(contact => contact.id == this.$route.params.id) || {};
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        editContact() { 
            //
        }
    },
    watch: {
        '$route.params.id'(id) { 
            this.getContact(id);
        }
    }
}
</script>

<style scoped>
    .add-contact { background: #f9f9f9; height: 100vh; font-family: 'Arial', sans-serif; } 
    .header { display: flex; justify-content: space-between; align-items: center; padding: 15px; background: #fff; font-size: 18px; font-weight: bold; border-bottom: 1px solid #ddd; } 
    .cancel { color: red; border: none; background: none; font-size: 16px; } 
    .done { color: dodgerblue; border: none; background: none; font-size: 16px; } 
    .profile-section { text-align: center; padding: 30px; background: #e9e9e9;}
    .profile-section .profile-pic { width: 100px; height: 100px; background: #ddd; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 40px; margin: auto; }
    .profile-section h2 { margin-top: 10px; font-size: 22px; } .profile-section p { color: gray; font-size: 16px; } 
    .action-buttons .btn { font-size: 18px; padding: 12px; margin: 10px; }
    .delete-btn { color: red; font-weight: bold; }
    .action-buttons { display: flex; justify-content: space-around; flex-wrap: wrap; background: #e9e9e9; }
    .action-buttons .btn { flex: 1 1 20%; margin: 10px 5px; }
</style>