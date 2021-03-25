<template>
  <div class="loading-modal"
    v-body-scroll-lock="!isAnimationCompleted"
    :class="{'none': isAnimationCompleted}"
  >
    <div class="loading-content container flex flex-col items-center justify-center">
      <img class="loading-owlspace" width="238" :src="require('~/assets/img/loading/loading-title.png')" alt="loading-owlspace">
      <div class="rocket-container flex flex-col items-center justify-end">
        <div class="rocket__scale">
          <div class="counter text-sm font-bold mb-8">{{percentage.val}}%</div>
          <div class="rocket__tube flex">
            <div class="tube">
              <div class="tube__oil"></div>
            </div>
            <img width="24" :src="require('~/assets/img/loading/loading-scale.png')" alt="rocket-scale">
          </div>
        </div>
      </div>

      <div class="rocket__group">
        <img width="220" :src="require('~/assets/img/loading/loading-rocket.png')" alt="rocket">
        <img class="rocket__group__fire" width="60" :src="require('~/assets/img/loading/injection.gif')" alt="rocket-fire">
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'loading-modal',
  data() {
    return {
      tl: null,
      isAnimationCompleted: false,
      percentage: { val: 10 }
    }
  },
  mounted() {
    this.tl = gsap.timeline()

    this.$nextTick(() => {
      this.tl.delay(1)
      this.tl.to(this.percentage, {
        duration: 2.5,
        val: 100,
        modifiers: {
          val: value => Math.round(value)
        }
      })
      this.tl.to('.tube__oil', {
        duration: 2.5,
        height: '100%'
      }, '<')
      this.tl.to('.rocket__group', {
        top: '-300px',
        duration: 2,
        ease: 'power4.in'
      }, '-=1')
      this.tl.to('.loading-modal', {
        opacity: 0,
        duration: .5,
        onComplete: this.animationCompletedHandler
      })
      this.tl.play()
    })
  },
  methods: {
    animationCompletedHandler() {
      this.isAnimationCompleted = true
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
.loading-modal
  +position(fixed, 0)
  background-color: $color-bg
  background-image: url('~/assets/img/loading/loading-bg.jpg')
  background-repeat: no-repeat
  z-index: 100
  &.none
    display: none

.loading-content
  +size(100%)
  position: relative
  &:before,
  &:after
    +size(50%, 100%)
    content: ''
    z-index: -1
  &:before
    +position(absolute, 0, null, 0, 0)
    background: linear-gradient(360deg, rgba($color-blue, .9) 0%, rgba(8, 45, 77, 0) 90%)
    background-blend-mode: screen
  &:after
    +position(absolute, 0, 0, 0, null)
    background: linear-gradient(180deg, rgba($color-red, .9) 0%, rgba($color-purple, .3) 60%, rgba($color-purple, .2) 70%, rgba(121, 19, 250, 0) 90%)

.loading-owlspace
  margin-bottom: 1rem
  max-width: 240px
  width: 80%
  +tablet
    +position(absolute, 20%, null, null, 1rem)
    margin-bottom: 0

.rocket-container
  +size(250px, 400px)
  background-image: url('~/assets/img/loading/loading-rocketbg.png')
  background-repeat: no-repeat
  background-position: bottom center
  padding-bottom: 30px
  position: relative

.rocket__scale
  +position(absolute, null, -1rem, 2rem, null)
.rocket__tube
  padding-right: .1rem
.tube
  +size(6px, 200px)
  background-color: rgba(white, .5)
  border-radius: 6px
  margin-right: .5rem
  position: relative
  &__oil
    +size(6px, 5%)
    +position(absolute, null, 0, 0, 0)
    background-color: white
    border-radius: 6px

.rocket__group
  +position(absolute, calc(50% + 65px), null, null, 50%)
  transform: translate(-50%, -50%)
  z-index: 10
  +tablet
    +position(absolute, 50%, null, null, 50%)
  &__fire
    +position(absolute, null, null, -80px, 50%)
    transform: translateX(-30px)
</style>
