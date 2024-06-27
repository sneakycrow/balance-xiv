<template>
  <div
    class="w-full -z-1 md:bg-top bg-cover absolute h-112 md:h-84 xl:h-80 object-cover mt-14 md:mt-16"
    :style="`background-image: url(/assets/jobs/${role}/${role}-banner.png)`"
  />
</template>

<script lang="ts" setup>
const role = useRouter().currentRoute.value.params.role;
</script>
