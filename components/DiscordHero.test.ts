import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import DiscordHero from "./DiscordHero.vue";

it("renders the DiscordHero component", async () => {
  const component = await mountSuspended(DiscordHero);
  expect(component.html()).toMatchInlineSnapshot(`
    "<a class="flex w-full justify-start" href="https://discord.gg/thebalanceffxiv">
      <div class="bg-join-community bg-cover bg-center my-24 px-20 pt-12 pb-36 sm:pb-12 w-full">
        <div class="mx-auto">
          <div>
            <h1 class="text-md sm:text-2xl pb-2 uppercase font-bold mb-0"> Join the community </h1><img class="w-7/8 sm:w-1/3 pb-2" src="/the_balance.svg">
            <div class="flex flex-row items-center"><img class="w-auto mr-4" src="/icons/discord_logo_white.svg">
              <h2 class="text-md sm:text-2xl font-bold mb-0"> discord.gg/thebalanceffxiv </h2>
            </div>
          </div>
        </div>
      </div>
    </a>"
  `);
});

it("renders the DiscordHero component with a custom link", async () => {
  const component = await mountSuspended(DiscordHero, {
    props: {
      link: "https://discord.gg/thebalanceffxiv",
    },
  });
  expect(component.html()).toContain("https://discord.gg/thebalanceffxiv");
});
