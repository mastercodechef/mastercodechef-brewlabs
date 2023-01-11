<script setup lang="ts">
import Link from '../utils/Link.vue';
import vulkaniaPoster from '../assets/vulkania-poster.jpg?url';

</script>

<template>
  <section class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <h2>
          <span data-aos="fade-left"
            class="block text-sm font-semibold font-brand uppercase tracking-wider text-dark sm:text-base lg:text-sm xl:text-base">Vulkania</span>

          <span class="block mt-1 text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
            <span class="block text-dark">Friend of Brewlabs</span>
          </span>
        </h2>
        <p data-aos="fade-left" class="mt-3 mb-6 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Vulkania allows Brewlabs holders to view a fully functional blockchain dashboard that shows detailed
          information about the Brewlabs project, which includes token metrics, price updates, financial charts, a
          summary of top holders and also links to key project information, such as the whitepaper.</p>

        <Link variant="outline" class="sm:mx-auto lg:mx-0 w-fit"
          href="https://vulkania.io/coins/brewlabs">View the Brewlabs dashboard</Link>

        <div class="flex items-center flex-wrap mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <a href="https://vulkania.io" target="_blank" rel="noopener noreferrer">
            <img src="../assets/vulkania-logo-black.png" alt="Vulkania logo" class="w-32 max-w-full mr-1 inline-flex" />
          </a>

          <span class="text-4xl mx-4">+</span>

          <img src="../assets/logo-full-inline-black.svg" alt="Vulkania logo" class="w-40 max-w-full" />

          <p class="mt-3 text-sm text-gray-700">As always do your own research and make decisions based on what's right
            for you.</p>
        </div>
      </div>
      <div data-aos="fade-left"
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <img :src="vulkaniaPoster" class="w-full max-w-full rounded-lg" />
      </div>
    </div>
  </section>
</template>
    