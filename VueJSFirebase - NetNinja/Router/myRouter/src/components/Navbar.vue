<template>

    <nav class="main-nav">

        <ul>

            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
            <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>

        </ul>

        <h2>User Profiles</h2>

            <ul>

                <li v-for="(id, index) in userIds" :key="index">

                    <router-link :to="{ name: 'Profile', params: { user_id: id } }">

                        <span>Profile {{ id }}</span>

                    </router-link>

                </li>

            </ul>

        <h2>Communication Controls</h2>

            <ul>

                <li><button @click="addNote">Pin a Note</button></li>
                <li><button @click="sendMessage">Send a Message</button></li>
                <li><button @click="searchUser">Find a User</button></li>

            </ul>

    </nav>
    
</template>

<script>

export default {
    name: 'Navbar',
    data () {
        return {
            userIds: ['1', '2', '3', '4', '5']
        }
    },
    methods: {
        sendMessage () {
            this.$router.push({ name: 'Message' })
        },
        addNote () {
            this.$router.go(-1)
        },
        searchUser () {
            this.$router.go(+1)
        }
    }
}

</script>

<style>

    ul {
        list-style-type: none;
        padding: 0;
    }
    router-link {
        color: #42b983;
    }
    li {
        display: inline-block;
        margin: 10px;
    }
    a.router-link-exact-active {
        color: orange;
    }

</style>
