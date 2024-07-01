<template>
  <footer
    class="bg-card-light mt-16 flex flex-col justify-start items-start w-full"
  >
    <div class="mt-10 px-5 md:px-0 responsive-container">
      <div class="flex md:justify-start">
        <img class="h-6 md:h-auto" src="/the_balance.png" />
      </div>
      <div class="grid grid-cols-2 mt-10 justify-evenly">
        <div class="flex flex-col sm:w-1/3 text-base">
          <h3 class="uppercase tracking-widest font-bold pb-2">Combat Jobs</h3>
          <ul v-for="item in combatNavItems" :key="item.id">
            <li class="text-link-orange font-semibold pb-0.5">
              <a
                class="border-link-orange border-opacity-0 border-b hover:border-opacity-100 transition-colors"
                :href="item.href"
                >{{ item.copy }}</a
              >
            </li>
          </ul>
        </div>
        <div class="md:flex-auto">
          <h3 class="uppercase tracking-widest font-bold pb-2">Info</h3>
          <ul>
            <!-- Replace with credits page link when created -->
            <li class="text-link-orange font-semibold py-0.5">
              <a
                class="border-link-orange border-opacity-0 border-b hover:border-opacity-100 transition-colors"
                href="/credits"
                >Credits</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="pb-5 pt-10 text-center text-xs md:text-sm leading-5 font-light text-gray-400"
      >
        © SQUARE ENIX CO., LTD. All Rights Reserved | FINAL FANTASY is a
        registered trademark of Square Enix Holdings Co., Ltd. | All content ©
        their respective authors | The Balance is a non-profit community-owned
        website.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  setup() {
    const combatNavItems = ref([
      // These temporarily have "#" as the href until the pages are created
      { id: "tanks", href: "#", copy: "Tanks" },
      { id: "healers", href: "#", copy: "Healers" },
      { id: "melee", href: "#", copy: "Melee" },
      { id: "ranged", href: "#", copy: "Ranged" },
      { id: "casters", href: "#", copy: "Casters" },
    ]);

    return { combatNavItems };
  },
};
</script>
