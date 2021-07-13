<template>
  <Container>
    <template v-slot:title>
      <Title text="The Title" ></Title>
    </template>
    <template v-slot:desc>
      <p>This is a button ^^</p>
    </template>
  </Container>
  <h1 @click="test()" :class="classVal">{{text}}</h1>
</template>

<script>
import Container from './components/Container.vue'
import Title from './components/Title.vue'

export default {
  setup (props, context) {
    console.log(`Props: ${props}`)
    console.log(`Context: ${context}`)
  },
  components: {
    Container,
    Title
  },
  data () {
    return {
      text: 'Hello World!',
      classVal: 'title'
    }
  },
  methods: {
    test () {
      console.log(this)
    }

  }
}
</script>

<style scoped>
  .title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem;
  }
</style>
