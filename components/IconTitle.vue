<template>
  <div class="icon-title flex items-center">
    <img :src="img" :alt="title">
    <div class="icon-title__text-group">
      <img width="128" :src="require('~/assets/img/owlspace.svg')" alt="owlspace">
      <h4 class="font-bold">
        <span class="icon-title__title">{{title}}</span> <small>\ {{subtitle}}</small>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icon-title',
  props: {
    img: String,
    title: String,
    subtitle: String
  }
}
</script>

<style lang="sass" scoped>
.icon-title
  &__text-group
    transform: translate(-20px, 6px)

  &__title
    font-size: 24px
</style>
