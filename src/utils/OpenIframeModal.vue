<script setup lang="ts">
import { inject } from "vue";
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import Button, { btnVariantProps } from "./Button.vue";

const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greater('sm')

defineProps<{ src: string; variant?: btnVariantProps }>()

const emitter: any = inject("emitter");

const openModal = (src: string) => {
  emitter.emit('openModal', src);
};
</script>

<template>
  <Button v-if="smAndLarger" :variant="variant" @click="openModal(src)">
    <slot></slot>
  </Button>
  <a v-else :href="src" target="_blank" rel="noopener noreferrer"
    class="flex items-center justify-center px-4 py-2 rounded-md text-base font-bold transition" 
    :class="[
      variant === 'dark' && 'shadow-sm text-brand bg-dark hover:bg-brand hover:text-dark',
      variant === 'outline' && 'border-2 border-dark hover:bg-dark hover:text-brand',
      variant === 'brand' && 'shadow-sm text-dark bg-brand hover:bg-dark hover:text-brand',
    ]">
    <slot></slot>
  </a>
</template>