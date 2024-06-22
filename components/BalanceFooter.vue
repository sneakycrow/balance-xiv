<template>
  <footer
    class="bg-card-light px-16 mt-16 flex flex-col justify-start items-start"
  >
    <div class="mt-16">
      <img src="/the_balance.png" />
      <div class="grid grid-cols-3 mt-16 justify-evenly">
        <div class="flex flex-col w-1/2 sm:w-1/3">
          <h3 class="">Combat Jobs</h3>
          <ul v-for="item in combatNavItems" :key="item.id">
            <li>
              <a :href="item.href">{{ item.copy }}</a>
            </li>
          </ul>
        </div>
        <div class="flex-auto col-start-3">
          <h3 class="">Info</h3>
          <ul class="">
            <!-- Replace with credits page link when created -->
            <li><a href="#">Credits</a></li>
          </ul>
        </div>
      </div>
      <div class="py-10 text-xs">
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
  name: "BalanceFooter",
  setup() {
    const combatNavItems = ref([
      // These temporarily have "#" as the href until the pages are created
      { id: "casters", href: "#", copy: "Casters" },
      { id: "healers", href: "#", copy: "Healers" },
      { id: "melee", href: "#", copy: "Melee" },
      { id: "ranged", href: "#", copy: "Ranged" },
      { id: "tanks", href: "#", copy: "Tanks" },
    ]);

    return { combatNavItems };
  },
};
</script>
