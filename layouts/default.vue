<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import mediaQuery from '@/mixins/mediaQuery'

export default {
  mixins: [mediaQuery]
}
</script>
