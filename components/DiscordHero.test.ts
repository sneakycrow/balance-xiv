import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import DiscordHero from "./DiscordHero.vue";

it("renders the DiscordHero component", async () => {
  const component = await mountSuspended(DiscordHero);
  expect(component.html()).toContain("discord.gg/thebalanceffxiv");
});
