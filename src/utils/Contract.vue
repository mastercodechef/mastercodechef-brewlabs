<script setup lang="ts">
import { ref } from "vue";
import { DuplicateIcon, ChevronRightIcon } from "@heroicons/vue/solid";

const props = defineProps<{
  address: string;
  slim?: boolean;
}>();

const copied = ref(false);

const copyAddress = () => {
  navigator.clipboard.writeText(props.address);

  copied.value = true;
  setTimeout(() => { copied.value = false; }, 1000);
}
</script>

<template>
  <div
    class="max-w-full w-auto inline-flex items-center text-dark border-dark rounded-full text-sm hover:text-gray-200 hover:bg-dark overflow-hidden"
    :class="[slim ? 'p-0 border' : ' p-1 pr-2 border-2']"
    @click="copyAddress">
    <div
      class="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-potion-red rounded-full flex items-center"
      :class="{ 'animate-pulse max-w-sm': copied }">
      <DuplicateIcon class="w-4 h-4 mr-1" />
      <span v-if="!copied">contract</span>
      <span v-else>copied</span>
    </div>

    <span class="ml-2 text-sm w-auto text-ellipsis overflow-hidden">{{ address }}</span>
    <ChevronRightIcon class="ml-2 w-5 h-5" aria-hidden="true" />
  </div>
</template>
