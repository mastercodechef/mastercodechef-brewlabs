<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from "@vue/runtime-core";
import { ClockIcon, CogIcon, CubeTransparentIcon, DatabaseIcon, LightBulbIcon, TrendingUpIcon } from '@heroicons/vue/outline'

const tokenomics = [
  {
    name: '4% BUSD Reflections',
    description: 'Earn passive income in BUSD around the clock as a result of BREWLABS trading volume.',
    icon: CubeTransparentIcon,
  },
  {
    name: '1% Liquidity Pool',
    description: 'Ongoing liquidity pool contribution to build a robust foundation for the Brewlabs trading market.',
    icon: DatabaseIcon,
  },
  {
    name: '8% Buy back',
    description: 'Buy back mechanism to help improve price action when required.',
    icon: TrendingUpIcon,
  },
  {
    name: '1% Development',
    description: 'Contributions to continue to fund the development of the Brewlabs ecosystem.',
    icon: CogIcon,
  },
];

onMounted(() => {
  AOS.init();
});

</script>
<template>
  <div class="bg-dark">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <h2
          class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
        >Tokenomics</h2>
        <p
          class="mt-6 max-w-3xl text-xl text-gray-300"
        >Brewlabs tokenomics ensure holders are rewarded and the future of the project is funded.</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section
      class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div
        class="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8"
      >
        <div
          v-for="link in tokenomics"
          :key="link.name"
          class="flex flex-col bg-gray-900 bg-opacity-90 rounded-2xl shadow-xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div
            class="flex-1 relative pt-16 px-6 pb-8 md:px-8"
          >
            <div
              class="absolute top-0 p-5 inline-block border-2 border-brand rounded-xl shadow-lg transform -translate-y-1/2 overflow-hidden"
            >
              <div
                class="w-full h-full absolute inset-0"
                data-aos="liquid-fill"
              />
              <component
                :is="link.icon"
                class="h-6 w-6 text-dark relative"
                aria-hidden="true"
              />
            </div>
            <h3
              class="text-xl font-medium text-gray-100"
            >{{ link.name }}</h3>
            <p
              class="mt-4 text-base text-gray-300"
            >{{ link.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spinning {
  0% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(500deg);
  }
}

@keyframes spinning2 {
  0% {
    transform: translate(-50%, 50px);
  }
  100% {
    transform: translate(-50%, -50%) rotate(720deg);
  }
}

@keyframes lightenText {
  0% {
    color: white;
  }
  100% {
    color: black;
  }
}

[data-aos="liquid-fill"] {
  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    background: #ffde0d;
  }

  &::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    top: 70%;
    left: 60%;
    transform: translate(-50%, -50%);
    border-radius: 80px;
    background: #ffde0d;
    animation: spinning 10s ease-in-out;
  }

  &.aos-animate {
    &::after,
    &::before {
      animation: spinning2 10s ease-in-out;
    }

    + svg {
      animation: lightenText 10s ease;
    }
  }
}
</style>