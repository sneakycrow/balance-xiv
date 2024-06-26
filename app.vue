<template>
  <main class="flex-1">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
  <BalanceFooter />
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";
register();
useSeoMeta({
  title: "Balance Guides |",
});

// only works in generated build
useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
