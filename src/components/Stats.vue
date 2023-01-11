<script setup lang="ts">
import { onMounted, inject } from 'vue';
import { computed, } from '@vue/reactivity';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useProjectsQuery } from '../services/projects-query';
import Button from '../utils/Button.vue';

const { isLoading, data } = useProjectsQuery();

const totalJobs = computed(() => data.value?.items.flatMap((item) => item.fields.services).length); 

const totalContracts = computed(() => data.value?.items.filter((item) => 
  item.fields.services.includes('Custom Smart Contract') || 
  item.fields.services.includes('Token Smart Contract') ||
  item.fields.services.includes('Staking Pools') ||
  item.fields.services.includes('Yield Farming'))
  .length);

const totalStakingPools = computed(() => data.value?.items.filter((item) => item.fields.services.includes('Staking Pools')).length);

onMounted(() => {
  AOS.init();
});

const emitter: any = inject("emitter");

const openContactModal = () => {
  emitter.emit('openModal', 'https://7zp5qrgciui.typeform.com/to/fHUMWTUc');
};

</script>

<template>
  <div v-if="!isLoading && data" class="bg-gray-100 pt-12 sm:pt-32">
    <div data-aos="fade-up" data-aos-offset="300" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Trusted by over {{ data.total }} clients</h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">Join a winning list of crypto projects, partnering with the most innovative
developers in this space.</p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-gray-200 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-100" />
        <div data-aos="fade" data-aos-delay="500" class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Jobs completed
                  <Button  @click="openContactModal" class="mx-auto mt-4" variant="dark">Get in touch</Button>
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-dark">
                  {{ totalJobs }}
                </dd>
              </div>
              <div
                class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Smart contracts written
                  <Button  @click="openContactModal" class="mx-auto mt-4" variant="dark">Request engineering</Button>
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-dark">
                  {{ (totalContracts || 33) * 2  }}
                </dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Staking pools
                  <Button @click="openContactModal" class="mx-auto mt-4" variant="dark">Request a Staking pool</Button>
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-dark">
                  {{ (totalStakingPools || 38) * 3 }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
