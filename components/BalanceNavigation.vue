<template>
  <nav class="px-20">
    <ul class="flex items-center justify-center space-x-10 py-4">
      <li v-for="item in navList" :key="item.id">
        <a
          :href="item.href"
          class="py-2 px-4 font-semibold text-xl text-white hover:text-link-orange border-b-2 border-link-orange border-opacity-0 hover:border-opacity-100"
        >
          {{ item.copy }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "BalanceNavigation",
  setup() {
    const navList = ref([
      { id: "combatjobs", href: "#", copy: "Combat Jobs" }, // TODO: Make this a mega menu/popover menu
      {
        id: "newsfeed",
        href: "#",
        copy: "Newsfeed",
      },
    ]);
    return { navList };
  },
};
</script>
