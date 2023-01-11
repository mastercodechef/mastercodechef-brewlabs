<script setup lang="ts">
defineProps<{
  href: string;
  variant: 'outline' | 'brand' | 'dark',
}>();

</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer"
    class="flex items-center justify-center px-4 py-2 rounded-md text-base font-bold transition"
    :class="[
      variant === 'dark' && 'shadow-sm text-brand bg-dark hover:bg-brand hover:text-dark',
      variant === 'outline' && 'border-2 border-dark hover:bg-dark hover:text-brand',
      variant === 'brand' && 'shadow-sm text-dark bg-brand hover:bg-dark hover:text-brand',
    ]">
    <slot></slot>
  </a>
</template>