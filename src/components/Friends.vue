<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import Button from '../utils/Button.vue';
import FriendsWalletnow from './FriendsWalletnow.vue';
import FriendsVulkania from './FriendsVulkania.vue';
import FriendsRiseup from './FriendsRiseup.vue';

const currentSlide = ref(0);

onMounted(() => {
  AOS.init();
});

const slides = [
  {
    id: 0,
    name: 'walletNow',
    url: 'https://walletnow.net/?from=brewlabs',
    component: FriendsWalletnow,
  },
  {
    id: 1,
    name: 'Vulkania',
    url: 'https://website.vulkania.io/?from-brewlabs',
    component: FriendsVulkania,
  },
  {
    id: 2,
    name: 'RiseUp',
    url: 'https://riseupofficial.finance/?from-brewlabs',
    component: FriendsRiseup,
  }
];

// Cycle through the slides
setInterval(() => {
  if (currentSlide.value === (slides.length - 1)) {
    currentSlide.value = 0
  } else {
    currentSlide.value++;
  }
}, 30000);

</script>

<template>
  <div
    id="friends"
    class="relative bg-brand overflow-hidden"
  >
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <component
        v-for="slide in slides"
        :is="slide.component"
        v-show="slide.id === currentSlide"
      />
    </div>
    <nav
      class="w-full max-w-md mx-auto flex justify-center mt-4 mb-8"
    >
      <button
        v-for="item in slides"
        :key="item.id"
        @click="currentSlide = item.id"
        class="w-4 h-4 mx-1.5 rounded-full"
        :class="currentSlide === item.id ? 'bg-gray-200' : 'bg-dark'"
      >
        <span class="sr-only">{{ item.name }}</span>
      </button>
    </nav>
    <div class="progress-bar w-full h-1 bg-dark"></div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  animation: width-grow 30s ease-in-out infinite;
}

@keyframes width-grow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>