<template>

    <div class="add-note container">

        <h2 class="center-align indigo-text">Add New Note</h2>

        <form @submit.prevent="AddNote">

            <div class="field title">

                <label for="title">Note Title:</label>
                <input type="text" name="title" v-model="title" />

            </div>

            <div class="field" v-for="(det, index) in details" :key="index">

                <label for="detail">Detail:</label>
                <input type="text" name="detail" v-model="details[index]" />
                <i class="material-icons delete" @click="deleteDet(det)">delete</i>

            </div>

            <div class="field add-detail">

                <label for="add-detail">Add Detail:</label>
                <input type="text" name="add-detail" @keydown.tab.prevent="addDet" v-model="another"/>

            </div>

            <div class="field center-align">
                
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
                <button class="btm green">Add Note</button>

            </div>

        </form>

    </div>
    
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'AddNote',
    data () {
        return {
            title: null,
            another: null,
            details: [],
            feedback: null,
            slug: null
        }
    },
    methods: {
        AddNote () {
            // console.log(this.title, this.details)
            if(this.title){
                this.feedback = null
                // Create a slug
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!-:@]/g,
                    lower: true
                })
                // console.log(this.slug)
                db.collection('notes').add({
                    title: this.title,
                    slug: this.slug,
                    details: this.details
                }).then(() => {
                    this.$router.push({ name: 'Index' })
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = '>>You must enter a Note Title<<'
            }
        },
        addDet () {
            if(this.another){
                this.details.push(this.another)
                // console.log(this.details)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = '>>You must enter a value to enter details of a note<<'
            }
        },
        deleteDet (det) {
            this.details = this.details.filter(detail => {
                return detail != det
            })
        }
    }
}

</script>

<style>

    .add-note {
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
    }

    .add-note h2 {
        font-size: 2em;
        margin: 20px auto
    }

    .add-note .field {
        margin: 20px auto;
        position: relative;
    }

    .add-note .delete {
        position: absolute;
        right: 0;
        bottom: 16px;
        color: #aaa;
        font-size: 1.4em;
        cursor: pointer;
    }

</style>
