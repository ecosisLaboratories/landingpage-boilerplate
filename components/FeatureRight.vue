<template>
  <div class="flex flex-wrap my-16 h-auto justify-center items-center">
    <div class="w-full text-center md:w-1/2 p-6 align-middle">
      <h3 class="text-3xl font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="mb-8">
        {{ content }}
      </p>
    </div>
    <div class="w-full sm:w-1/2 p-6">
      <slot name="svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRight',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>
