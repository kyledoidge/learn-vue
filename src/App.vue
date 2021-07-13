<template>
  <Container >
    <template v-slot:title>
      <Title text="The Title" ></Title>
    </template>
    <template v-slot:desc>
      <p>This is a button ^^</p>
    </template>
  </Container>
  <h1 @click="test()" :class="classVal" :style="cssVars">{{text}}</h1>
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
  watch: {
    text (newText, oldText) {
      console.log('YOU CLICKED SHIT')
      console.log(newText)
      console.log(oldText)
    }
  },
  data () {
    return {
      text: 'Hello World!',
      classVal: 'title',
      textSize: '5rem'
    }
  },
  computed: {
    cssVars () {
      return {
        '--textSize': this.textSize
      }
    }
  },
  methods: {
    test () {
      this.text = 'Clicked'
    }

  }
}
</script>

<style scoped>
  * {
    --theSize: 1rem;
    }

  .title {
    font-family: 'Courier New', Courier, monospace;
    font-size: var(--theSize);
  }
</style>
