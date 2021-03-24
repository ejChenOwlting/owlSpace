<template>
  <main class="default-page">     
    <!-- Banner  -->
    <section class="banner-section container flex items-center justify-center">
      <header class="header w-full">
        <div class="container flex items-center justify-between">
          <img :src="require('~/assets/img/logo.svg')" width="140" alt="">
          <Btn text="立即預購" @click.native="openModal" :wFull="false" />
        </div>
      </header>

      <img class="banner-web"
        width="874"
        :src="require('~/assets/img/keyvision-web.png')"
        alt="banner-web" />
      <img class="banner-mobile"
        width="397"
        :src="require('~/assets/img/keyvision-mobile.png')"
        alt="banner-mobile" />

      <div class="banner-scroll">
        <img :src="require('~/assets/img/mouseprompt.gif')" alt="scroll">
      </div>
    </section>

    <!-- Rocket -->
    <section class="rocket-section">
      <div class="rocket-container">
        <div class="rocket-img-container">
          <img class="rocket-img rocket-img__bg"
            width="916"
            :src="require('~/assets/img/rocket-normal.png')"
            alt="rocket-bg">
        </div>
        <div class="rocket-img-container rocket-img-container__xray" :style="`top: ${xrayHeight}`">
          <div class="xray">
            <img class="rocket-img rocket-img__xray"
              width="916"
              :src="require('~/assets/img/rocket-xray.png')"
              alt="rocket-xray">
          </div>
        </div>
        <div ref="rocketContainer" class="rocket-mask"></div>
      </div>

      <div class="njx-container container">
        <div class="njx flex items-center">
          <div>
            <div class="font-bold">奧丁丁集團</div>
            <small>人因科學部門</small>
          </div>
          <Cross />
          <div>
            <div class="font-bold">日本第一航太重工NJX</div>
            <small>未來科技研發</small>
          </div>
        </div>
      </div>
    </section>

    <!-- Package -->
    <section class="package-section container text-center">
      <div class="package-year">
        <h2 class="package-year__year">2027</h2>
        <h3 class="package-year__title">首創太空旅行 未來券</h3>
        <div class="package-year__subtitle">2027年04日01 即將啟航</div>
      </div>

      <div class="product-container flex flex-col items-center justify-between">
        <template v-for="(item, index) in products">
          <div class="product flex flex-col items-center" :key="item.name">
            <img class="product__img mb-16" width="80" :src="require(`~/assets/img/${item.icon}.png`)" :alt="item.name">
            <h3 class="product__name text-xl">{{item.name}}</h3>
            <div class="prodcut__desc text-sm">商品 2 擇 1</div>
          </div>
          <span class="product__operator"
            :class="{'equal': index === products.length - 1}"
            :key="`${item.name}_operator`"
          >
            {{index !== products.length - 1 ? '+' : '='}}
          </span>
        </template>
        <div class="product__total text-left">
          <div class="text-red line-through font-bold">NT$ 600,000</div>
          <h3 class="text-xl mb-16">NT$ 300,000</h3>
          <div class="text-sm mb-8">( 信用卡 36 期 0 利率 )</div>
          <Btn text="立即預購" @click.native="openModal" />
        </div>
      </div>
    </section>

    <!-- Coin -->
    <section class="coin-section">
      <div class="container text-center">
        <h2 class="coin__title">支援虛擬貨幣支付</h2>
        <div class="flex items-center justify-center">
          <img class="coin__img" width="144" :src="require('~/assets/img/logo-bitcoin.png')" alt="bitcoin">
          <img class="coin__img" width="175" :src="require('~/assets/img/logo-dogecoin.png')" alt="dogecoin">
        </div>
      </div>
    </section>

    <!-- Info -->
    <section class="info-section">
      <div class="info-bg info-bg__1" />
      <div class="info-bg info-bg__2" />
      <div class="info-bg info-bg__3" />
      <div class="info-bg info-bg__4" />
      <!-- Info / Hotel -->
      <div class="info__item-group container">
        <div class="info__item">
          <IconTitle
            :img="require('~/assets/img/icon-hostel.png')"
            title="宇宙旅館"
            subtitle="旅館管理部" />
          <InfoCard :title="hotel[0].title" :content="hotel[0].content" />
        </div>
        <div class="info__item">
          <InfoCard class="mb-24" :title="hotel[1].title" :content="hotel[1].content" />
          <Btn text="立即預購" @click.native="openModal" />
        </div>
      </div>

      <!-- Info / Experiences -->
      <div class="info__item-group container reverse">
        <div class="info__item">
          <InfoCard class="mb-24" :title="travel[0].title" :content="travel[0].content" />
          <Btn text="立即預購" @click.native="openModal" />
        </div>
        <div class="info__item">
          <IconTitle
            :img="require('~/assets/img/icon-experience.png')"
            title="宇宙探險"
            subtitle="旅行事業部" />
          <InfoCard :title="travel[1].title" :content="travel[1].content" />
        </div>
      </div>

      <!-- Info / Market -->
      <div class="info__item-group container">
        <div class="info__item">
          <IconTitle
            :img="require('~/assets/img/icon-market.png')"
            title="宇宙市集"
            subtitle="食品販賣部" />
          <InfoCard :title="market[0].title" :content="market[0].content" />
        </div>
        <div class="info__item">
          <InfoCard class="mb-24" :title="market[1].title" :content="market[1].content" />
          <Btn text="立即預購" @click.native="openModal" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer text-sm text-center">©2021 歐簿客科技股份有限公司 版權所有</footer>
    <div class="bg-linear"></div>

    <!-- Modals -->
    <transition-group name="fade">
    <PurchaseModal v-if="isOpenModal" key="purchase" @close="isOpenModal = false" />
    <WarningModal v-if="isOpenWarning" key="warning" @close="isOpenWarning = false" />
    </transition-group>

    <LoadingModal key="loading" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default {
  name: 'home',
  scrollToTop: true,
  mounted() {
    this.$nextTick(() => {
      if (this.isDesktop) {
        this.$refs.rocketContainer.addEventListener('mousemove', this.moveXray)
        ScrollTrigger.create({
          trigger: '.banner-section',
          start: '5px top',
          onEnter: () => {
            gsap.to(window, {
              duration: 1,
              scrollTo: '.rocket-section',
              ease: 'power3.out'
            })
          }
        })

        ScrollTrigger.create({
          trigger: '.banner-section',
          start: 'bottom top',
          onEnterBack: () => {
            gsap.to(window, {
              duration: 1,
              scrollTo: '.banner-section',
              ease: 'power3.out',
            })
          }
        })
      } else {
        this.xrayHeight = '50%'
      }
    })
  },
  beforeDestroy() {
    this.$refs.rocketContainer.removeEventListener('mousemove', this.moveXray)

    const stList = ScrollTrigger.getAll()
    for (const st of stList) {
      st.kill()
    }
  },
  data() {
    return {
      isOpenModal: false,
      isOpenWarning: true,
      xrayHeight: '0px',
      hotel: [
        { title: '太空電梯豪華雙床房含浴缸', content: '如果能仰望太空的蔚藍，也眷戀宇宙的自由，當然也想衷於自己喜愛的後現代風情，這段旅程將會是多麼的美好呢？位於法屬圭亞那上空的太空電梯頂層的雙人房間，讓你擁有這一切的美好' },
        { title: '月球基地豪華露營體驗 Unicamping 四人房一泊三食', content: '帶著家人 走進宇宙<br>只要穿著宇宙服即可輕鬆登上月球，多種親子互動活動讓想要體驗「豪華宇宙體驗Unicamping」的有了新選擇。自然環境才是宇宙豪華露營不可取代之要素，不只靠硬體裝備，而是月球的整體氛圍營造。' }
      ],
      travel: [
        { title: '小行星帶體驗宇宙の衝擊震撼５日', content: '搭上OwlSpace專屬火箭前往位於火星和木星間的太陽系小行星帶，體驗與數十萬顆小行星摩擦的快感>////<' },
        { title: '捕捉太陽黑子親子體驗單程票（保證會抓到一顆）', content: '免費租借裝備捕捉太陽黑子！太陽黑子可用在許多地方，不管是家庭配菜用料、五星飯店主菜佐料都可以。太陽黑子最廣為人知的用法是放在貓砂內，讓喵星人知道誰才是主人' }
      ],
      market: [
        { title: '宇宙小灰人醃大腸 10斤裝', content: '你吃過豬腸、牛肚，但你吃過外星人嗎？全宇宙首批經銀河系食物管理局核定的人道外星人內臟食品首次出現在世人面前！' },
        { title: '火星蟑螂特有種幼體（3月齡以下）10隻裝含運', content: '地球小強的剋星！放一隻火星蟑螂在家裡，保證30年不會見到任何一隻地球蟑螂！但須特別注意的是火星蟑螂繁殖很快，需謹慎使用' }
      ],
      products: [
        { icon: 'icon-hostel', name: '宇宙旅館' },
        { icon: 'icon-experience', name: '太空探險活動' },
        { icon: 'icon-market', name: '特色伴手禮' }
      ]
    }
  },
  methods: {
    moveXray(e) {
      this.xrayHeight = `${e.layerY}px`
    },
    openModal() {
      this.isOpenModal = true
    }
  },
  computed: {
    ...mapGetters({
      isDesktop: 'app/isDesktop'
    })
  }
}
</script>

<style lang="sass" scoped>
.default-page
  background-image: url('~/assets/img/starry-bg.jpg')
  background-position: left -10%
  background-repeat: no-repeat
  position: relative
  overflow: hidden

.footer
  padding: 1.5rem .5rem

.bg-linear
  +size(100%, 774px)
  +position(absolute, null, 0, 0, 0)
  background: linear-gradient(180deg, rgba($color-bg, 0) 0%, $color-blue 100%)
  z-index: -1

// Banner
// -------------------------
.banner-section
  height: 100vh
  position: relative

.header
  +position(absolute, 0, 0, null, 0)
  padding: 1rem 0

.banner-web
  display: none
  transform: translateX(5%)
  +tablet
    display: block

.banner-mobile
  transform: translateX(25px)
  max-width: calc(100% + 50px)
  +tablet
    display: none

.banner-scroll
  +position(absolute, null, 0, 0, 0)
  padding: 3rem 0
  text-align: center

// Rocket
// -------------------------
.rocket-section
  background-image: url('~/assets/img/rocket-bg.png')
  background-repeat: no-repeat
  background-position-x: -200px
  margin: 100px 0 100px
  padding: 200px 0 200px
  position: relative

.rocket-container
  position: relative

.rocket-img-container
  &__xray
    +position(absolute, 0)
    border-top: 1px solid white
    transform: translateY(-7px)
    +tablet
      top: 0
      transform: translateY(-10px)

    &:before
      +size(100%, 67px)
      +position(absolute, -68px, 0, null, 0)
      background: linear-gradient(360deg, rgba($color-blue, 0.38) -7%, rgba($color-blue, 0) 81%)
      content: ''
      z-index: -1

.xray
  +position(absolute, 0)
  overflow: hidden

.rocket-img
  transform: translateX(-16%)
  max-width: 916px
  width: calc(100% - 50px)
  &__xray
    +position(absolute, null, 0, 0, 0)

.rocket-mask
  +position(absolute, 0)

.njx-container
  +position(absolute, null, 0, 100px, 0)
  display: flex
  justify-content: flex-end


// Package
// -------------------------
$year-size: 100px

.package-year
  &__year
    font-size: $year-size
    background: linear-gradient(180deg, $color-pink 6.76%, $color-purple 85.47%)
    height: $year-size
    line-height: $year-size
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  &__title
    font-size: 28px
    transform: translateY(-20px)

.product-container
  background-image: url('~/assets/img/curve-center.png')
  background-repeat: no-repeat
  background-size: contain
  background-position-y: 100%
  padding: 100px 0 140px
  +tablet
    flex-direction: row

.product
  &__img
    display: block
  &__name
    margin-bottom: .25rem
  &__total
    width: 100%
    +tablet
      width: auto
  &__operator
    font-size: 40px
    padding: 2.5rem
    +tablet
      padding: 1rem

    &.equal
      transform: rotate(90deg)
      +tablet
        transform: none

// Coin
// -------------------------
$curve-height: 100px

.coin-section
  margin-bottom: $curve-height
  padding: 100px 0
  position: relative

  &:before,
  &:after
    +size(50%, $curve-height)
    content: ''
    display: none
    background-repeat: no-repeat
    +tablet
      display: block

  &:before
    +position(absolute, null, null, -$curve-height, 0)
    background-image: url('~/assets/img/curve-left.png')
    transform: translateX(-100px)

  &:after
    +position(absolute, null, 0, -$curve-height, null)
    background-image: url('~/assets/img/curve-right.png')
    transform: translateX(200px)

.coin
  &__title
    font-size: 28px
    margin-bottom: 80px

  &__img
    transform: scale(.75)
    +tablet
      margin: 0 40px
      transform: none

// Info
// -------------------------
$gap: 48px
$gredient-pink: linear-gradient(180deg, $color-pink -26.14%, rgba($color-purple, .35) 40%, rgba($color-purple, 0) 82.95%)

.info-section
  padding: 30px 0
  position: relative
  +tablet
    padding: 60px 0

.info
  &__item-group
    display: flex
    flex-direction: column
    +tablet
      flex-direction: row
    &:not(:last-child)
      margin-bottom: 100px
      +tablet
        margin-bottom: 80px
    &.reverse
      flex-direction: column-reverse
      +tablet
        flex-direction: row

  &__item
    +tablet
      width: calc((100% - #{$gap}) / 2)
    &:first-child
      +tablet
        margin-right: $gap

.info-bg
  z-index: -1
  &__1
    +size(50%, 422px)
    +position(absolute, 0, null, null, 0)
    background: $gredient-pink
    min-width: 266px
  &__2
    +size(335px, 500px)
    +position(absolute, 122px, 0, null, null)
    background: linear-gradient(180deg, $color-blue -19.44%, rgba($color-bg, 0) 100%)
    max-width: 50%
    +tablet
      +position(absolute, 180px, null, null, calc((100% - 335px) / 2))
  &__3
    +size(335px, 372px)
    +position(absolute, 1600px, 0, null, null)
    background: $gredient-pink
    max-width: 50%
    +tablet
      top: 700px
</style>
