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
  // Lifecycle hook. This is called first (before component is setup)
  setup (props, context) {
    console.log(`Props: ${props}`)
    console.log(`Context: ${context}`)
  },
  // lifecycle hook. this is called after the component is created and set up but not yet mounted into DOM
  created () {
    console.log('Component created and rendered')
  },
  // lifecycle hook. this is called after the component is mounted into DOM
  mounted () {
    console.log('Mounted')
  },
  components: {
    Container,
    Title
  },
  // Watch data. When data changed, call associated same name function
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
      let text = ''
      for (let i = 0; i < 10; i++) {
        const num = (Math.floor((Math.random() * 26 + 65))) // Random Capital letter
        text += String.fromCharCode(num)
      }
      this.text = text
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
    font-size: var(--textSize);
  }
</style>
