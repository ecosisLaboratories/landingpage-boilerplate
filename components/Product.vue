<template>
  <div class="w-full md:flex-1">
    <div class="flex flex-wrap justify-center items-center text-gray-800 text-center">
      <div class="flex justify-center items-center w-full my-8">
        <img class="w-full justify-center items-center" :src="fetchImage()" alt />
      </div>
      <h3 class="w-full text-3xl font-bold leading-none mb-3">{{ title }}</h3>
      <p>{{ desc }}</p>
    </div>
    <div class="w-full flex flex-wrap justify-center items-center">
      <button class="mx-auto lg:mx-0 hover:underline bg-gray-900 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push(page)">
        Learn more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: String,
    title: String,
    desc: String,
    page: String
  },
  methods: {
    fetchImage() {
      return require(`~/${this.logo}`)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
