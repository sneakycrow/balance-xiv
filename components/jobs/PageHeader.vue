<template>
  <div
    class="w-full -z-1 bg-bottom md:bg-top bg-cover absolute top-0 h-96 md:h-72 xl:h-112 mt-11"
    :style="`background-image: url(${$config.app.baseURL}assets/jobs/${role}/${job}/background.png)`"
    ,
  />
  <div class="responsive-container h-64 md:h-96 z-10 pt-16 md:pt-24">
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
</template>

<script setup>
const { $config } = useNuxtApp();
const route = useRouter().currentRoute.value;
const { role, job } = route.params;
</script>
