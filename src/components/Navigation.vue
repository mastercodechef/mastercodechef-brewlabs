<script setup lang="ts">
import { ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import {
  MapIcon,
  PhotographIcon,
  BeakerIcon,
  MenuIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  XIcon,
  ClockIcon,
  PuzzleIcon,
  CashIcon,
  CubeTransparentIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
  SwitchHorizontalIcon,
  PresentationChartBarIcon,
  OfficeBuildingIcon,
  LightningBoltIcon,
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import LogoIcon from "../utils/LogoIcon.vue";
import Price from "../utils/Price.vue";
import Link from "../utils/Link.vue";
import { updatePageMeta } from '../router/index';

const services = [
   {
    name: 'Brewlabs Factory',
    description: 'Step into the Factory to see all the services we offer and active projects.',
    href: '/factory',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Brewlabs Overview',
    description: 'A summary of some of the services we offer.',
    href: '/#services',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Service Journey',
    description: 'Brewlabs can provide you and your team with assistance each step of the way.',
    href: '/factory#journey',
    icon: PuzzleIcon,
  },
]

// Request your own smart contract development from Brewlabs, token, staking & much more

const callsToAction = [
  {
    name: 'Get in touch to talk about your project',
    href: 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc',
    icon: EmojiHappyIcon,
    external: true
  },
]

const about = [
  {
    name: 'Whitepaper',
    description: 'Check out the Brewlabs whitepaper and vision here.',
    href: 'https://brewlabs.gitbook.io/welcome-to-brewlabs/',
    icon: BookOpenIcon,
    external: true
  },
  {
    name: 'Roadmap',
    description: 'Learn more about the Brewlabs milestones here.',
    href: 'https://brewlabs.gitbook.io/welcome-to-brewlabs/about-brewlabs/roadmap',
    icon: MapIcon,
    external: true
  },
  {
    name: 'Media kit',
    description: 'Access the Brewlabs media kit for your website branding.',
    href: '/downloads/Brewlabs-Media-Kit.zip',
    icon: PhotographIcon,
    external: true,
    download: true,
  },
  {
    name: 'Contract',
    description: 'Review the BREWLABS token smart contract details here',
    href: 'https://bscscan.com/token/0x6aac56305825f712fd44599e59f2ede51d42c3e7',
    icon: ShieldCheckIcon,
    external: true
  },
  {
    name: 'Team',
    description: 'Find out more about the Brewlabs team here.',
    href: 'https://brewlabs.gitbook.io/welcome-to-brewlabs/about-brewlabs/team',
    icon: PuzzleIcon,
    external: true
  },
]

const earn = [
  {
    name: 'Staking',
    description: 'Stake your tokens in a range of projects to earn passive income.',
    href: 'https://earn.brewlabs.info/',
    icon: ClockIcon,
    external: true
  },
  {
    name: 'Farms',
    description: 'Liquidity farms with farming rewards and trading reflections.',
    href: 'https://earn.brewlabs.info/farms',
    icon: CashIcon,
    external: true
  },
  {
    name: 'Zapper',
    description: 'Invest in liquidity tokens for passive income by our Brewlabs zapping platform.',
    href: 'https://earn.brewlabs.info/zap',
    icon: LightningBoltIcon,
    external: true
  },
];

const tools = [
  {
    name: 'Airdrop',
    description: 'This Brewlabs airdrop tool will allow you to bulk send tokens in a simple step by step transaction.',
    href: 'https://brewlabs-airdrop.tools/bsc',
    icon: PaperAirplaneIcon,
    external: true
  },
  {
    name: 'Constructor',
    description: 'Make use of the Brewlabs constructor to create tax free liquidity tokens.',
    href: 'https://earn.brewlabs.info/liquidity',
    icon: CubeTransparentIcon,
    external: true
  },
  {
    name: 'Swap',
    description: 'Swap tokens at the best rate on the market.',
    href: 'https://earn.brewlabs.info/swap',
    icon: SwitchHorizontalIcon,
    external: true
  },
  {
    name: 'Freezer',
    description: 'Easily and securely lock your liquidity tokens in our time-lock contracts.',
    href: 'https://freezer.brewlabs.info',
    icon: BeakerIcon,
    external: true
  },
];
;

const stuck = ref(false);
const router = useRouter();
const emitter: any = inject("emitter");

router.beforeEach(() => {
  stuck.value = false;
  handleSticky('unmount');
})

router.afterEach((to, from) => {
  stuck.value = false;
  handleSticky('mount');
  updatePageMeta((to.meta?.title as string) || 'Brewlabs - Cryptocurrency and Services')
});


const handleSticky = (action: 'mount' | 'unmount') => {
  let watchedElement: HTMLElement | null = null;

  const observerCallback = (entries: any) => {
    if (!entries[0].isIntersecting) {
      stuck.value = true;
    } else {
      stuck.value = false;
    }
  };

  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: "-10px 0px 0px 0px",
  });

  if (action === 'mount') {
    setTimeout(() => {
      // Get the element to observe 
      watchedElement = document.getElementById("brand") as HTMLElement;

      if (watchedElement) {
        observer.observe(watchedElement);
      }
    }, 500);
  }

  if (action === 'unmount' && watchedElement !== null) {
    observer.unobserve(watchedElement);
  }
};

</script>

<template>
  <Popover class="navbar font-brand top-0 w-full z-20" :class="{ 'stuck bg-opacity-90 md:bg-gray-900': stuck }">
    <div class="max-w-7xl mx-auto px-4 py-3 sm:px-6">
      <div class="flex justify-between items-center py-2 md:space-x-10">
        <!-- Brand -->
        <div :class="{ 'invisible md:visible': stuck }" class="flex justify-start w-16 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Brewlabs logo</span>
            <LogoIcon :class="[stuck ? 'text-gray-50' : 'text-dark', 'w-12']" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton :class="{ 'bg-white': stuck }"
            class="rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ close }">
            <PopoverButton :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
              class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none">
              <span>Factory</span>
              <ChevronDownIcon :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
                class="ml-2 h-5 w-5 group-hover:text-gray-200'" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-dark px-5 py-6 sm:gap-8 sm:p-8">
                    <router-link 
                      v-for="item in services" 
                      :to="item.href"
                      @click="close"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 text-left"
                    >
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-brand" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-50">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-400">{{ item.description }}</p>
                      </div>
                    </router-link>
                  </div>
                  <div class="px-5 py-5 bg-gray-800 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div v-for="item in callsToAction" :key="item.name">
                      <a :href="item.href" :target="item.external ? '_blank' : '_self'"
                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-50 hover:bg-brand hover:text-dark group">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-50 group-hover:text-dark" aria-hidden="true" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ close }">
            <PopoverButton :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
              class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none">
              <span>Earn</span>
              <ChevronDownIcon :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
                class="ml-2 h-5 w-5 group-hover:text-gray-200'" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-dark px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in earn" :key="item.name" :href="item.href"
                      :target="item.external ? '_blank' : '_self'" @click="close"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-brand" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-50">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-400">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ close }">
            <PopoverButton :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
              class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none">
              <span>Tools</span>
              <ChevronDownIcon :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
                class="ml-2 h-5 w-5 group-hover:text-gray-200'" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-dark px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in tools" :key="item.name" :href="item.href"
                      :target="item.external ? '_blank' : '_self'" @click="close"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-brand" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-50">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-400">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ close }">
            <PopoverButton :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']"
              class="group rounded-md inline-flex items-center text-base font-medium focus:outline-none">
              <span>About</span>
              <ChevronDownIcon :class="[stuck ? 'text-gray-50 hover:text-white' : 'text-dark']" class="ml-2 h-5 w-5"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-dark px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in about" :key="item.name" :href="item.href" @click="close"
                      :download="item.download ? 'Brewlabs Media Kit' : false"
                      :target="item.external ? '_blank' : '_self'"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-brand" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-50">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-400">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end">
          <Link href="https://earn.brewlabs.info/swap" :variant="stuck ? 'brand' : 'dark'">
          Buy
          <Price />
          </Link>
        </div>
      </div>
    </div>
    <!-- mobile nav -->
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-dark divide-y-2 divide-gray-800">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <LogoIcon class="w-12 text-brand" />

              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-6">
                <a v-for="item in services" :key="item.name" :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-800">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-brand" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-50">{{ item.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a v-for="item in tools" :href="item.href" target="_blank" rel="noopener noreferrer"
                class="text-base font-medium text-gray-50 hover:text-gray-300">{{item.name}}</a>

              <a v-for="item in earn" :key="item.name" :href="item.href"
                class="text-base font-medium text-gray-50 hover:text-gray-300">{{ item.name }}</a>

              <a v-for="item in about" :key="item.name" :href="item.href"
                class="text-base font-medium text-gray-50 hover:text-gray-300">{{ item.name }}</a>
            </div>
            <div>
              <Link href="https://earn.brewlabs.info/swap" variant="brand" class="w-full">
              BUY BREWLABS
              <Price />
              </Link>

              <p class="mt-6 text-center text-base font-medium text-gray-400">
                Got a question?
                {{ ' ' }}
                <a href=" https://t.me/brewlabs" target="_blank" rel="noopener noreferrer" class="text-brand">Ask us</a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<style lang="scss" scoped>
.navbar {
  animation-delay: 1s;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: backwards;
}

.navbar {
  color: black;

  position: absolute;

  &.stuck {
    color: white;

    z-index: 30;
    position: fixed;
  }
}
</style>