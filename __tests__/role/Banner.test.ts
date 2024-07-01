import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Banner from "../../components/role/Banner.vue";

it("renders the RoleBanner component", async () => {
  const component = await mountSuspended(Banner);
  expect(component.html()).toMatchInlineSnapshot(
    `"<div class="w-full -z-1 md:bg-top bg-cover absolute h-112 md:h-84 xl:h-80 object-cover mt-14 md:mt-16" style="background-image: url(" /assets/jobs/undefined/undefined-banner.png");"></div>"`,
  );
});
