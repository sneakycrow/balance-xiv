<template>
  <div
    class="w-full -z-1 bg-bottom md:bg-top bg-cover absolute h-96 md:h-72 xl:h-112 xl:mt-16 object-cover mt-16"
    :style="`background-image: url(/assets/jobs/${role}/${job}/background.png)`"
  />
</template>

<script setup>
const route = useRouter().currentRoute.value;
const { role, job } = route.params;
</script>
