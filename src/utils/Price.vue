<script setup lang="ts">
import { usePrice } from '../services/price-query';

const { data, isLoading, isError } = usePrice();

</script>

<template>
  <span class="text-sm ml-1" v-if="!isLoading && !isError"> - ${{ data }}</span>
</template>
