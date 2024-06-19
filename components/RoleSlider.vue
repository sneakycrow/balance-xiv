<template>
    <section v-bind="$attrs">
        <section>
            <swiper-container id="role-nav-thumbs" :slides-per-view="5">
                <swiper-slide v-for="(role, index) in roles">
                    <a
                        :href="`#${role.title}`"
                        class="flex border-t-4 border-1 border-black flex-nowrap space-x-4 items-center justify-center px-7 py-3 text-center text-xl font-bold text-white uppercase tracking-widest transition-all"
                        :class="{
                            'bg-card-light': index === activeRole,
                            'bg-card-lighter': index !== activeRole,
                            'border-t-tanks': role.title === 'tanks',
                            'border-t-casters': role.title === 'casters',
                            'border-t-healers': role.title === 'healers',
                            'border-t-melee': role.title === 'melee',
                            'border-t-ranged': role.title === 'ranged',
                        }"
                        @click="activeRole = index"
                    >
                        <img :src="role.icon" />
                        <span>{{ role.name }}</span>
                    </a>
                </swiper-slide>
            </swiper-container>
        </section>
        <section>
            <swiper-container
                :slides-per-view="1"
                :hashNavigation="{
                    watchState: true,
                    replaceState: true,
                }"
                thumbs-swiper="#role-nav-thumbs"
                @swiperslidechange="onSlideChange"
            >
                <swiper-slide v-for="role in roles" :data-hash="role.title">
                    <div
                        class="grid grid-cols-6 h-[30rem] bg-card-light p-4 items-center justify-center"
                    >
                        <div
                            class="row-span-2 h-full col-span-2 p-8 space-y-4 flex flex-col items-center justify-center"
                        >
                            <img
                                class="mx-auto my-4 max-w-none w-20"
                                :src="role.icon_white"
                            />
                            <a
                                :href="role.role_link"
                                class="text-link-orange mt-2 hidden md:block font-sans font-bold tracking-wide"
                            >
                                {{ role.nameSingular }} Guides & Resources »
                            </a>
                            <p>{{ role.description }}</p>
                        </div>

                        <div
                            v-for="job in role.jobs"
                            class="col-span-1 p-2 flex flex-col items-center justify-center"
                        >
                            <img
                                class="w-8 h-8 md:w-16 md:h-16 mr-4 md:mr-0 md:mb-4"
                                :src="job.icon"
                            />
                            <a
                                :href="job.job_link"
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
import { ref, onMounted } from "vue";
import { register } from "swiper/element/bundle";
// initialize swiper web components
register();
export default {
    async setup() {
        let activeRole = ref(0);
        const spaceBetween = 10;

        const onSlideChange = (e) => {
            const [swiper] = e.detail;
            activeRole.value = swiper.activeIndex;
        };
        const { data } = await useAsyncData("data", () =>
            queryContent("/roles").findOne(),
        );

        const roles = data.value.roles.toSorted((a, b) => a.order - b.order);

        return {
            activeRole,
            spaceBetween,
            onSlideChange,
            roles,
        };
    },
};
</script>
