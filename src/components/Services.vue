<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from "@vue/runtime-core";
import OpenIframeModal from '../utils/OpenIframeModal.vue';
import { KeyIcon, VariableIcon, TerminalIcon, LinkIcon, CodeIcon, ChatAlt2Icon } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Auditing',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    description: 'Brewlabs offers extensive smart contract auditing for upcoming and existing smart contracts.',
    icon: VariableIcon,
  },
  {
    name: 'Engineering',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    description:
      'Our contract engineers are leaders in code, development, deployment and excel in an assortment of smart contract logic requirements.',
    icon: TerminalIcon,
  },
  {
    name: 'Token Bridging',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    description: 'Brewlabs can offer communities new or established with a means to take their token currency cross chain.',
    icon: KeyIcon,
  },
  {
    name: 'dAPP Development',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    description: 'Brewlabs offers development services for clients looking for new and existing dAPP concepts.',
    icon: CodeIcon,
  },
  {
    name: 'Blockchain Services',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    description: 'Brewlabs are blockchain specialists delivering a number of blockchain development services to our clients.',
    icon: LinkIcon,
  },
  {
    name: 'Consulting',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    description: 'Brewlabs offers consulting to guide you through your journey. From conception to launch and beyond.',
    icon: ChatAlt2Icon,
  },
];

onMounted(() => { AOS.init() });
</script>

<template>
  <div
    id="services"
    class="bg-gradient-to-b from-gray-200 to-gray-50 relative"
  >
    <div
      class="relative max-w-7xl mx-auto py-16 px-4 sm:py-32 sm:px-6 lg:px-8"
    >
      <h2
        class="text-4xl font-extrabold tracking-tight text-dark md:text-5xl lg:text-6xl"
      >Services</h2>
      <p class="mt-6 max-w-3xl text-xl text-gray-500">
        Brewlabs Factory offers individuals the opportunity to bring
        their cryptocurrency ideas to life through smart contract
        engineering, auditing, development and launch.
      </p>
    </div>

    <section
      class="max-w-7xl mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="services-heading"
    >
      <h2 class="sr-only" id="services-heading">Services</h2>
      <div
        class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-8"
      >
        <div
          v-for="link in supportLinks"
          :key="link.name"
          class="flex flex-col bg-dark rounded-2xl shadow-xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div
            class="flex-1 relative pt-16 px-6 pb-8 md:px-8"
          >
            <div
              class="absolute top-0 p-5 inline-block bg-brand rounded-xl shadow-lg transform -translate-y-1/2"
            >
              <component
                :is="link.icon"
                class="h-6 w-6 text-dark"
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
          <div
            class="p-6 bg-gray-900 bg-opacity-90 rounded-bl-2xl rounded-br-2xl md:px-8"
          >
            <OpenIframeModal
              :src="link.href"
              class="text-base font-medium text-brand hover:text-gray-50"
            >
              Contact us
              <span aria-hidden="true">&rarr;</span>
            </OpenIframeModal>
          </div>
        </div>
      </div>
    </section>
    <div class="absolute inset-0">
      <div
        class="absolute h-64 left-0 right-0 w-full bottom-0 bg-gradient-to-t from-gray-50 to-transparent"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

