<template>
    <ContactSearchComponent />
    <ContactListComponent />
</template>
  
<script>   
import ContactSearchComponent from './ContactSearchComponent.vue';
import ContactListComponent from './ContactListComponent.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        ContactSearchComponent,
        ContactListComponent
    }
}
</script>
  
<style>
</style>