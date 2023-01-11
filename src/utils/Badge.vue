<script setup lang="ts">

defineProps<{variant?: string}>();

const getStatusVariant = (status?: string): string => {
  let returnedStatus = 'bg-gray-100';

  if(status === 'Active') {
    returnedStatus = 'bg-green-100'
  }
  if(status === 'Inactive') {
    returnedStatus = 'bg-red-100'
  }
  if(status === 'Development') {
    returnedStatus = 'bg-yellow-100'
  }
  if(status === 'Discovery') {
    returnedStatus = 'bg-pink-100'
  }
  return returnedStatus;
}


</script>

<template>
  <span 
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-800 whitespace-nowrap"
    :class="getStatusVariant(variant)"
  >
    <slot></slot>
  </span>
</template>