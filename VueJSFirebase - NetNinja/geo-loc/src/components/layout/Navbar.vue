<template>

    <div class="navbar">

        <nav class="deep-purple darken-1">

            <div class="container">

                <router-link class="brand-logo" id="title" :to="{ name: 'GMap' }">Geo Locate Members</router-link>
                <a v-if="user">{{ user.email }}</a>
                <ul class="right">
                    
                    <li v-if="!user"><router-link :to="{ name: 'SignUp' }">Sign Up</router-link></li>
                    <li v-if="!user"><router-link :to="{ name: 'LogIn' }">Login</router-link></li>
                    <li v-if="user"><a @click="logout">Log Out</a></li>

                </ul>

            </div>

        </nav>

    </div>
    
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    data () {
        return {
            user: null
        }
    },
    methods: {
        logout () {
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'LogIn' })
            })
        }
    },
    created () {
        // let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            } else {
                this.user = null
            }
        })
    }
}

</script>

<style>

    .navbar #title {
        position: relative;
        float: left;
    }

</style>
