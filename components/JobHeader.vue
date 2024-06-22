<template>
  <header
    :class="`bg-${job} bg-top bg-cover relative h-64 md:h-96 mt-10 lg:mt-0`"
  />
  <div
    class="absolute top-16 left-0 w-full flex items-center justify-center my-20 z-10"
  >
    <a href="/" class="flex items-center px-10 sm:px-0 py-4">
      <img src="/the_balance.svg" alt="The Balance" class="w-96 lg:w-full" />
    </a>
  </div>
</template>

<script setup>
const route = useRoute();
const job = route.params.job;
</script>
