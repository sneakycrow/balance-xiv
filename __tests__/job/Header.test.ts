import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "../../components/job/Header.vue";

it("renders the JobHeader component", async () => {
  const component = await mountSuspended(Header);
  expect(component.html()).toMatchInlineSnapshot(`
    "<div class="relative h-auto md:h-85 xl:h-96">
      <div class="responsive-container flex items-center pt-16 h-full">
        <div class="flex items-center"><img alt="undefined Job Icon" data-nuxt-img="" srcset="/_ipx/_/assets/jobs/undefined/undefined/icon.svg 1x, /_ipx/_/assets/jobs/undefined/undefined/icon.svg 2x" src="/_ipx/_/assets/jobs/undefined/undefined/icon.svg" class="w-1/12 xl:w-32 md:h-20 xl:h-32">
          <h1 class="capitalize text-3xl md:text-4xl xl:text-6xl font-semibold filter ml-4 drop-shadow-lg-tanks mb-0"></h1>
        </div>
      </div>
    </div>"
  `);
});
