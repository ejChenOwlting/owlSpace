<template>
  <Modal class="purchase-modal flex items-center justify-center">
    <transition name="fadefast" mode="out-in">
    <CartSection
      v-if="mode === 'cart'"
      key="cart"
      @finished="finishedHandler"
      @close="closeModal"
    />

    <SurpriseSection
      v-else-if="mode === 'done'"
      key="done"
      @close="closeModal"
    />

    <section v-else key="loading" class="loading-section section flex items-center justify-between">
      <div class="text-sm font-bold">載入中...</div>
      <img class="loading-section__img" width="50" :src="require('~/assets/img/loading/injection.gif')" alt="loading">
    </section>
    </transition>
  </Modal>
</template>

<script>
export default {
  name: 'purchase-modal',
  data() {
    return {
      mode: 'cart', // cart, loading, done
    }
  },
  methods: {
    finishedHandler() {
      this.mode = 'loading'
      setTimeout(() => {
        this.mode = 'done'
      }, 1500)
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
.purchase-modal
  user-select: none

.section
  background: black
  max-width: 500px
  padding: 2.5rem 1.5rem
  position: relative

.loading-section
  min-width: 256px
  padding: .5rem 1.5rem
  &__img
    transform: rotate(-90deg)
</style>
