<template name="title">
<div>
  <button>
    <slot name="title"/>
  </button>
  <slot name="desc" />
</div>
</template>

<script>

export default {
  props: {

  },
  setup () {
  },
  methods: {
    click () {
      console.log()
    }
  }
}
</script>

<style scoped>
    #container {
        display: block;
        position: relative;
    }
</style>
