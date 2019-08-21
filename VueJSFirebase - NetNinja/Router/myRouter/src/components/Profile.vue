<template>

    <div class="profile">

        <h1>Profile Page of {{ userId }}</h1>

    </div>
    
</template>

<script>

export default {
    name: 'Profile',
    data () {
        return {
            userId: this.$route.params.user_id
        }
    },
    methods: {
        updateId () {
            this.userId = this.$route.params.user_id
        }
    },
    watch: {
        $route: 'updateId'
    }
}

</script>

<style>



</style>
