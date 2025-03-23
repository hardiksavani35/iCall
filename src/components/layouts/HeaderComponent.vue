<template>
    <div class="header">
        <span>{{route}}</span>
        <button class="add-button" @click="addContact()" v-if="route == 'contact'">+</button> 
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
        }, 
        computed: {
            route() {
                return this.$route.name;
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
    .header span {
        text-transform: capitalize;
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