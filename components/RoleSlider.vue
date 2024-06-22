<template>
  <section v-bind="$attrs">
    <section>
      <swiper-container id="role-nav-thumbs" :slides-per-view="5">
        <swiper-slide v-for="(role, index) in roles" :key="role?.slug">
          <a
            :href="`#${role?.slug}`"
            class="flex border-t-4 border-1 border-black flex-nowrap space-x-4 items-center justify-center px-7 py-3 text-center text-xl font-bold text-white uppercase tracking-widest transition-all"
            :class="{
              'bg-card-light': index === activeRole,
              'bg-card-lighter': index !== activeRole,
              'border-t-tanks': role?.slug === 'tanks',
              'border-t-casters': role?.slug === 'casters',
              'border-t-healers': role?.slug === 'healers',
              'border-t-melee': role?.slug === 'melee',
              'border-t-ranged': role?.slug === 'ranged',
            }"
            @click="activeRole = index"
          >
            <img :src="role?.icon" />
            <span>{{ role?.name }}</span>
          </a>
        </swiper-slide>
      </swiper-container>
    </section>
    <section>
      <swiper-container
        :slides-per-view="1"
        :hash-navigation="{
          watchState: true,
          replaceState: true,
        }"
        thumbs-swiper="#role-nav-thumbs"
        @swiperslidechange="onSlideChange"
      >
        <swiper-slide
          v-for="role in roles"
          :key="role?.slug"
          :data-hash="role?.slug"
        >
          <div
            class="grid grid-cols-6 h-[30rem] bg-card-light p-4 items-center justify-center"
          >
            <div
              class="row-span-2 h-full col-span-2 p-8 space-y-4 flex flex-col items-center justify-center"
            >
              <img
                class="mx-auto my-4 max-w-none w-20"
                :src="role?.icon_white"
              />
              <a
                href="#"
                class="text-link-orange mt-2 hidden md:block font-sans font-bold tracking-wide"
              >
                {{ role?.nameSingular }} Guides & Resources »
              </a>
              <p>{{ role?.description }}</p>
            </div>

            <div
              v-for="job in role?.jobs"
              :key="job.slug"
              class="col-span-1 p-2 flex flex-col items-center justify-center"
            >
              <img
                class="w-8 h-8 md:w-16 md:h-16 mr-4 md:mr-0 md:mb-4"
                :src="job.icon"
              />
              <a
                href="#"
                class="text-link-orange mt-2 hidden md:block font-sans font-bold tracking-wide"
                >Guides & Resources »</a
              >
              <p>{{ job.name }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import { register } from "swiper/element/bundle";
// initialize swiper web components
register();
export default {
  async setup() {
    // Slider
    // Keep track of the active role for the active tab
    const activeRole = ref(0);
    const onSlideChange = (e: { detail: [{ activeIndex: number }] }) => {
      const [swiper] = e.detail;
      activeRole.value = swiper.activeIndex;
    };
    const { data } = await useAsyncData("data", () =>
      queryContent("/roles").findOne(),
    );
    // TODO: Replace with type for actual role json
    type PartialRole = {
      order: number;
      slug: string;
      jobs: PartialJob[];
      description: string;
      name: string;
      nameSingular: string;
    };
    type PartialJob = {
      slug: string;
      name: string;
      description: string;
    };
    const roles: PartialRole[] = data.value?.roles.toSorted(
      (a: PartialRole, b: PartialRole) => a.order - b.order,
    );
    // Job Images
    // We use the slug of the role/job to parse the relevant image from the assets directory
    // Icons for jobs should be /assets/jobs/{role-slug}/{job-slug}/icon.svg
    // Icons for roles should be /assets/jobs/{role-slug}/icon.svg
    type ExpectedGlob = {
      [key: string]: {
        default: string;
      };
    };
    const rolesGlob: ExpectedGlob = import.meta.glob("@/assets/jobs/**/*.svg", {
      eager: true,
    });
    type RoleImage = {
      slug: string;
      icon: string;
      icon_white: string;
      jobs: JobImage[];
    };
    type JobImage = {
      slug: string;
      icon: string;
    };
    const roleImages: RoleImage[] = roles.map((role) => {
      // Use the slug of the role to get the role icon
      const { slug: roleSlug } = role;
      const roleIconPath =
        rolesGlob[`/assets/jobs/${roleSlug}/icon.svg`]?.default ?? "";
      const roleIconWhitePath =
        rolesGlob[`/assets/jobs/${roleSlug}/icon_white.svg`].default ?? "";
      // Each role should have a list of jobs, each with a slug
      // Use the slug of the job with the role to get the job icon
      const jobs = role.jobs.map((job) => {
        const { slug: jobSlug } = job;
        const jobIconPath =
          rolesGlob[`/assets/jobs/${roleSlug}/${jobSlug}/icon.svg`]?.default ??
          "";

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
      activeRole,
      onSlideChange,
      roles: rolesWithImages,
    };
  },
};
</script>
