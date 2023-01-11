<script setup lang="ts">
import { ref } from "vue";
import { DateTime } from "luxon";
import Badge from "../utils/Badge.vue";

const countDownDate: any = DateTime.utc(2021, 12, 21, 2, 0);

let days = ref(0);
let hours = ref(0);
let minutes = ref(0);
let seconds = ref(0);

let finished = ref(false);

// Update the count down every 1 second
setInterval(() => {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance > now) {
    finished.value = true;
  }

}, 1000);

</script>

<template>
  <div
    id="buy"
    class="bg-gradient-to-b from-gray-200 to-gray-300 border-gray-100 border-b"
  >
    <div
      class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      <h2
        class="text-4xl font-extrabold tracking-tight text-dark md:text-5xl lg:text-6xl"
      >
        Buy Brewlabs token
        <Badge
          class="ml-2 bg-dark font-normal text-base tracking-wide bg-opacity-40"
        >Soon</Badge>
      </h2>
      <p
        class="mt-6 mb-8 max-w-3xl text-xl text-gray-500"
      >We will be launching on PCS with trading activated on Monday, 20th of December at 21:00 (9:00PM) EDT/ET (or in UTC - Tuesday, 21st of December at 2:00am).</p>

      <div
        v-if="!finished"
        class="text-4xl sm:text-6xl text-dark font-brand inline-flex gap-4 text-center"
      >
        <div class="flex flex-col">
          <span
            class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-md px-3 py-2 shadow"
          >{{ days }}</span>
          <span
            class="text-base sm:text-2xl text-gray-500"
          >days</span>
        </div>

        <div class="flex flex-col">
          <span
            class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-md px-3 py-2 shadow"
          >{{ hours }}</span>
          <span
            class="text-base sm:text-2xl text-gray-500"
          >hours</span>
        </div>

        <div class="flex flex-col">
          <span
            class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-md px-3 py-2 shadow"
          >{{ minutes }}</span>
          <span
            class="text-base sm:text-2xl text-gray-500"
          >minutes</span>
        </div>

        <div class="flex flex-col">
          <span
            class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-md px-3 py-2 shadow"
          >{{ seconds }}</span>
          <span
            class="text-base sm:text-2xl text-gray-500"
          >seconds</span>
        </div>
      </div>
    </div>
  </div>
</template>
