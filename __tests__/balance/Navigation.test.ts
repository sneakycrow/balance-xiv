import { it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Navigation from "../../components/balance/Navigation.vue";

it("renders the BalanceNavigation component", async () => {
  const component = await mountSuspended(Navigation);
  expect(component.html()).toMatchInlineSnapshot(`
    "<nav>
      <ul class="flex items-center justify-center py-4 gap-20">
        <li><a href="#" class="nav-link">Combat Jobs</a></li>
        <li><a href="#" class="nav-link">Newsfeed</a></li>
      </ul>
    </nav>"
  `);
});
