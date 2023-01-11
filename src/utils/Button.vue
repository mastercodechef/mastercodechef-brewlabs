<script setup lang="ts">

export type btnVariantProps = 'outline' | 'brand' | 'dark';

defineProps<{
  variant?:  btnVariantProps
}>();

</script>

<template>
  <button type="button"
    class="flex items-center justify-center px-4 py-2 rounded-md text-base font-bold transition"
    :class="[
      variant === 'dark' && 'shadow-sm text-brand bg-dark hover:bg-brand hover:text-dark',
      variant === 'outline' && 'border-2 border-dark hover:bg-dark hover:text-brand',
      variant === 'brand' && 'shadow-sm text-dark bg-brand hover:bg-dark hover:text-brand',
    ]">
    <slot></slot>
  </button>
</template>
