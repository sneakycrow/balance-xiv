<template>
  <div
    class="w-full -z-1 bg-top bg-cover absolute top-0 h-64 md:h-96"
    :class="{
      'bg-paladin': job === JobEnum.Paladin,
      'bg-warrior': job === JobEnum.Warrior,
      'bg-dark-knight': job === JobEnum.DarkKnight,
      'bg-gunbreaker': job === JobEnum.Gunbreaker,
    }"
  />
  <div class="w-full h-64 md:h-96 z-10 pl-32 sm:pl-48 lg:pl-60 pt-16 md:pt-24">
    <div class="flex items-center">
      <img
        class="w-1/12 xl:w-32 md:h-20 xl:h-32"
        :src="`/assets/jobs/${role}/${job}/icon.svg`"
        :alt="`${job} Job Icon`"
      />
      <h1
        class="capitalize text-3xl md:text-4xl xl:text-6xl font-semibold filter ml-4 drop-shadow-lg-tanks mb-0"
      >
        {{ job }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { JobEnum } from "~/types/enums/JobEnum";

const { role, job } = useRoute().params;
</script>
