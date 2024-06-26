const plugin = require("tailwindcss/plugin");

/* breakpoint values
sm	640px
md	768px
lg	1024px
xl	1280px
2xl	1536px */

module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  safelist: [
    "role-header-tanks",
    "role-header-healers",
    "role-header-melee",
    "role-header-ranged",
    "role-header-casters",
    "drop-shadow-lg-tanks",
    "drop-shadow-lg-healers",
    "drop-shadow-lg-melee",
    "drop-shadow-lg-ranged",
    "drop-shadow-lg-casters",
    "card-tanks",
    "card-healers",
    "card-melee",
    "card-ranged",
    "card-casters",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      head: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      dropShadow: {
        lg: "2px 2px 3px #000000",
        "lg-healers": "2px 2px 3px #256A1D",
        "lg-tanks": "2px 2px 3px #1D3D6A",
        "lg-melee": "2px 2px 3px #6A1D1D",
        "lg-ranged": "2px 2px 3px #6A1D1D",
        "lg-casters": "2px 2px 3px #6A1D1D",
        "3xl": "0 100px 100px rgba(0, 0, 0, 0.75)",
      },
      colors: {
        "line-divide-color": "#2a3641",
        "link-orange": "#FF9900",
        "card-lighter": "#1E1E1F",
        "card-light": "#19191A",
        "card-dark": "#101111",
        "card-border-color": "#3871c2",
        "card-header-text-color": "#7b8794",
        "table-light": "#29292c",
        "table-divider-color": "#414141",
        tanks: "#3A7AD6",
        healers: "#47C168",
        melee: "#D84D4D",
        ranged: "#D84D4D",
        casters: "#D84D4D",
        page: "#222528",
        "nav-border": "#949494",
        gray: {
          light: "#C9C9C9",
        },
      },
      width: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
      height: {
        68: "17rem",
        84: "21rem",
        88: "22rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
      minHeight: {
        0: "0",
        36: "9rem",
        full: "100%",
      },
      zIndex: {
        "-1": "-1",
      },
      fontSize: {
        base: "0.9375rem",
      },
      backgroundImage: {
        endwalker: "url('/endwalker@2x.png')",
        paladin: "url('/assets/jobs/tanks/paladin/background.png')",
        warrior: "url('/assets/jobs/tanks/warrior/background.png')",
        "dark-knight": "url('/assets/jobs/tanks/dark-knight/background.png')",
        gunbreaker: "url('/assets/jobs/tanks/gunbreaker/background.png')",
        astrologian: "url('/assets/jobs/healers/astrologian/background.png')",
        sage: "url('/assets/jobs/healers/sage/background.png')",
        "white-mage": "url('/assets/jobs/healers/white-mage/background.png')",
        dragoon: "url('/assets/jobs/melee/dragoon/background.png')",
        monk: "url('/assets/jobs/melee/monk/background.png')",
        ninja: "url('/assets/jobs/melee/ninja/background.png')",
        reaper: "url('/assets/jobs/melee/reaper/background.png')",
        samurai: "url('/assets/jobs/melee/samurai/background.png')",
        viper: "url('/assets/jobs/melee/viper/background.png')",
        bard: "url('/assets/jobs/ranged/bard/background.png')",
        dancer: "url('/assets/jobs/ranged/dancer/background.png')",
        machinist: "url('/assets/jobs/ranged/machinist/background.png')",
        "black-mage": "url('/assets/jobs/casters/black-mage/background.png')",
        pictomancer: "url('/assets/jobs/casters/pictomancer/background.png')",
        "red-mage": "url('/assets/jobs/casters/red-mage/background.png')",
        summoner: "url('/assets/jobs/casters/summoner/background.png')",
        "join-community": "url('/join-community.png')",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [
    // Card Plugin
    plugin(({ addUtilities, theme, e }) => {
      const colors = theme("colors");

      const cardUtilityBorderColor = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === "string") {
          return {
            ...acc,
            [`.card-${e(key)}`]: {
              "--tw-border-color": colors[key],
            },
          };
        }

        const variants = Object.keys(colors[key]);

        return {
          ...acc,
          ...variants.reduce(
            (a, variant) => ({
              ...a,
              [`.card-${e(key)}-${variant}`]: {
                "--tw-border-color": colors[key][variant],
              },
            }),
            {},
          ),
        };
      }, {});

      const cardUtilityBase = {
        background: theme("colors.card-light"),
        padding: "1.25rem 1.5rem",
        borderLeft: `8px solid var(--tw-border-color, ${theme("colors.gray.600")})`,
      };

      const cardUtilities = {
        ...cardUtilityBorderColor,
        ".card": cardUtilityBase,
      };

      addUtilities(cardUtilities);
    }),
  ],
};
