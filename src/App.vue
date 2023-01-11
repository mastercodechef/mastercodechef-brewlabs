<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import Modal from './utils/IframeModal.vue';

</script>

<template>
  <Navigation />
  <main id="main">
    <router-view></router-view>
  </main>
  <Footer />
  <Modal />
</template>

