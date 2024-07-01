<template>
  <section v-bind="$attrs">
    <section>
      <Swiper
        class="swiper-nav"
        :allow-slide-prev="activeRoleIndex > 0"
        :allow-slide-next="activeRoleIndex < 4"
        :slides-per-view="viewport.isLessThan('desktop') ? 1 : 5"
        :hash-navigation="{
          watchState: true,
          replaceState: true,
        }"
        :navigation="viewport.isLessThan('desktop')"
        @swiper="setSwiperNavRef"
        @slide-change="onNavSliderChange"
      >
        <SwiperSlide
          v-for="(role, index) in roles"
          :key="role?.slug"
          :data-hash="role?.slug"
        >
          <a
            :href="`#${role?.slug}`"
            class="flex border-t-4 border-1 border-black flex-nowrap space-x-4 items-center justify-center px-7 py-3 text-center text-xl font-bold text-white uppercase tracking-widest transition-all h-full"
            :class="{
              'bg-card-light': activeRoleIndex === index,
              'bg-card-lighter': activeRoleIndex !== index,
              'border-t-tanks': role?.slug === 'tanks',
              'border-t-casters': role?.slug === 'casters',
              'border-t-healers': role?.slug === 'healers',
              'border-t-melee': role?.slug === 'melee',
              'border-t-ranged': role?.slug === 'ranged',
            }"
          >
            <NuxtImg class="h-10" :src="role?.icon" />
            <span>{{ role?.name }}</span>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
    <section>
      <Swiper
        class="swiper-tab"
        :slides-per-view="1"
        :allow-slide-prev="activeRoleIndex > 0"
        :allow-slide-next="activeRoleIndex < 4"
        :hash-navigation="{
          watchState: true,
          replaceState: true,
        }"
        @swiper="setSwiperTabRef"
        @slide-change="onMainSliderChange"
      >
        <SwiperSlide
          v-for="role in roles"
          :key="role?.slug"
          :data-hash="role?.slug"
        >
          <div
            class="grid grid-cols-2 lg:grid-cols-[30%_1fr] min-h-[30rem] bg-card-light p-4 items-center justify-center"
          >
            <div
              class="h-full col-span-2 lg:col-span-1 p-8 space-y-4 flex flex-col items-center pt-2"
            >
              <a
                :href="`/${role?.slug}`"
                class="text-link-orange p-1 md:p-5 mt-2font-sans font-bold tracking-wide hover:bg-card-lighter rounded transition-colors"
              >
                <NuxtImg
                  class="mx-auto hidden lg:block my-4 max-w-none w-20"
                  :src="role?.icon_white"
                />
                {{ role?.nameSingular }}
                {{ $t("landing.guides-and-resources") }}
                <span class="hidden md:inline">»</span>
              </a>
              <p class="text-left leading-7 text-gray-light">
                {{ role?.description }}
              </p>
            </div>
            <div class="col-span-2 lg:col-span-1 flex justify-around flex-wrap">
              <div
                v-for="job in role?.jobs"
                :key="job.slug"
                class="p-5 flex flex-col items-center justify-center w-1/2 lg:w-auto hover:bg-card-lighter rounded self-center"
              >
                <a
                  :href="`/${role?.slug}/${job.slug}`"
                  class="font-sans font-bold tracking-wide flex flex-col items-center gap-2"
                >
                  <NuxtImg
                    class="w-8 h-8 lg:w-16 lg:h-16 lg:mb-4"
                    :src="job.icon"
                  />
                  <label
                    :aria-label="job.name"
                    class="uppercase text-xl font-bold"
                    >{{ job.name }}</label
                  >
                  <span class="text-link-orange whitespace-nowrap"
                    >{{ $t("landing.guides-and-resources") }}
                    <span class="hidden md:inline">»</span></span
                  >
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </section>
</template>

<script lang="ts">
import type Swiper from "swiper";
import type { Role, RoleImage } from "~/types/Role";

// initialize swiper web components
export default {
  name: "RoleSlider",
  async setup() {
    const { $viewport } = useNuxtApp();

    const activeRoleIndex = ref(0);
    const swiperNav = ref<Swiper>();
    const swiperTab = ref<Swiper>();

    const setSwiperNavRef = (swiper: Swiper) => {
      swiperNav.value = swiper;
    };

    const setSwiperTabRef = (swiper: Swiper) => {
      swiperTab.value = swiper;
    };

    const { data } = await useAsyncData("data", () =>
      queryContent("/roles").findOne(),
    );

    function onNavSliderChange(swiper: Swiper) {
      activeRoleIndex.value = swiper.activeIndex;
      swiperTab.value?.slideTo(swiper.activeIndex);
    }

    function onMainSliderChange(swiper: Swiper) {
      activeRoleIndex.value = swiper.activeIndex;
      swiperNav.value?.slideTo(swiper.activeIndex);
    }

    const roles: Role[] =
      data.value?.roles?.toSorted((a: Role, b: Role) => a.order - b.order) ??
      [];
    // Job Images
    // We use the slug of the role/job to parse the relevant image from the assets directory
    // Icons for jobs should be /assets/jobs/{role-slug}/{job-slug}/icon.svg
    // Icons for roles should be /assets/jobs/{role-slug}/icon.svg

    const roleImages: RoleImage[] = roles.map((role) => {
      // Use the slug of the role to get the role icon
      const { slug: roleSlug } = role;
      const roleIconPath = `/assets/jobs/${roleSlug}/icon.svg`;
      const roleIconWhitePath = `/assets/jobs/${roleSlug}/icon_white.svg`;
      // Each role should have a list of jobs, each with a slug
      // Use the slug of the job with the role to get the job icon
      const jobs = role.jobs.map((job) => {
        const { slug: jobSlug } = job;
        const jobIconPath = `/assets/jobs/${roleSlug}/${jobSlug}/icon.svg`;

        return {
          slug: job.slug,
          icon: jobIconPath,
        };
      });
      // Return the role and job icons
      return {
        slug: roleSlug,
        icon: roleIconPath,
        icon_white: roleIconWhitePath,
        jobs,
      };
    });
    // Push the role images to the roles array
    const rolesWithImages = roles.map((role) => {
      // Find the specific image set for the role
      const roleImageSet: RoleImage | undefined = roleImages.find(
        (roleObj) => roleObj.slug === role.slug,
      );
      // TODO: Add better error handling
      // If no image is found for the role, don't bother with the jobs
      if (!roleImageSet) return;
      // After getting the image for the role, add the job images too
      const jobsWithImages = role.jobs.map((job) => {
        // Find the job within the image set for the role
        const jobImage = roleImageSet?.jobs.find(
          (jobObj) => jobObj.slug === job.slug,
        );
        return { ...job, icon: jobImage?.icon ?? "" };
      });
      return {
        ...role,
        icon: roleImageSet.icon,
        icon_white: roleImageSet.icon_white,
        jobs: jobsWithImages,
      };
    });
    // Finally, sort the roles by order
    const ROLE_ORDER = ["tanks", "healers", "melee", "ranged", "casters"];
    rolesWithImages.sort((a, b) => {
      return (
        ROLE_ORDER.indexOf(a?.slug ?? "") - ROLE_ORDER.indexOf(b?.slug ?? "")
      );
    });
    return {
      viewport: $viewport,
      roles: rolesWithImages,
      onNavSliderChange,
      onMainSliderChange,
      activeRoleIndex,
      setSwiperNavRef,
      setSwiperTabRef,
    };
  },
};
</script>

<style scoped>
.swiper {
  --swiper-navigation-size: 1.5rem;
  --swiper-navigation-color: grey;
}

.swiper-slide {
  height: auto;
}
</style>
