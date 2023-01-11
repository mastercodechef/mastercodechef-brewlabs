<script setup lang="ts">
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DynamicHeroIcon from '../utils/DynamicHeroIcon.vue';
import { useServiceBlocksQuery } from '../services/serviceBlocks-query';

const { isLoading, isError, data } = useServiceBlocksQuery();

onMounted(() => {
  AOS.init();
})

</script>

<template>
  <div id="journey" class="bg-gradient-to-t from-slate-700 to-dark">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white tracking-tight">Ready to start your journey?</h2>
      <p class="mt-4 max-w-3xl text-lg text-indigo-200">
        No matter your experience in the space, Brewlabs can provide you and your team with assistance each step of the way.
      </p>
      <div
        v-if="data && !isError && !isLoading"
        class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        <div v-for="(block, index) in data.items" :key="block.fields.title" data-aos="fade" :data-aos-delay="100 * index">
          <div>
            <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <DynamicHeroIcon :name="block.fields.icon" :outline="true" />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">{{ block.fields.title }}</h3>
            <p class="mt-2 text-base text-indigo-200">
              {{ block.fields.content }}
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>