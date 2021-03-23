<template>
  <div class="njx flex items-center">
    <div>
      <div class="font-bold">奧丁丁集團</div>
      <small>人因科學部門</small>
    </div>
    <div class="cross"></div>
    <div>
      <div class="font-bold">日本第一航太重工NJX</div>
      <small>未來科技研發</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'njx'
}
</script>

<style lang="sass" scoped>
.cross
  +size(30px)
  margin: 0 1rem
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
