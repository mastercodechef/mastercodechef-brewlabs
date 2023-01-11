<script setup lang="ts">
import posterImg from '../assets/walletnow-poster.png';
import Video from '../utils/Video.vue';

</script>

<template>
  <section
    class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32"
  >
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
      >
        <h2>
          <span
            data-aos="fade-left"
            class="block text-sm font-semibold font-brand uppercase tracking-wider text-dark sm:text-base lg:text-sm xl:text-base"
          >WalletNow</span>
          <span
            class="block mt-1 text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
          >
            <span class="block text-dark">Friend of Brewlabs</span>
          </span>
        </h2>
        <p
          data-aos="fade-left"
          class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >WalletNow is an advanced crypto portfolio monitoring solution that allows Brewlabs holders to monitor their holdings, which includes their historical reflections and staking pool rewards.</p>
        <div
          class="flex items-center flex-wrap mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
        >
          <p
            class="text-sm sm:text-base font-medium text-gray-900"
          >
            <img
              src="../assets/wallet-now.svg"
              alt="WalletNow logo"
              class="w-8 h-8 mr-1 inline-flex"
            />
            Set up
            <a
              href="https://walletnow.net/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
            >WalletNow</a> today
          </p>

          <p
            class="mt-3 text-sm text-gray-700"
          >As always do your own research and make decisions based on what's right for you.</p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <Video
          src="https://www.youtube.com/embed/UUi9lNeIVUs"
          :poster="posterImg"
        />
      </div>
    </div>
  </section>
</template>