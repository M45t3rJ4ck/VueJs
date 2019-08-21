<template>

    <div class="signup container">

        <form class="card-panel" @submit.prevent="signup">

            <h2 class="center deep-purple-text">Sign Up</h2>
            <div class="field">

                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">

            </div>
            <div class="field">

                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">

            </div>
            <div class="field">

                <label for="username">Username:</label>
                <input type="text" name="username" v-model="username">

            </div>
            <p class="red-text center" v-if="feedback">{{ feedback }}</p>
            <div class="field center">

                <button class="btn deep-purple">Sign Up</button>

            </div>

        </form>

    </div>
    
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import functions from 'firebase/functions'

export default {
    name: 'SignUp',
    data () {
        return {
            email: null,
            password: null,
            username: null,
            feedback: null,
            slug: null
        }
    },
    methods: {
        signup () {
            if(this.username && this.email && this.password){
                this.slug = slugify(this.username, {
                    replacement: '-',
                    remove: /[$*_=~.()'"!-:@]/g,
                    lower: true
                })
                let checkUsername = firebase.functions().httpsCallable('checkUsername')
                checkUsername({ slug: this.slug }).then(result => {
                    // console.log(result)
                    if(!result.data.unique){
                        this.feedback = ">>This username already exists<<"
                    } else {
                        this.feedback = ">>This username is free to use<<"
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
                            // console.log(cred.user)
                            db.collection('users').doc(this.slug).set({
                                username: this.username,
                                geolocation: null,
                                user_id: cred.user.uid
                            }).then(() => {
                                this.$router.push({ name: 'GMap' })
                            })
                        }).catch(err => {
                            console.log(err)
                            this.feedback = err.message
                        })
                    }
                })
                // console.log(this.slug)
            } else {
                this.feedback = ">>You must enter all fields<<"
            }
        }
    }
}

</script>

<style>

    .signup {
        max-width: 400px;
        margin-top: 60px;
    }

    .signup h2 {
        font-size: 2.4em;
    }

    .signup .field {
        margin-bottom: 16px;
    }

</style>
