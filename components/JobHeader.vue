<template>
  <div
    class="w-full -z-1 bg-top bg-cover absolute top-0 h-64 md:h-96"
    :class="{
      'bg-paladin': job === JobEnum.Paladin,
      'bg-warrior': job === JobEnum.Warrior,
      'bg-dark-knight': job === JobEnum.DarkKnight,
      'bg-gunbreaker': job === JobEnum.Gunbreaker,

      'bg-astrologian': job === JobEnum.Astrologian,
      'bg-sage': job === JobEnum.Sage,
      'bg-scholar': job === JobEnum.Scholar,
      'bg-white-mage': job === JobEnum.WhiteMage,

      'bg-dragoon': job === JobEnum.Dragoon,
      'bg-monk': job === JobEnum.Monk,
      'bg-ninja': job === JobEnum.Ninja,
      'bg-reaper': job === JobEnum.Reaper,
      'bg-samurai': job === JobEnum.Samurai,
      'bg-viper': job === JobEnum.Viper,

      'bg-bard': job === JobEnum.Bard,
      'bg-dancer': job === JobEnum.Dancer,
      'bg-machinist': job === JobEnum.Machinist,

      'bg-black-mage': job === JobEnum.BlackMage,
      'bg-pictomancer': job === JobEnum.Pictomancer,
      'bg-red-mage': job === JobEnum.RedMage,
      'bg-summoner': job === JobEnum.Summoner,
    }"
  />
  <div class="w-full h-64 md:h-96 z-10 pl-32 sm:pl-48 lg:pl-60 pt-16 md:pt-24">
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
        {{ job }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { JobEnum } from "~/types/enums/JobEnum";

const { role, job } = useRoute().params;
</script>
