<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from "@vue/runtime-core";

import {
  ClockIcon,
  CubeTransparentIcon,
  LightningBoltIcon,
  LockClosedIcon,
  ScaleIcon,
  SparklesIcon,
} from '@heroicons/vue/outline'

const actions = [
  {
    title: 'Staking',
    href: 'https://earn.brewlabs.info/pools',
    icon: ClockIcon,
    description: 'Stake your Brewlabs tokens for rewards, compound and collect trading reflections along the way.',
  },
  {
    title: 'Reflections',
    icon: CubeTransparentIcon,
    description: 'Hold and benefit from BUSD rewards daily, hold more Brewlabs to increase your rewards.',
  },
  {
    title: 'Farming',
    href: 'https://earn.brewlabs.info/farms',
    icon: LockClosedIcon,
    description: 'Yield farm with Brewlabs in multiple cross-chain pools. Take advantage of our multi-chain Zapper tool to find your ideal farming contract',
  },
  {
    title: 'Utility Revenue Earning',
    icon: SparklesIcon,
    description: 'Find value in daily buy backs from the Brewlabs treasury contract, distributing profits to holders from fees generated across the protocol.',
  },
  {
    title: 'NFT Staking',
    icon: LightningBoltIcon,
    description: 'Stake various NFTs from Brewlabs and partnered projects to earn passive income.',
  },
  {
    title: 'Bond Market',
    icon: ScaleIcon,
    description: 'Upcoming Brewlabs "bond token" decentralised exchange, pools and opportunities. A powerful, new and innovative concept arriving for Brewlabs holders.',
  },
];

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div
    id="earn"
    class="pb-32 bg-gradient-to-b from-gray-100 to-gray-300"
  >
    <div
      class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      <h1
        class="text-4xl font-extrabold tracking-tight text-dark md:text-5xl lg:text-6xl"
      >Earn</h1>
      <p
        class="mt-6 max-w-3xl text-xl text-gray-500"
      >Hold Brewlabs and earn passive income through a number of channels within the Brewlabs ecosystem.</p>
    </div>
    <section
      class="relative max-w-7xl xl:mx-auto mx-6 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
    >
      <div
        v-for="(action, actionIdx) in actions"
        :key="action.title"
        data-aos="fade-up"
        data-aos-delay="150"
        :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-dark p-6']"
      >
        <div class="flex items-baseline">
          <span class="bg-brand rounded-lg inline-flex p-3">
            <component
              :is="action.icon"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </span>
          <h3
            class="ml-3 text-xl text-gray-50 font-medium"
          >
            <a v-if="action.href" :href="action.href">{{ action.title }}</a>
            <span v-else>{{ action.title }}</span>
          </h3>
        </div>
        <div class="mt-8">
          <p
            class="mt-2 text-md text-gray-300"
          >{{ action.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
