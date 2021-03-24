<template>
  <section class="section text-center" :class="sectionClass">
    <transition name="fadefast">
    <div v-show="isShowContent">
      <Cross class="btn-close" @click.native="closeHandler" />
      <slot />
    </div>
    </transition>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { mapGetters } from 'vuex'

export default {
  name: 'section-layout',
  props: {
    sectionClass: String,
    height: String,
    heightMobile: String,
  },
  data() {
    return {
      isShowContent: false,
      tl: null,
      tl2: null
    }
  },
  mounted() {
    const popupHeight = this.isMobile ? this.heightMobile : this.height
    this.tl = gsap.timeline()
    this.$nextTick(() => {
      this.tl.to(`.${this.sectionClass}`, {
        height: popupHeight,
        duration: .5,
        ease: 'Power4.easeInOut'
      })
      this.tl.to(`.${this.sectionClass}`, {
        width: '100%',
        padding: '2.5rem 1.5rem',
        duration: this.isMobile ? .35 : .5,
        ease: 'Power4.easeIn',
        onComplete: () => {
          this.isShowContent = true
        }
      })
    })
  },
  beforeDestroy() {
    this.tl.kill()
    if (this.tl2) this.tl2.kill()
  },
  methods: {
    closeHandler() {
      this.tl2 = gsap.timeline()

      this.isShowContent = false
      this.tl2.delay(.25)
      this.tl2.to(`.${this.sectionClass}`, {
        width: '1px',
        padding: '0px',
        duration: this.isMobile ? .4 : .6
      })
      this.tl2.to(`.${this.sectionClass}`, {
        height: '0px',
        duration: .5,
        ease: 'Power2.easeIn',
        onComplete: () => {
          this.$emit('close')
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'app/isMobile'
    })
  }
}
</script>

<style lang="sass" scoped>
.btn-close
  +size(14px)
  +position(absolute, .8em, 1em, null, null)
  cursor: pointer
  &:before,
  &:after
    left: 7px
    width: 2px
  &:after
    top: -1px
</style>
