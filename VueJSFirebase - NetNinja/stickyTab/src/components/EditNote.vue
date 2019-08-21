<template>

    <div class="edit-note container" v-if="note">

        <h2>Edit {{ note.title }} Note</h2>

        <form @submit.prevent="EditNote">

            <div class="field title">

                <label for="title">Note Title:</label>
                <input type="text" name="title" v-model="note.title" />

            </div>

            <div class="field" v-for="(det, index) in note.details" :key="index">

                <label for="detail">Detial:</label>
                <input type="text" name="detail" v-model="note.details[index]" />
                <i class="material-icons delete" @click="deleteDet(det)">delete</i>

            </div>

            <div class="field add-detail">

                <label for="add-detail">Add Detail (tab to add):</label>
                <input type="text" name="add-detail" @keydown.tab.prevent="addDet" v-model="another"/>

            </div>

            <div class="field center-align">
                
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
                <button class="btm green">Update Note</button>

            </div>

        </form>

    </div>
    
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditNote',
    data () {
        return {
            note: null,
            another: null,
            feedback: null
        }
    },
    methods: {
        EditNote () {
            // console.log(this.note.title, this.note.details)
            if( this.note.title){
                this.feedback = null
                // Create a slug
                this.note.slug = slugify(this.note.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!-:@]/g,
                    lower: true
                })
                // console.log(this.slug)
                db.collection('notes').doc(this.note.id).update({
                    title: this.note.title,
                    slug: this.note.slug,
                    details: this.note.details
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
                this.note.details.push(this.another)
                // console.log(this.details)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = '>>You must enter a value to enter details of a note<<'
            }
        },
        deleteDet (det) {
            this.note.details = this.note.details.filter(detail => {
                return detail != det
            })
        }
    },
    created () {
        let ref = db.collection('notes').where('slug', '==', this.$route.params.note_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data())
                this.note = doc.data()
                this.note.id = doc.id
            })
        })
    }
}

</script>

<style>

    .edit-note {
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
    }

    .edit-note h2 {
        font-size: 2em;
        margin: 20px auto
    }

    .edit-note .field {
        margin: 20px auto;
        position: relative;
    }

    .edit-note .delete {
        position: absolute;
        right: 0;
        bottom: 16px;
        color: #aaa;
        font-size: 1.4em;
        cursor: pointer;
    }

</style>
