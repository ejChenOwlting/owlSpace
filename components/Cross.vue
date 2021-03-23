<template>
  <div class="cross"></div>
</template>

<script>
export default {
  name: 'cross'
}
</script>

<style lang="sass" scoped>
.cross
  +size(30px)
  // margin: 0 1rem
  position: relative
  &:before,
  &:after
    +size(1px, 120%)
    +position(absolute, 0, null, null, 15px)
    background-color: white
    content: ''
    transform-origin: 100%
  &:before
    transform: rotate(45deg)
  &:after
    transform: rotate(-45deg)
</style>
