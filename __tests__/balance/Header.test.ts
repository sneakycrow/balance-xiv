import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "../../components/balance/Header.vue";

it("renders the BalanceHeader component", async () => {
  const component = await mountSuspended(Header);
  expect(component.html()).toMatchInlineSnapshot(`
    "<header data-v-13fd093c="" class="bg-endwalker bg-center bg-cover relative h-64 md:h-96 mt-10 lg:mt-0">
      <nav data-v-13fd093c="">
        <ul class="flex items-center justify-center py-4 gap-20">
          <li><a href="#" class="nav-link">Combat Jobs</a></li>
          <li><a href="#" class="nav-link">Newsfeed</a></li>
        </ul>
      </nav>
      <div data-v-13fd093c="" class="absolute top-16 left-0 w-full flex items-center justify-center my-20 z-10"><a data-v-13fd093c="" href="/" class="flex items-center px-10 sm:px-0 py-4"><img data-v-13fd093c="" src="/the_balance.svg" alt="The Balance" class="w-96 lg:w-full"></a>
        <!--v-if-->
      </div>
    </header>"
  `);
});
