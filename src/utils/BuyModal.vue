<script setup lang="ts">
import { ref, watch, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';

const open = ref(false);
const route = useRoute();
const router = useRouter();
const emitter: any = inject("emitter");

router.afterEach(() => {
  if (route.query.buy === 'brewlabs') {
    open.value = true;
  }
})

emitter.on("openBuyModal", () => {
  open.value = true;
  router.push({ query: { buy: 'brewlabs' } });
});

watch(open, (openState) => {
  if (!openState) {
    router.push(route.path);
  }
});

</script>
    
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-30 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div
            class="inline-block align-bottom bg-dark rounded-lg pb-2 text-left overflow-hidden shadow-xl transform transition-all sm:my-2 sm:align-middle sm:max-w-screen-sm sm:w-fit sm:p-4">
            <div class="absolute top-0 right-0 pt-4 pr-4 z-10">
              <button type="button" class="bg-brand rounded-md text-dark hover:text-gray-900 focus:outline-none"
                @click="open = false">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <iframe width="360" height="590" loading="lazy" allowtransparency="true"
              src="https://www.flooz.trade/embedded/0x6aac56305825f712fd44599e59f2ede51d42c3e7/?refId=ExQEr5&backgroundColor=transparent"
              title="Flooz Trade - Buy Brewlabs" frameborder="0" allow="clipboard-read; clipboard-write;"></iframe>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

