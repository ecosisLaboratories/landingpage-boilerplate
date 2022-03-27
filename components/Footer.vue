<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <Logo
            class="w-12 h-12 text-gray-800" 
            logo="assets/logos/logo_dark.png"
            title="Title"
            :isSticky="true"/>
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Partner</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Partner A</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Partner B</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Partner C</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Products</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <button
                href="#products"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                @click="$router.push('#')"
                >Product A</button
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <button
                href="#products"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                @click="$router.push('#')"
                >Product B</button
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Linkedin</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Telegram</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Twitter</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Discord</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-center items-center text-gray-600 mb-8">
      <p>Copyright</p>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>
