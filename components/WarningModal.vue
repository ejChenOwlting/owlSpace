<template>
  <Modal class="warning-modal"
    :isScrollLock="false"
  >
    <div class="warning-modal__content flex flex-col items-center justify-between">
      <div>
        <div class="flex items-center mb-8">
          <img class="warning-icon" width="23" :src="require('~/assets/img/icon-warning.svg')" alt="icon-warning">
          <h2>請注意</h2>
        </div>
        <p class="text-sm">此活動含有相對風險，因此參與需年滿 18 歲，並禁止單人參與 </p>
      </div>
      <div class="warning-btn-container">
        <button class="warning-btn" @click="closeHandler">確定</button>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'warning-modal',
  methods: {
    closeHandler() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
.warning-modal
  &.modal
    +size(calc(100% - 1rem), auto)
    +position(fixed, auto, .5rem, .5rem, .5rem)
    +tablet
      +size(678px, auto)
      +position(fixed, auto, 0, 0, auto)
  &::v-deep
    .border__left
      +position(absolute, .5rem, null, .5rem, .5rem)
      display: block
      +tablet
        +position(absolute, 1rem, null, 1rem, 1rem)
      &:before
        +size(1px, 10px)
      &:after
        +size(1px, 10px)
        top: -5px
        left: 5px
    .border__right
      +position(absolute, .5rem, .5rem, .5rem, null)
      display: block
      +tablet
        +position(absolute, 1rem, 1rem, 1rem, null)
      &:before
        +size(1px, 10px)
      &:after
        +size(1px, 10px)
        bottom: -5px
        right: 5px
  &__content
    padding: .5rem
    +tablet
      flex-direction: row
      padding: 1rem 1.5rem .75rem

.warning-icon
  margin-right: .5rem

.warning-btn-container
  margin-top: 1rem
  width: 100%
  +tablet
    margin-top: 0
    width: auto

.warning-btn
  background-color: rgba(white, .2)
  padding: .5rem 2.5rem
  transition: background-color .1s
  width: 100%
  +tablet
    width: auto
  +hover
    background-color: rgba(white, .3)
</style>
