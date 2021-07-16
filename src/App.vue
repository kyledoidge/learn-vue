<template>
  <Header />
    <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
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
