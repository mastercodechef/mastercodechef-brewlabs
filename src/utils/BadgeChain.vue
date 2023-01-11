<script setup lang="ts">
import Popper from "vue3-popper";

import BSCIcon from '../utils/BSCIcon.vue';
import EthIcon from '../utils/EthIcon.vue';
import CronosIcon from './CronosIcon.vue';
import FantomIcon from './FantomIcon.vue';

import { Ecosystems } from '../types/TypeProjectFields';

defineProps<{
  ecosystems: Ecosystems;
}>();

</script>

<template>
  <Popper :hover="true" placement="left">

    <template #content>
      <ul>
        <li v-for="item in ecosystems">
          {{ item }}
        </li>
      </ul>
    </template>

    <span v-for="ecosystem in ecosystems"
      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-800">
      <BSCIcon v-if="ecosystem.includes('Binance Smart Chain')" />
      <EthIcon v-if="ecosystem.includes('Ethereum')" />
      <CronosIcon v-if="ecosystem.includes('Cronos')" />
      <FantomIcon v-if="ecosystem.includes('Fantom')" />
      <slot></slot>
    </span>
  </Popper>
</template>

<style>
:root {
  --popper-theme-background-color: #0F2131;
  --popper-theme-background-color-hover: #0F2131;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 6px 12px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>