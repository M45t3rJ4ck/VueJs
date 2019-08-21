<template>

    <div class="login container">

        <form class="card-panel" @submit.prevent="login">

            <h2 class="center deep-purple-text">Log In</h2>
            <div class="field">

                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">

            </div>
            <div class="field">

                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">

            </div>
            <p class="red-text center" v-if="feedback">{{ feedback }}</p>
            <div class="field center">

                <button class="btn deep-purple">Log In</button>

            </div>

        </form>

    </div>
    
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'LogIn',
    data () {
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        login () {
            // console.log(this.email, this.password)
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred => {
                    // console.log(cred.user)
                    this.$router.push({ name: 'GMap' })
                }).catch(err => {
                    // console.log(err)
                    this.feedback = err.message
                })
                this.feedback = null
            } else {
                this.feedback = '>>You must fill in both fields<<'
            }
        }
    }
}

</script>

<style>

    .login {
        max-width: 400px;
        margin-top: 60px;
    }

    .login h2 {
        font-size: 2.4em;
    }

    .login .field {
        margin-bottom: 16px;
    }

</style>
