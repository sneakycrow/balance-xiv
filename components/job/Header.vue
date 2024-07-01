<template>
  <div class="relative h-auto md:h-85 xl:h-96">
    <div class="responsive-container flex items-center pt-16 h-full">
      <div class="flex items-center">
        <NuxtImg
          preload
          class="w-1/12 xl:w-32 md:h-20 xl:h-32"
          :src="`/assets/jobs/${role}/${job}/icon.svg`"
          :alt="`${job} Job Icon`"
        />
        <h1
          class="capitalize text-3xl md:text-4xl xl:text-6xl font-semibold filter ml-4 drop-shadow-lg-tanks mb-0"
        >
          {{ job?.replace("-", " ") }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { role, job } = useRouter().currentRoute.value.params;
</script>
