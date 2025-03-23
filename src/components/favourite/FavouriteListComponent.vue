<template>
    <div class="container">
        <p v-if="!favourite || favourite.length === 0">No Favourites</p>
    </div>
</template>

<script> 
export default {
    computed: {
        favourite() {
            return this.$store.getters['favourite/favourites'];
        }
    }
};
</script>

<style scoped>
</style>