<template>
    <h1>Homepage</h1>
    <router-link :to="{name: 'contact'}"><p>Go to contact</p></router-link>
    <h2 >The current user is {{user}}</h2>
    <button @click="changeUser">Click me to change user</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['changeUser'])
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
