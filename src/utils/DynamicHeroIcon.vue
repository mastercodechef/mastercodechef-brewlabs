

<script setup lang="ts">
import * as solid from '@heroicons/vue/solid';
import * as outline from '@heroicons/vue/outline';
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  outline: boolean;
}>()

type IconName = keyof typeof outline;

const icons = computed(() => { return {outline, solid } })

const icon = computed(() => icons.value['outline'][props.name as IconName] )

</script>

<template>
    <component :is="icon" class="h-6 w-6 text-white" aria-hidden="true"  />
</template>