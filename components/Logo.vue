<template>
  <button
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center"
    @click="$router.push('/')"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
    <img :src="img()" alt="" v-if="isSticky || isOpen">
    <img :src="imgDark()" alt="" v-else>
    <p :class="(isSticky || isOpen) ? 'text-gray-800' : 'text-white'" class="font-thin pl-2">{{ title }}</p>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    logo: String,
    logoDark: String,
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    img() {
      return require(`~/${this.logo}`)
    },
    imgDark() {
      if (this.logoDark) {
        return require(`~/${this.logoDark}`)
      } else {
        return require(`~/${this.logo}`)
      }
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = (this.isSticky || this.isOpen) ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    }
  }
}
</script>
