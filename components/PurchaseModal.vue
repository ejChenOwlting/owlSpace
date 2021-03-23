<template>
  <Modal class="flex items-center justify-center">
    <section v-if="mode === 'purchase'" class="cart-section section">
      <Cross class="btn-close" @click.native="closeHandler" />
      <div class="cart-section__head mb-16">
        <div class="flex items-center">
          <img width="60" :src="require('~/assets/img/icon-hostel.png')" alt="icon-title">
          <span class="cart-section__head-title text-xl font-bold">{{steps[currentStep].title}}</span>
        </div>
        <small class="cart-section__head-step font-bold">{{currentStep + 1}}/4</small>
      </div>
      <ul class="cart-section__option-list">
        <li class="cart-section__option flex items-center"
          v-for="(option, index) in steps[currentStep].options"
          :key="`step_${currentStep}_${index}`"
          @click="nextStep"
        >
          <div class="cart-section__option-image-container">
            <img class="cart-section__option-image" :src="require('~/assets/img/fake.png')" alt="product">
          </div>
          <div class="cart-section__option-desc font-bold">{{option}}</div>
        </li>
      </ul>

      <div class="cart-section__step-list flex justify-between items-center font-bold">
        <template v-for="(step, index) in steps">
          <div class="cart-section__step"
            :key="step.title"
            :class="{'is-active': currentStep >= index}"
          >
            <div class="step-title">
              <span class="cart-section__step-dot"></span>
              <small class="cart-section__step-title">{{step.title}}</small>
            </div>
          </div>
          <span v-if="index !== steps.length - 1"
            class="step-line"
            :key="`${step.title}_line`"
            :class="{'is-active': currentStep > index}"
          />
        </template>
      </div>
    </section>

    <section v-else-if="mode === 'done'" class="surprise-section section text-center">
      <Cross class="btn-close" @click.native="closeHandler" />
      <img class="surprise-section__img mb-24" width="350" :src="require('~/assets/img/message-img.png')" alt="surprise">
      <h2 class="surprise-section__title text-xl mb-16">愚人節快樂！</h2>
      <p class="surprise-section__desc text-sm mb-24">不過沒關係，我們還有比這些更瘋狂更酷的商品等你一起打開世界的門，體驗意想不到的可能！</p>
      <Btn text="前往" :wFull="false" />
    </section>

    <section v-else class="loading-section section flex items-center justify-between">
      <div class="text-sm font-bold">載入中...</div>
      <img class="loading-section__img" width="50" :src="require('~/assets/img/loading/injection.gif')" alt="loading">
    </section>
  </Modal>
</template>

<script>
export default {
  name: 'purchase-modal',
  data() {
    return {
      mode: 'purchase', // purchase, loading, done
      currentStep: 0,
      steps: [
        { title: '選擇住宿', options: ['太空電梯豪華雙床房含浴缸', '月球基地豪華露營體驗 Unicamping 四人房一泊三食'] },
        { title: '選擇體驗', options: ['小行星帶體驗宇宙の衝擊震撼５日', '捕捉太陽黑子親子體驗單程票（保證會抓到一顆）'] },
        { title: '選擇伴手禮', options: ['宇宙小灰人醃大腸 10斤裝', '火星蟑螂特有種幼體（3月齡以下）10隻裝含運'] },
        { title: '個人資料' }
      ]
    }
  },
  methods: {
    closeHandler() {
      this.$emit('close')
    },
    nextStep() {
      if (this.currentStep < 2) this.currentStep++
      else {
        this.mode = 'loading'
        setTimeout(() => {
          this.mode = 'done'
        }, 1500)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.section
  background: black
  max-width: 500px
  padding: 2.5rem 1.5rem
  position: relative

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

.cart-section
  &__head
    position: relative
  &__head-title
    transform: translateX(-30px)
  &__head-step
    +position(absolute, 0, 0, 0, null)
    line-height: 60px
  
  &__option
    background-color: rgba(0, 42, 90, .8)
    border: 1px solid $color-blue
    color: $color-blue
    cursor: pointer
    padding: .5rem
    transition: background-color .1s
    +hover
      background-color: rgba(69, 100, 136, .9)
      color: white
    &:not(:last-child)
      margin-bottom: 1.5rem
  &__option-image-container
    +size(115px, calc(100% + 20px))
    min-width: 115px
  &__option-image
    +size(100%)
    object-fit: cover
  &__option-desc
    padding: 0 1.5rem
  &__option-list
    margin-bottom: 80px

  &__step.is-active
    .cart-section__step-dot
      background-color: white
      box-shadow: 0px 0px 12px 2px #00D1FF
      &:before
        +size(100%)
        +position(absolute, 0)
        border-radius: 50%
        content: ''
        box-shadow: 0px 0px 10px 2px #00D1FF
    .cart-section__step-title
      color: white
  &__step-list
    padding: 0 1.5rem 2rem
  &__step-dot
    +size(16px)
    background-color: $color-grey
    border-radius: 50%
    display: block
  &__step-title
    +position(absolute, 20px, null, null, 50%)
    color: $color-grey-light
    transform: translateX(-50%)
    white-space: nowrap
  .step-title
    text-align: center
    position: relative
  .step-line
    +size(calc(100% / 3), 2px)
    background-color: $color-grey
    &.is-active
      background-color: white

.surprise-section
  +tablet
    min-width: 510px
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

.loading-section
  min-width: 256px
  padding: .5rem 1.5rem
  &__img
    transform: rotate(-90deg)
</style>
