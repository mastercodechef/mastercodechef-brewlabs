<script setup lang="ts">
import { useProjectsQuery } from '../services/projects-query';
import Badge from '../utils/Badge.vue';
import BadgeChain from '../utils/BadgeChain.vue';
import TruncatedList from '../utils/TruncatedList.vue';
import BadgeKYC from '../utils/BadgeKYC.vue';

const { isLoading, data } = useProjectsQuery();

</script>

<template>

  <p v-if="isLoading">Loading</p>

  <section v-else-if="data" id="projects" class="bg-gradient-to-b from-gray-200 to-gray-50 pb-32 relative"
    aria-labelledby="projects">
    <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-extrabold tracking-tight text-dark md:text-5xl lg:text-6xl">Projects</h2>
      <p class="mt-6 max-w-3xl text-xl text-gray-500">
        Brewlabs Factory offers individuals the opportunity to bring
        their cryptocurrency ideas to life through smart contract
        engineering, auditing, development and launch.
      </p>
    </div>

    <div class="max-w-7xl mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col">

        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300 ">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col"
                      class="sticky top-0 z-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" class="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Service
                    </th>
                    <th scope="col" class="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" class="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Category
                    </th>
                    <th scope="col"
                      class="sticky top-0 z-10 py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">
                      Networks
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="project in data.items" :key="project.sys.id">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                          <img class="h-10 w-10 rounded-full" :src="project.fields?.logo.fields.file.url"
                            :alt="project.fields.name" />
                        </div>
                        <div class="ml-4">
                          <div class="flex items-center font-medium text-gray-900">
                            <BadgeKYC v-if="project.fields.kyc" />
                            {{ project.fields.name }}
                          </div>
                          <div class="text-gray-500">
                            <a class="underline" target="_blank" rel="noopener noreferrer"
                              :href="project.fields.website">
                              {{ project.fields.website }}
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <TruncatedList :list="project.fields?.services" />
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <Badge v-for="status in project.fields.projectStatus" :variant="status">
                        {{ status }}
                      </Badge>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <Badge v-for="category in project.fields.category" class="mr-2">
                        {{ category }}
                      </Badge>
                    </td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <BadgeChain :ecosystems="project.fields.ecosystem" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>