<template>
  <nav>
    <ul class="flex items-center justify-center py-4 gap-20">
      <li v-for="item in navList" :key="item.id">
        <a :href="item.href" class="nav-link">
          {{ item.copy }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
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
