<script lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

const faqs = [
  {
    question: "Is the Brewlabs token contract renounced?",
    answer:
      "The Brewlabs contract is not renounced. The team require control over the contract in order to be able to adjust the buy and sell taxes as needed to evolve the token in line with the roadmap. Contract ownership is also needed to run the Combustion Hour function. Not renouncing the contract is consistent with major token projects in the crypto space.",
  },
  {
    question: "Why do the top wallets take up a significant portion of total supply?",
    answer: "Brewlabs has created a unique staking platform that allows its holders to generate two forms of passive income in the form of both staking rewards and dividends. Currently, the two largest wallets represent the staking pools that have thousands of users currently staking their tokens and generating rewards.",
  },
  {
    question: "What are the team wallets and what do they represent?",
    answer: "Each development team member has been allocated 0.5% of total supply and will be allocated another 0.5% vested over 12 months. The team also controls a marketing wallet, which is mostly funded through the marketing component of the buy and sell tax, and a developer wallet, which will be used to fund future service and product offerings.",
  },
  {
    question: "What is Healing Potion and what does it have to do with Brewlabs?",
    answer: "Healing potion was the first iteration of the Brewlabs brand. In order to evolve, the contract needed to be updated with control retained by the team. The Brewlabs token was redeployed with Healing Potion’s liquidity included and Healing Potion holders were airdropped with the new Brewlabs token. The original Healing Potion token is no longer recognized.",
  },
  {
    question: "When are the BUSD reflections (dividends) paid to Brewlabs holders?",
    answer: "The Brewlabs contract has a special function that stores the buy and sell tax in Brewlabs until it reaches a preset amount. Once this happens, the reflection portion is swapped into BUSD and automatically sent out to holders up to a gas limit. These holders will then go to the bottom of the line and the next holders will be paid out their allocation over future swap and liquify events. Once the BUSD is a reserved to holders, they can either wait for the automatic contract function to airdrop the tokens, manually claim the BUSD through the contract or use the staking platform to claim BUSD reflections.",
  },
  {
    question: "How come the gas I pay fluctuates?",
    answer: "Gas is a fee that has to be paid for smart contract execution. Brewlabs staking pools and farms are powered by smart contracts. Often, increasing or decreasing gas fees is due to general blockchain activity, with high load periods resulting in higher gas charges. Contract complexity also drives movements in gas fees. Each time you add tokens to a staking pool, these tokens are tracked separately within the contract. The more times you add tokens to a pool, the higher the gas fee to compound your earned rewards will be, as compounding splits your earned rewards across each individual stake.",
  },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    }
  },
}
</script>
<template>
  <div id="faq" class="bg-gray-50">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <div
        class="max-w-3xl mx-auto divide-y-2 divide-gray-200"
      >
        <h2
          class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"
        >Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span
                  class="font-medium text-gray-900"
                >{{ faq.question }}</span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p
                class="text-base text-gray-500"
              >{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>