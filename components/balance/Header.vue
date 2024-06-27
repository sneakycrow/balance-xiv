<template>
  <header
    class="bg-endwalker bg-center bg-cover relative h-64 md:h-96 mt-10 lg:mt-0"
  >
    <BalanceNavigation />
    <div
      class="absolute top-16 left-0 w-full flex items-center justify-center my-20 z-10"
    >
      <a
        v-if="route.name === 'index'"
        href="/"
        class="flex items-center px-10 sm:px-0 py-4"
      >
        <img src="/the_balance.svg" alt="The Balance" class="w-96 lg:w-full" >
      </a>
      <h1
        v-if="route.name !== 'index'"
        class="text-2xl lg:text-6xl h-shadow font-bold mb-0 capitalize"
      >
        {{ route.name }}
      </h1>
    </div>
  </header>
</template>

<script lang="ts" setup>
const route = useRouter().currentRoute.value;
</script>

<style scoped>
.h-shadow {
  color: #fff;
  text-shadow: 2px 2px 2px #222;
}
</style>
