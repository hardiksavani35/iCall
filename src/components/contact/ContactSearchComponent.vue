<template>
    <div class="search-bar">
        <input type="text" v-model="searchQuery" @input="searchContacts" placeholder="Search">
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        searchContacts() {
            this.$store.commit('contact/setSearchQuery', this.searchQuery);
        }
    }
}
</script>

<style>
    .search-bar {
        padding: 10px;
    }
    .search-bar input {
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        background-color: #f9f9f9;
        color: black;
        width: 100%;
    }
    .search-bar input::placeholder {
        color: #888;
    }
</style>