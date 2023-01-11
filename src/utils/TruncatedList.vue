<script setup lang="ts">
import { computed } from 'vue';
import Popper from "vue3-popper";

const props = defineProps<{
  list: string[]
}>();

const truncatedList = computed(() => props.list.slice(0, 3));
const isTruncated = computed(() => props.list.length > 3)
</script>

<template>
  <Popper :hover="isTruncated" arrow placement="top">

    <template #content>
      <ul>
        <li v-for="item in list">
          {{ item }}
        </li>
      </ul>
    </template>

    <div class="flex group flex-wrap">
      <ul v-for="item in truncatedList" class="text-gray-900">
        <li class="border border-dashed py-1 px-2 mb-1 mr-1 rounded-full">
          {{ item }}
        </li>
      </ul>

      <span v-if="list.length > 3" class="border border-dashed py-1 px-2 mr-1 rounded-full group-hover:bg-slate-100">
        <span class="text-xs font-medium leading-none">+ {{ list.length }}</span>
      </span>
    </div>
  </Popper>
</template>