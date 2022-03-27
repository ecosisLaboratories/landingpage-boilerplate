<template>
  <section class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center w-full"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="w-full uppercase tracking-loose w-full">Subtile</p>
        <h1 class="w-full my-4 text-5xl font-bold leading-tight">
          Slogan
        </h1>
        <p class="w-full leading-normal text-2xl mb-8 font-thin">
          Description
        </p>

        <a
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-2 px-8 shadow-lg flex items-center"
          href="#"
          target="_blank"
        >
          <Telegram class="mr-4 text-gray-900"/>
          Contact
        </a>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center flex">
        <img class="w-full justify-center items-center" src="~/assets/imgs/image.png" alt />
      </div>
    </div>
  </section>
</template>

<script>
import Telegram from '~/assets/svgs/telegram.svg'

export default {
  components: {
    Telegram
  }
}
</script>
