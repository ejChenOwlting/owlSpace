<template>
  <SectionLayout
    sectionClass="cart-section"
    height="525px"
    heightMobile="525px"
    @close="closeHandler"
  >
    <div class="cart-section__head mb-16">
      <div class="flex items-center">
        <img width="60" :src="require('~/assets/img/icon-hostel.png')" alt="icon-title">
        <span class="cart-section__head-title text-xl font-bold">{{steps[currentStep].title}}</span>
      </div>
      <small class="cart-section__head-step font-bold">{{currentStep + 1}}&sol;4</small>
    </div>
    <ul class="cart-section__option-list">
      <li class="cart-section__option flex items-center"
        v-for="index in 2"
        :key="`step_${currentStep}_${index}`"
        @click="nextStep"
      >
        <div class="cart-section__option-image-container">
          <img class="cart-section__option-image" :src="require('~/assets/img/fake.png')" alt="product">
        </div>
        <div class="cart-section__option-desc font-bold text-left">{{steps[currentStep].options[index - 1]}}</div>
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
  </SectionLayout>
</template>

<script>
export default {
  name: 'cart-section',
  data() {
    return {
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
    nextStep() {
      if (this.currentStep < 2) this.currentStep++
      else {
        this.$emit('finished')
      }
    },
    closeHandler() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
.cart-section
  height: 0px
  padding: 0
  width: 1px
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
    +size(115px, 82px)
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
    transition: background-color .2s
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
</style>
