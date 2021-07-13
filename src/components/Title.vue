<template>
    <h1>{{text}}</h1>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {

  },
  props: {
    text: String
  }
})
</script>
