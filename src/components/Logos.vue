<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from "@vue/runtime-core";

onMounted(() => { AOS.init() });
</script>

<template>
  <div class="bg-gray-50">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">

        <div
          class="col-span-1 flex justify-center "
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <a
            href="https://www.certik.com/projects/brewlabs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class="h-12"
              src="../assets/certik-logo-vector.svg"
              alt="certik"
            />
          </a>
        </div>
       
        <div
          class="col-span-1 flex justify-center "
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <a
            href="https://www.binance.com/en/price/brewlabs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class="h-12 px-6"
              src="../assets/binance-smart-chain.svg"
              alt="binance smart chain"
            />
          </a>
        </div>

        <div
          class="col-span-1 flex justify-center "
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <a
            href="https://coinmarketcap.com/currencies/brewlabs/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class="h-12 px-8"
              src="../assets/coinmarketcap-logo.svg"
              alt="Coin Market Cap"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
