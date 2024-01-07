<template>
    <section class="space-y-4">
        <section class="space-y-4">
            <section v-if="info.bannerImage" class="flex justify-center items-center">
                <NuxtImg :src="info.bannerImage" :alt="info.title.romaji"
                    :title="info.title.romaji" class="w-full h-20 md:h-40 object-cover rounded-sm opacity-75" />
            </section>
            <section class="flex flex-col">
                <h2 class="text-secondary text-2xl font-semibold">{{ info.title.romaji }}</h2>
                <p class="text-primary">{{ info.title.native }}</p>
            </section>
            <section class="grid grid-cols-[auto,1fr] gap-4">
                <div class="hidden md:flex flex-col gap-2">
                    <NuxtImg :src="info.coverImage.large" :alt="info.title.romaji"
                        :title="info.title.romaji" class="w-full h-72 object-cover rounded-sm" />
                     <NuxtLink v-if="episodes && episodes.length > 0"
                        :to="`/e/${id}/${episodes[0].id}`"
                        class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                        Watch Now</NuxtLink>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-1">
                        <p class="text-primary">{{ info.season }}</p>
                        <p class="text-primary">{{ info.seasonYear }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ info.episodes ?
                            info.episodes : "?" }} Episodes
                        </p>
                        <p v-if="info.averageScore" class="text-primary bg-secondary rounded-sm px-2">{{
                            info.averageScore }}%</p>
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ info.format }}</p>
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ info.status }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <div v-for="(genre, index) in info.genres" :key="index">
                            <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                        </div>
                    </div>
                    <div v-html="info.description" class="text-primary w-full h-48 overflow-y-auto pr-2" />
                </div>
            </section>
            <section class="flex md:hidden justify-center items-center w-full">
                <NuxtLink v-if="episodes && episodes.length > 0"
                    :to="`/e/${id}/${episodes[0].id}`"
                    class="text-primary bg-secondary w-full text-center rounded-sm py-1 hover:bg-opacity-75">
                    Watch Now</NuxtLink>
            </section>
        </section>
        <!-- <section v-if="information.recommendations.results && information.recommendations.results.length > 0"
            class="space-y-4">
            <section class="flex flex-col">
                <h2 class="text-secondary text-xl font-semibold">Recommendations</h2>
                <p class="text-primary text-sm">Recommended For You</p>
            </section>
            <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
                <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1"
                    v-for="item in information.recommendations.results.slice(0, 8)">
                    <NuxtImg :src="item.coverImage.large" :alt="item.title.romaji" :title="item.title.romaji"
                        class="w-full h-44 md:h-56 object-cover rounded-sm hover:scale-95" />
                    <h6 class="text-primary text-sm truncate">{{ item.title.romaji }}</h6>
                    <div class="flex items-center gap-1">
                        <p class="text-primary bg-secondary text-sm rounded-sm px-1.5">{{ item.format }}</p>
                        <p class="text-secondary bg-primary text-sm rounded-sm px-1.5">{{ item.status }}</p>
                    </div>
                </NuxtLink>
            </section>
        </section> -->
    </section>
</template>

<script setup>
const { id } = defineProps(["id"]);
const { data: info } = await useFetch("/api/info?id=" + id);
const { data: episodes } = await useFetch("/api/episodes?id=" + id);
</script>