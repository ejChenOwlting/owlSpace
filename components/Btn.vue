<template>
  <component class="btn font-bold"
    :class="{'is-w-full': wFull}"
    :is="btnTag"
    :href="href"
    :rel="href ? 'noopener noreferrer' : undefined"
    :target="href ? '_blank' : undefined"
  >
    {{text}}
  </component>
</template>

<script>
export default {
  name: 'btn',
  props: {
    text: String,
    href: String,
    wFull: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    btnTag() {
      if (this.href) return 'a'
      else return 'button'
    }
  }
}
</script>

<style lang="sass" scoped>
.btn
  background-image: linear-gradient(90deg, $color-red 4.86%, $color-purple 164.58%)
  color: white
  display: inline-block
  text-decoration: none
  padding: .5rem 1.5em
  +tablet
    padding: .5rem 2.5em

  &.is-w-full
    width: 100%
    +tablet
      width: auto
</style>
