<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { client } from '../services/contentful';

const route = useRoute()
const projectData = ref()

onBeforeMount(() => {
  client.getEntry(route.params.id as string).then((entry) => projectData.value = entry).catch(err => console.log(err));
});

</script>

<template>
  <div class="h-screen text-gray-700 mt-16">
    <h1 class="text-6xl text-center">{{ projectData.fields.name }}</h1>
    <p></p>
  </div>
</template>