import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "../../components/role/Header.vue";

it("renders the RoleHeader component", async () => {
  const component = await mountSuspended(Header);
  expect(component.html()).toMatchInlineSnapshot(`
    "<div class="relative h-auto md:h-85 xl:h-96">
      <div class="responsive-container flex flex-col md:flex-row gap-3 md:gap-0 items-center pt-20 h-full md:pl-8">
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-6 md:w-1/2"><img alt="undefined Role Icon" data-nuxt-img="" srcset="/_ipx/_/assets/jobs/undefined/icon_white.svg 1x, /_ipx/_/assets/jobs/undefined/icon_white.svg 2x" src="/_ipx/_/assets/jobs/undefined/icon_white.svg" class="drop-shadow-lg-tanks w-14 md:w-24 lg:w-44 xl:w-52 flex-shrink-0">
          <div class="flex flex-col items-center md:items-start gap-3">
            <h1 class="tracking-wider capitalize text-3xl md:text-4xl xl:text-6xl font-semibold filter drop-shadow-lg-tanks mb-0">roles.undefined</h1>
            <p class="text-center md:text-left"></p>
          </div>
        </div>
        <div class="mt-0 lg:mt-40 xl:mt-48 md:w-5/12 flex flex-end md:flex-1 md:pr-3 justify-center lg:justify-end"><img data-nuxt-img="" srcset="/_ipx/_/assets/jobs/undefined/undefined-role.png 1x, /_ipx/_/assets/jobs/undefined/undefined-role.png 2x" src="/_ipx/_/assets/jobs/undefined/undefined-role.png" class="h-48 md:h-80"></div>
      </div>
    </div>"
  `);
});
