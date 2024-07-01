import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Banner from "../../components/job/Banner.vue";

it("renders the JobBanner component", async () => {
  const component = await mountSuspended(Banner);
  expect(component.html()).toMatchInlineSnapshot(`"<div class="w-full -z-1 bg-bottom md:bg-top bg-cover absolute h-96 md:h-72 xl:h-112 xl:mt-16 object-cover mt-16" style="background-image: url(" /assets/jobs/undefined/undefined/background.png");"></div>"`);
});
