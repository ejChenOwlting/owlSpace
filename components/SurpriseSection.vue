<template>
  <SectionLayout
    sectionClass="surprise-section"
    height="444px"
    heightMobile="360px"
    @close="closeHandler"
  >
    <img class="surprise-section__img mb-24" width="350" :src="require('~/assets/img/message-img.png')" alt="surprise">
    <h2 class="surprise-section__title text-xl mb-16">愚人節快樂！</h2>
    <p class="surprise-section__desc text-sm mb-24">不過沒關係，我們還有比這些更瘋狂更酷的商品等你一起打開世界的門，體驗意想不到的可能！</p>
    <Btn text="前往" :wFull="false" href="https://www.owlting.com" />
  </SectionLayout>
</template>

<script>
export default {
  name: 'surprise-section',
  methods: {
    closeHandler() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
.surprise-section
  height: 0px
  padding: 0
  width: 1px
  &__img
    margin-top: -25%
    transform: translateX(2%)
    width: 200px
    +tablet
      width: 350px
  &__title
    +tablet
      font-size: 28px
  &__desc
    max-width: 300px
    margin: 0 auto 2rem
</style>
