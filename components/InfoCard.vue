<template>
  <div class="info-card">
    <div class="info-card__image-container mb-16">
      <img class="info-card__image" :src="require(`~/assets/img/${img}`)" alt="product">
    </div>
    <h5 class="info-card__title text-blue text-lg">{{title}}</h5>
    <div class="text-sm" v-html="content" />
  </div>
</template>

<script>
export default {
  name: 'info-card',
  props: {
    title: String,
    content: String,
    img: {
      type: String,
      default: 'fake.png'
    }
  }
}
</script>

<style lang="sass" scoped>
$padding: 1rem
$img-offset-top: 28px
$img-offset-x: 20px

.info-card
  background-color: rgba(0, 42, 90, .8)
  border: 1px solid rgba($color-blue, 0.7)
  margin-top: calc(#{$img-offset-top} + 20px)
  padding: 0 $padding $padding
  transition: background-color .1s

  +hover
    background-color: rgba(69, 100, 136, .9)
    .info-card__title
      color: white

  &__image-container
    +size(calc(100% + #{$padding} * 2 + #{$img-offset-x} * 2), 252px)
    transform: translateX(calc(-#{$padding} - #{$img-offset-x}))
    margin-top: -$img-offset-top
    +tablet
      height: 278px

  &__image
    +size(100%)
    object-fit: cover

  &__title
    margin-bottom: .5rem
</style>
