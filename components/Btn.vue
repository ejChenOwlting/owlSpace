<template>
  <button class="btn font-bold" :class="{'is-w-full': wFull}">
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    text: String,
    wFull: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass" scoped>
.btn
  background-image: linear-gradient(90deg, $color-red 4.86%, $color-purple 164.58%)
  padding: .5rem 1.5em
  +tablet
    padding: .5rem 2.5em

  &.is-w-full
    width: 100%
    +tablet
      width: auto
</style>
