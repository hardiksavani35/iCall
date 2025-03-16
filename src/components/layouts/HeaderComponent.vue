<template>
    <div class="header">
      <span>Contacts</span>
      <button class="add-button" @click="addContact()">+</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {
            addContact() {
                this.$router.push('add-contact');
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        font-weight: bold;
        padding: 10px 15px;
        background: #fff;
        border-bottom: 1px solid #ddd;
    } 

    .add-button {
        font-size: 28px;
        background: none;
        border: none;
        color: dodgerblue;
        cursor: pointer;
        font-weight: bold;
        padding: 0 10px;
    }
</style>