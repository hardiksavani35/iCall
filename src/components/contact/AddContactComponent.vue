<template>
    <div class="add-contact">
        <div class="header">
            <button class="cancel" @click="goBack">Cancel</button>
            <span class="title">New Contact</span>
            <button class="done" @click="saveContact">Done</button>
        </div>
  
        <div class="contact-form">
            <div class="photo-section">
                <div class="photo-placeholder">
                    <i class="fas fa-user"></i>
                </div>
            </div>
  
            <div class="input-group">
                <input type="text" placeholder="First name (required)" v-model="contact.firstName" required>
            </div>
  
            <div class="input-group">
                <input type="text" placeholder="Last name (required)" v-model="contact.lastName" required>
            </div>
  
            <div class="input-group">
                <input type="text" placeholder="Company" v-model="contact.company">
            </div>
  
            <div class="input-group">
                <input type="tel" placeholder="Phone (required)" v-model="contact.phone" required>
            </div>

            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
    </div>
</template>
  
<script> 
export default {
    data() {
        return {
            contact: {
                firstName: '', 
                lastName: '',
                company: '',
                phone: ''
            },
            errorMessage: ''
        }
    }, 
    computed: {
        isValid() {
            return this.contact.firstName && this.contact.lastName && this.contact.phone;
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);  
        }, 
        saveContact() {
            if (!this.isValid) {
                this.errorMessage = "Please fill out the required fields.";
                return;
            }
            this.$store.dispatch('contact/addContact', this.contact).then(() => {
                this.$router.push('/');
            }).catch(err => {
                console.error("Error saving contact:", err);
            });
        }
    }
}
</script>
  
<style scoped>
    .add-contact { background: #f9f9f9; height: 100vh; font-family: 'Arial', sans-serif; } 
    .header { display: flex; justify-content: space-between; align-items: center; padding: 15px; background: #fff; font-size: 18px; font-weight: bold; border-bottom: 1px solid #ddd; } 
    .cancel { color: red; border: none; background: none; font-size: 16px; } 
    .done { color: dodgerblue; border: none; background: none; font-size: 16px; } 
    .contact-form { padding: 20px; background: #fff; border-radius: 10px; margin: 20px; } 
    .photo-section { display: flex; justify-content: center; margin-bottom: 20px; } 
    .photo-placeholder { width: 80px; height: 80px; background: #ddd; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; color: #777; } 
    .input-group { margin-bottom: 15px; } 
    p.error { color: #ba2323;}
    .input-group input { width: 100%; padding: 12px; border-radius: 10px; border: 1px solid #ccc; font-size: 16px; background: #f9f9f9; }
</style>