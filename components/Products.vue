<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Products
      </h1>
      <div class="w-full flex flex-wrap justify-center items-center text-gray-800 text-center">

        <Product logo="assets/imgs/image.png" title="Product A" desc="Description A" page="productA"/>

        <Product logo="assets/imgs/image.png" title="Product B" desc="Description B" page="productB"/>

      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
