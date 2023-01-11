<script lang="ts" setup>
import VueMarkdown from 'vue-markdown-render';
import Badge from '../utils/Badge.vue';
import Socials from '../utils/Socials.vue';
import { ShieldCheckIcon } from '@heroicons/vue/outline';
import Contract from '../utils/Contract.vue';
import { usePrice } from '../services/price-query';
import { useFeaturedProjectQuery } from '../services/projects-query';

const brewlabsPrice = usePrice();
const { data } = useFeaturedProjectQuery();

</script>

<template>

  <section v-if="data" class="bg-gradient-to-t from-slate-300 to-gray-200 py-16">
    <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-wrap md:flex-nowrap gap-6 w-full">

      <div
        data-aos="fade-up"
        class="relative flex-none w-full h-72 md:w-2/3 bg-gradient-to-t from-amber-400 to-yellow-100 rounded-lg overflow-hidden shadow-xl">

        <div class="absolute w-full h-full bg-gradient-to-tr from-slate-50 sm:via-transparent to-transparent flex flex-row">
          <div class="p-4 grid grid-flow-row h-auto self-end">

            <h2 data-aos="flip-down" data-aos-delay="500" class="font-brand">
              <span
                class="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 underline decoration-4 mb-2 hidden md:block">
                Featured project
              </span>
              <span class="text-2xl md:text-3xl lg:text-4xl text-dark uppercase">
                {{ data.fields.name }}
              </span>
            </h2>

            <h5 data-aos="flip-down" data-aos-delay="600">Currently trading at: 
              <span class="font-bold">${{ brewlabsPrice.data.value }}</span>
            </h5>

            <Contract data-aos="fade-up" data-aos-delay="800" class="-ml-1 mt-2" v-if="data.fields.contractAddress" :address="data.fields.contractAddress" :slim="true" />

          </div>

          <div class="absolute right-1 top-2 gap-2 sm:self-start hidden sm:flex">
            <Badge v-if="data.fields.doxxed" data-aos="fade-down" data-aos-delay="500" class="!bg-slate-800 !text-gray-300">
              <ShieldCheckIcon class="w-6 h-6 mr-1" />
              Doxxed
            </Badge>
            <Badge v-if="data.fields.kyc"  data-aos="fade-down" data-aos-delay="700" class="!bg-slate-800 !text-gray-300">
              <ShieldCheckIcon class="w-6 h-6 mr-1" />
              KYC - Brewlabs
            </Badge>
          </div>
        </div>

        <img class="object-cover w-full h-full" :src="data.fields.featuredImage!.fields.file.url" />

      </div>

      <div data-aos="fade-in-up" data-aos-delay="500" class="shrink overflow-hidden">

        <h4 class="mb-4 font-bold text-lg underline decoration-4 decoration-slate-700">
          <span class="visible md:hidden">Featured project: </span>{{ data.fields.name }}
        </h4>

         <div class="flex gap-2 mb-2 sm:hidden">
            <Badge class="!bg-slate-800 !text-gray-300">
              <ShieldCheckIcon class="w-6 h-6 mr-1" />
              Doxxed
            </Badge>
            <Badge class="!bg-slate-800 !text-gray-300">
              <ShieldCheckIcon class="w-6 h-6 mr-1" />
              KYC - Brewlabs
            </Badge>
          </div>

        <vue-markdown :source="data.fields.description" />

        <Socials class="mt-4 pb-7 text-gray-400" />
        
      </div>

    </div>
  </section>
</template>