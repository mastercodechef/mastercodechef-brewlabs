<script setup lang="ts">
import Socials from '../utils/Socials.vue';
import Badge from '../utils/Badge.vue';

const navigation = {
  services: [
    {
      name: 'Audits',
      href: 'https://github.com/MaverickHP/brewlabs-audits',
      external: true,
      status: '',
    },
    {
      name: 'Engineering',
      href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
      external: true,
      status: '',
    },
    {
      name: 'Token Bridging',
      href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
      external: true,
      status: '',
    },
    {
      name: 'Web builds',
      href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
      external: true,
      status: '',
    },
    {
      name: 'Bots',
      href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
      external: true,
      status: '',
    },
  ],
  tools: [
    {
      name: 'Airdrop Tool',
      href: 'https://brewlabs-airdrop.tools/',
      external: true,
      status: '',
    },
    {
      name: 'Constructor',
      href: 'https://earn.brewlabs.info/liquidity',
      external: true,
      status: '',
    },
    {
      name: 'Swap',
      href: 'https://earn.brewlabs.info/swap',
      external: true,
      status: '',
    },
    {
      name: 'Freezer',
      href: 'https://freezer.brewlabs.info',
      external: false,
      status: '',
    },
  ],
  earn: [
    {
      name: 'Staking',
      href: 'https://earn.brewlabs.info/pools',
      external: true,
      status: '',
    },
    {
      name: 'Farms',
      href: 'https://earn.brewlabs.info/farms',
      external: true,
      status: '',
    },
    {
      name: 'Zapper',
      href: 'https://earn.brewlabs.info/zap',
      external: false,
      status: '',
    },
  ],
  about: [
    {
      name: 'Whitepaper',
      href: 'https://brewlabs.gitbook.io/welcome-to-brewlabs/',
      external: true,
      status: '',
    },
    {
      name: 'Roadmap',
      href: 'https://brewlabs.gitbook.io/welcome-to-brewlabs/about-brewlabs/roadmap',
      external: true,
      status: '',
    },
    {
      name: 'Media kit',
      href: '/downloads/Brewlabs-Media-Kit.zip',
      external: true,
      status: '',
    },
    {
      name: 'Team',
      href: 'https://brewlabs.gitbook.io/welcome-to-brewlabs/about-brewlabs/team',
      external: true,
      status: '',
    },
  ],
}

</script>

<template>
  <div class="relative">
    <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(17,24,39, .1)" />
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(17,24,39, .2)" />
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#0F2131" />
      </g>
    </svg>
    <footer class="bg-dark" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <a href="https://brewlabs.info/" target="_self" rel="noopener noreferrer">
              <img class="h-auto pr-16" src="../assets/logo-full-inline.svg" alt="Brewlabs" />
            </a>

            <p class="text-gray-500 text-base">Brewlabs is a Binance Smart Chain utility project responsible for a
              number of community tools and platforms within the cryptocurrency space.</p>

            <Socials class="mt-4 pb-7 text-gray-400" />
          </div>
          <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.services" :key="item.name" class="flex items-center">
                    <a :href="item.href" :target="item.external ? '_blank' : '_self'" rel="noopener noreferrer"
                      class="text-base text-gray-500 hover:text-gray-50">{{ item.name }}</a>
                    <Badge v-if="item.status === 'soon'" class="ml-2 bg-opacity-40">Soon</Badge>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.about" :key="item.name">
                    <a :href="item.href" :target="item.external ? '_blank' : '_self'" rel="noopener noreferrer"
                      class="text-base text-gray-500 hover:text-gray-50">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Tools</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.tools" :key="item.name" class="flex items-center">
                    <a :href="item.href" :target="item.external ? '_blank' : '_self'" rel="noopener noreferrer"
                      class="text-base text-gray-500 hover:text-gray-50">{{ item.name }}</a>
                    <Badge v-if="item.status === 'soon'" class="ml-2 bg-opacity-40">Soon</Badge>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Earn</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in navigation.earn" :key="item.name" class="flex items-center">
                    <p v-if="item.status === 'soon'" class="text-base text-gray-500">{{ item.name }}</p>
                    <a v-else :href="item.href" :target="item.external ? '_blank' : '_self'" rel="noopener noreferrer"
                      class="text-base text-gray-500 hover:text-gray-50">{{ item.name }}</a>
                    <Badge v-if="item.status === 'soon'" class="ml-2 bg-opacity-40">Soon</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-700 pt-8">
          <p class="text-base text-gray-400 xl:text-center">&copy; 2022 Brewlabs, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.hero-waves {
  width: 100%;
  height: 3rem;

  position: absolute;
  top: -3rem;
}

.wave1 use {
  animation: move-forever1 20s linear infinite;
  animation-delay: -2s;
}

.wave2 use {
  animation: move-forever2 16s linear infinite;
  animation-delay: -2s;
}

.wave3 use {
  animation: move-forever3 12s linear infinite;
  animation-delay: -2s;
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
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