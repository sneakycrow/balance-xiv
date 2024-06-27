<template>
  <div class="relative h-auto md:h-85 xl:h-96">
    <div
      class="responsive-container flex flex-col md:flex-row gap-3 md:gap-0 items-center pt-20 h-full md:pl-8"
    >
      <div
        class="flex flex-col md:flex-row items-center gap-2 md:gap-6 md:w-1/2"
      >
        <NuxtImg
          preload
          class="drop-shadow-lg-tanks w-14 md:w-24 lg:w-44 xl:w-52 flex-shrink-0"
          :src="`/assets/jobs/${role}/icon_white.svg`"
          :alt="`${role} Role Icon`"
        />
        <div class="flex flex-col items-center md:items-start gap-3">
          <h1
            class="tracking-wider capitalize text-3xl md:text-4xl xl:text-6xl font-semibold filter drop-shadow-lg-tanks mb-0"
          >
            {{ $t(`roles.${role}`) }}
          </h1>
          <p class="text-center md:text-left">{{ description }}</p>
        </div>
      </div>
      <div
        class="mt-0 lg:mt-40 xl:mt-48 md:w-5/12 flex flex-end md:flex-1 md:pr-3 justify-center lg:justify-end"
      >
        <NuxtImg
          preload
          class="h-48 md:h-80"
          :src="`/assets/jobs/${role}/${role}-role.png`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { role } = useRouter().currentRoute.value.params;
const { data } = await useAsyncData("data", () =>
  queryContent("/roles").findOne(),
);

const { description } = data?.value?.roles?.find(
  (roleItem: Role) => roleItem.slug === role,
);
</script>
