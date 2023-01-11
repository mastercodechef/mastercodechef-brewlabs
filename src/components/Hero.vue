<script setup lang="ts">
import { ref } from 'vue';
import Fizz from '../utils/Fizz.vue';

const props = withDefaults(defineProps<{
  height: string;
  wavesColor?: string;
  position: 'bottom' | 'top';
}>(), {
  wavesColor: 'text-white',
})

const heroHeight = ref(props.height);

</script>

<template>
  <div id="hero" :class="[position === 'bottom' && 'md:justify-end', position === 'top' && 'md:justify-start']"
    class="flex flex-col justify-center pt-20 bg-gradient-to-bl from-brand to-yellow-500 h-screen pb-8 lg:overflow-hidden relative">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-8 text-left font-brand">
      <div id="brand" class="relative py-24 z-10">
        <slot></slot>
      </div>
    </div>
    <Fizz />
    <div class="waves shadow-md" :class="wavesColor">
      <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>

        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9" fill="currentColor" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
#hero {
  height: calc(v-bind(heroHeight) + 4rem);
}

#brand>h1 {
  animation-delay: 1s;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: backwards;
}

#brand .socials {
  animation-delay: 2s;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: backwards;
}

#brand .contract {
  animation-delay: 1s;
  animation-name: fadeInUp;
  animation-duration: 2s;
  animation-fill-mode: backwards;
}

.hero-waves {
  width: 100%;
  height: 2rem;

  position: absolute;
  bottom: 0;
}

.wave3 use {
  animation: move-forever3 5s ease-in-out infinite;
  animation-delay: -2s;
}

@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}
</style>