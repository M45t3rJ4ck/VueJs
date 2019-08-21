<template>

  <div id="app">
    
    <h1>{{ title }}</h1>

    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
    <Blogs />
    
  </div>

</template>

<script>

import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blogs from './Blogs'

export default {
  name: 'app',
  components: {
    Navbar,
    OnlineFriends,
    AllFriends,
    Blogs
  },
  data () {
    return {
      title: 'My first Vue.js App',
      friends: [
        { name: 'Fluffy', online: true },
        { name: 'Bunny', online: false },
        { name: 'Scruffy', online: true },
        { name: 'Kitty', online: false },
        { name: 'Puppy', online: true }
      ]
    }
  },
  methods: {
    deleteFriend (payload) {
      // console.log(payload)
      this.friends = this.friends.filter(friend => {
        // console.log(friend.name)
        return friend.name !== payload.name
      })
    }
  }
}

</script>

<style>

  #app {
    font-family: 'Comic Sans MS', Helvetica, Arial, sans-serif;
    text-align: center;
    font-weight: normal;
    color: #2c3e50;
    margin-top: 100px;
    padding: 10;
  }

</style>
