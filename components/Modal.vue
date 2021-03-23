<template>
  <div class="modal"
    v-body-scroll-lock="isScrollLock"
  >
    <slot></slot>
    <div class="border border__left"></div>
    <div class="border border__right"></div>
  </div>
</template>

<script>
export default {
  props: {
    isScrollLock: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  }
}
</script>

<style lang="sass" scoped>
$margin: 1.5rem
$padding: 2rem
$border-width: 1px
$frame-width: 20px

.modal
  +size(100%)
  +position(fixed, 0)
  background-color: rgba(black, .2)
  -webkit-backdrop-filter: blur(15px)
  backdrop-filter: blur(15px)
  padding: 1rem
  z-index: 50
  +desktop
    +size(calc(100% - #{$margin} * 2))
    +position(fixed, $margin)

.border
  background-color: rgba(white, .3)
  display: none
  position: relative
  width: $border-width
  +tablet
    display: block

  &:before,
  &:after
    +size($border-width, $frame-width)
    background-color: white
    content: ''
  &:after
    transform: rotate(90deg)
  &__left
    +position(absolute, $padding, null, $padding, $padding)
    &:before
      +position(absolute, 0, null, null, 0)
    &:after
      +position(absolute, calc(-#{$frame-width} / 2), null, null, calc(#{$frame-width} / 2))
  &__right
    +position(absolute, $padding, $padding, $padding, null)
    &:before
      +position(absolute, null, 0, 0, null)
    &:after
      +position(absolute, null, calc(#{$frame-width} / 2), calc(-#{$frame-width} / 2), null)
</style>
