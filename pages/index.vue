<template>
  <div>
    <Cover />
    <Features id="about" />
    <Products id="products" />
    <Partners id="partner" />
    <Community />
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Partners from '@/components/Partners'
import Community from '@/components/Community'

export default {
  name: 'LandingPage',
  components: {
    Cover,
    Features,
    Products,
    Partners,
    Community
  }
}
</script>
