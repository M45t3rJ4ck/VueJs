<template>

  <div class="index container">

    <div class="card" v-for="note in notes" :key="note.id">

      <div class="card-content">

        <i class="material-icons delete" @click="deleteNote(note.id)">delete</i>

        <h2 class="indigo-text">{{ note.title }}</h2>

        <ul class="details">

          <li v-for="(detail, index) in note.details" :key="index">

            <span class="chip">{{ detail }}</span>

          </li>

        </ul>

      </div>

      <span class="btn-floating btn-large halfway-fab skyblue">

        <router-link :to="{ name: 'EditNote', params: { note_slug: note.slug } }">

          <i class="material-icons edit">edit</i>

        </router-link>

      </span>

    </div>
  
  </div>

</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      notes: [
        
      ]
    }
  },
  methods: {
    deleteNote (id) {
      // console.log(id)
      // Delete doc from firestore
      db.collection('notes').doc(id).delete().then( () => {
        this.notes = this.notes.filter(note => {
          return note.id != id
        })
      })
    }
  },
  created () {
    // Fetch Data from Firestore
    db.collection('notes').get().then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data(), doc.id)
        let note = doc.data()
        note.id = doc.id
        this.notes.push(note)
      })
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }
  
  .index h2 {
    font-weight: 1.8em;
    text-align: center;
    margin-top: 0;
  }
  
  .index .details {
    margin: 30px auto;
  }
  
  .index .details li {
    display: inline-block;
  }
  
  .index .delete {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    font-size: 1.4em;
    color: #aaa;
  }

</style>
