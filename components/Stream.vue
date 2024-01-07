<template>
    <section class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-2xl font-semibold">{{ stream.info.title }}</h2>
            <p class="text-primary">Episode {{ stream.info.episode }}</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div class="flex flex-col gap-2">
                <iframe :src="stream.plyr.default" frameborder="0" class="w-full h-auto md:h-96 rounded-sm" />
                <NuxtLink :to="download.link" target="_blank" external
                    class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                    Download Episode</NuxtLink>
            </div>
            <section class="space-y-4">
                <section class="flex flex-col">
                    <h2 class="text-secondary text-2xl font-semibold">{{ info.title.romaji }}</h2>
                    <p class="text-primary">{{ info.title.native }}</p>
                </section>
                <section class="grid grid-cols-[auto,1fr] gap-4">
                    <div class="hidden md:flex flex-col gap-2">
                        <NuxtImg :src="info.coverImage.large" :alt="info.title.romaji" :title="info.title.romaji"
                            class="w-full h-60 object-cover rounded-sm" />
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
                            <p v-if="info.season" class="text-primary">{{ info.season === "WINTER" ? "Winter"
                                : info.season === "SPRING" ? "Spring"
                                    : info.season === "SUMMER" ? "Summer"
                                        : info.season === "FALL" ? "Fall"
                                            : info.season }}</p>
                            <p v-if="info.seasonYear" class="text-primary">{{ info.seasonYear }}</p>
                        </div>
                        <div class="flex flex-wrap items-center gap-1">
                            <p class="text-primary bg-secondary rounded-sm px-2">{{ info.episodes ?
                                info.episodes : "?" }} Episodes
                            </p>
                            <p v-if="info.averageScore" class="text-primary bg-secondary rounded-sm px-2">{{
                                info.averageScore }}%</p>
                            <p class="text-primary bg-secondary rounded-sm px-2">{{ info.format }}</p>
                            <p class="text-primary bg-secondary rounded-sm px-2">{{ info.status === "FINISHED" ? "Finished"
                                :
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
        </section>
        <section class="space-y-4">
            <h2 class="text-secondary text-2xl font-semibold">Episodes</h2>
            <div class="grid grid-cols-1 md:grid-cols-6 w-full overflow-y-auto gap-2 pr-2">
                <NuxtLink :to="`/e/${id}/${episode.id}`" v-for="episode in episodes" :title="episode.title"
                    class="bg-sub rounded-sm py-2 px-4">
                    <h6 class="text-secondary text-base font-semibold">Episode {{ episode.number }}</h6>
                    <p class="text-primary truncate">{{ episode.title }}</p>
                </NuxtLink>
            </div>
        </section>
        <DisqusComments :identifier="`/episode/${episode}`" />
    </section>
</template>

<script setup>
const { id, episode } = defineProps(["id", "episode"]);
const { data: stream } = await useFetch("/api/stream?id=" + episode);
const { data: info } = await useFetch("/api/info?id=" + id);
const { data: download } = await useFetch("/api/download?id=" + episode);
const { data: episodes } = await useFetch("/api/episodes?id=" + id);
</script>