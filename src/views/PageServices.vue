<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Typewriter from 'typewriter-effect/dist/core';
import Hero from '../components/Hero.vue';
import Stats from '../components/Stats.vue';
import ProjectsTable from '../components/ProjectsTable.vue';
import ServicesJourney from '../components/ServicesJourney.vue';
import OpenIframeModal from "../utils/OpenIframeModal.vue";
import FeaturedProject from '../components/FeaturedProject.vue';

const typewriterElement = ref<HTMLElement | null>(null);

onMounted(() => {

  const typewriter = new Typewriter(typewriterElement.value, {
    loop: true,
    delay: 75,
  })

  typewriter
    .pauseFor(500)
    .typeString('We can help with ')
    .pauseFor(500)

    .typeString('<strong>Audits</strong>')
    .pauseFor(1500)
    .deleteChars(6)

    .typeString('<strong>Smart Contracts</strong>')
    .pauseFor(1500)
    .deleteChars(15)

    .typeString('<strong>Consulting</strong>')
    .pauseFor(1500)
    .deleteChars(10)

    .typeString('<strong>Project launches</strong>')
    .pauseFor(1500)
    .deleteChars(16)

    .typeString('<strong>Staking Pools</strong>')
    .pauseFor(1500)
    .deleteChars(13)
    
    .typeString('<strong>Yield Farming</strong>')
    .pauseFor(1500)
    .start();
});
</script>

<template>
  <Hero height="80vh" position="top" waves-color="text-gray-100">
    <header class="text-dark">
      <h5 class="font-brand text-2xl">Welcome to the BREWLABS</h5>
      <h1 class="text-7xl font-brand uppercase">
        Factory
      </h1>
    </header>

    <div class="mt-4 ml-2">
      <h2 ref="typewriterElement" class="text-base text-dark sm:text-xl lg:text-lg xl:text-xl"></h2>

      <div class="mt-4 max-w-lg grid sm:grid-cols-2 gap-3">
        <OpenIframeModal src="https://7zp5qrgciui.typeform.com/to/fHUMWTUc" variant="outline">
          I need an audit
        </OpenIframeModal>
        <OpenIframeModal src="https://7zp5qrgciui.typeform.com/to/fHUMWTUc" variant="dark">
          I need a smart contract
        </OpenIframeModal>
      </div>
    </div>
  </Hero>

  <Stats />
    
  <FeaturedProject />

  <ProjectsTable />

  <ServicesJourney />

</template>

