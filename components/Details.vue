<template>
    <section class="space-y-4">
        <section class="space-y-4">
            <section v-if="info.bannerImage" class="flex justify-center items-center">
                <NuxtImg :src="info.bannerImage" :alt="info.title.romaji" :title="info.title.romaji"
                    class="w-full h-20 md:h-40 object-cover rounded-sm opacity-75" />
            </section>
            <section class="flex flex-col">
                <h2 class="text-secondary text-2xl font-semibold">{{ info.title.romaji }}</h2>
                <p class="text-primary">{{ info.title.native }}</p>
            </section>
            <section class="grid grid-cols-[auto,1fr] gap-4">
                <div class="hidden md:flex flex-col gap-2">
                    <NuxtImg :src="info.coverImage.large" :alt="info.title.romaji" :title="info.title.romaji"
                        class="w-full h-72 object-cover rounded-sm" />
                    <NuxtLink v-if="episodes && episodes.length > 0" :to="`/e/${id}/${episodes[0].id}`"
                        class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                        Watch Now</NuxtLink>
                    <button v-else type="button"
                        class="text-primary bg-error text-center rounded-sm py-1 hover:bg-opacity-75">Not
                        Available</button>
                    <div class="grid grid-cols-2 gap-2">
                        <NuxtLink :to="`https://anilist.co/anime/${info.id}`" target="_blank" external
                            class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                            Anilist</NuxtLink>
                        <NuxtLink :to="`https://myanimelist.net/anime/${info.idMal}`" target="_blank" external
                            class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                            Mal</NuxtLink>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-1">
                        <p v-if="info.season" class="text-primary">
                            {{ info.season === "WINTER" ? "Winter"
                                : info.season === "SPRING" ? "Spring"
                                    : info.season === "SUMMER" ? "Summer"
                                        : info.season === "FALL" ? "Fall"
                                            : info.season }}</p>
                        <p v-if="info.seasonYear" class="text-primary">{{ info.seasonYear }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <p :class="`text-primary ${info.episodes ? 'bg-secondary' : 'bg-error'} rounded-sm px-2`">
                            {{ info.episodes ? info.episodes : "?" }} Episodes
                        </p>
                        <p v-if="info.averageScore" class="text-primary bg-secondary rounded-sm px-2">{{
                            info.averageScore }}%</p>
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ info.format }}</p>
                        <p :class="`text-primary ${info.status === 'NOT_YET_RELEASED' ? 'bg-error' : 'bg-secondary'} 
                        rounded-sm px-2`">{{ info.status === "FINISHED" ? "Finished" :
                            info.status === "RELEASING" ? "Releasing"
                                : info.status === "NOT_YET_RELEASED" ? "Not Yet Released"
                                    : info.status === "CANCELLED" ? "Cancelled"
                                        : info.status === "HIATUS" ? "Hiatsu"
                                            : info.status }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <div v-for="(genre, index) in info.genres" :key="index">
                            <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                        </div>
                    </div>
                    <div v-html="info.description" class="text-primary w-full h-48 overflow-y-auto pr-2" />
                </div>
            </section>
            <section class="flex md:hidden justify-center items-center">
                <div class="flex flex-col w-full gap-2">
                    <NuxtLink v-if="episodes && episodes.length > 0" :to="`/e/${id}/${episodes[0].id}`"
                        class="text-primary bg-secondary w-full text-center rounded-sm py-1 hover:bg-opacity-75">
                        Watch Now</NuxtLink>
                    <button v-else type="button"
                        class="text-primary bg-error text-center rounded-sm py-1 hover:bg-opacity-75">Not
                        Available</button>
                    <div class="grid grid-cols-2 gap-2">
                        <NuxtLink :to="`https://anilist.co/anime/${info.id}`" target="_blank" external
                            class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                            Anilist</NuxtLink>
                        <NuxtLink :to="`https://myanimelist.net/anime/${info.idMal}`" target="_blank" external
                            class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                            Mal</NuxtLink>
                    </div>
                </div>
            </section>
        </section>
        <section v-if="recommendations && recommendations.length > 0" class="space-y-4">
            <section class="flex flex-col">
                <h2 class="text-secondary text-xl font-semibold">Recommendations</h2>
                <p class="text-primary text-sm">Recommended For You</p>
            </section>
            <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
                <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1" v-for="item in recommendations">
                    <NuxtImg :src="item.coverImage.large" :alt="item.title.romaji" :title="item.title.romaji" class="w-full h-44 ms:h-48 mm:h-60 ml:h-64 tb:h-32 lp:h-56 ll:h-60 4k:h-96 
                        object-cover rounded-sm hover:scale-95" />
                    <h6 class="text-primary text-sm truncate">{{ item.title.romaji }}</h6>
                    <div class="flex items-center gap-1">
                        <p class="text-primary bg-secondary text-sm rounded-sm px-1.5">{{ item.format }}</p>
                    </div>
                </NuxtLink>
            </section>
        </section>
    </section>
</template>

<script setup>
const { id } = defineProps(["id"]);
const { data: info } = await useFetch("/api/info?id=" + id);
const { data: episodes } = await useFetch("/api/episodes?id=" + id);
const { data: recommendations } = await useFetch("/api/recommendations?id=" + id);
</script>