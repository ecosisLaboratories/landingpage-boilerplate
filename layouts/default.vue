<template>
  <div class="leading-normal tracking-normal text-white bg-gray-800">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>


</style>
