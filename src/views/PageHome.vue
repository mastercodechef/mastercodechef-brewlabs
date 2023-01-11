<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Socials from '../utils/Socials.vue';
import Contract from '../utils/Contract.vue'
import Logos from '../components/Logos.vue';
import Services from '../components/Services.vue';
import Tokenomics from '../components/Tokenomics.vue';
import Earn from '../components/Earn.vue';
import Faq from '../components/Faq.vue';
import Friends from '../components/Friends.vue';

</script>

<template>
  <Hero height="100vh" position="bottom" wavesColor="text-gray-200">
    <h1 class="mt-4 sm:mt-5 lg:mt-6">
      <span class="sr-only">BREWLABS</span>
      <img src="../assets/logo-text.svg" alt="Brewlabs logo" class="w-full md:w-1/2" />
    </h1>
    <div class="flex flex-wrap sm:items-center">
      <Socials class="socials mt-6 pb-7 text-dark" />
      <Contract class="contract sm:ml-5" address="0x6aac56305825f712fd44599e59f2ede51d42c3e7" />
    </div>
  </Hero>
  <Services />
  <Logos />
  <Tokenomics />
  <Faq />
  <Friends />
  <Earn />
</template>