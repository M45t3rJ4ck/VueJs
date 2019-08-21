import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import GMap from '@/components/home/GMap'
import SignUp from '@/components/auth/SignUp'
import LogIn from '@/components/auth/LogIn'
import ViewProfile from '@/components/profile/ViewProfile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // Check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      // User signed in, proceed to route
      next()
    } else {
      // User not signed in, redirect to login
      next({ name: 'LogIn' })
    }
  } else {
    next()
  }
})

export default router