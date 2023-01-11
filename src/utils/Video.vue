<script setup lang="ts">
import { inject } from "vue";

defineProps<{ poster: string, src: string }>()

const emitter: any = inject("emitter");

const openModal = (src: string) => {
  emitter.emit('openModal', src);
};
</script>

<template>
  <button @click="openModal(src)">
    <img class="rounded-lg" :src="poster" alt="play video" />
  </button>
</template>