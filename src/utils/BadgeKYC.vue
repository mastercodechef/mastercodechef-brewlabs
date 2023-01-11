<script setup lang="ts">
import Popper from "vue3-popper";
import { CheckCircleIcon } from '@heroicons/vue/outline';

</script>

<template>
  <Popper content="KYC - Known by Brewlabs" hover arrow placement="top">
    <CheckCircleIcon class="w-6 h-6 text-amber-400 mr-2" />
  </Popper>
</template>