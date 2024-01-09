<template>
    <section class="space-y-8">
        <section class="flex flex-col">
            <h2 class="text-secondary text-2xl font-semibold">{{ data.stream.info.title }}</h2>
            <p class="text-primary">Episode {{ data.stream.info.episode }}</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div class="flex flex-col gap-2">
                <iframe :src="data.stream.plyr.default" allowfullscreen frameborder="0"
                    class="w-full h-auto md:h-96 rounded-sm" />
                <NuxtLink :to="data.download.link" target="_blank" external
                    class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                    Download Episode</NuxtLink>
            </div>
            <section class="space-y-4">
                <section class="grid grid-cols-[auto,1fr] gap-4">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-1">
                            <p v-if="data.info.season" class="text-primary">{{ data.info.season === "WINTER" ? "Winter"
                                : data.info.season === "SPRING" ? "Spring"
                                    : data.info.season === "SUMMER" ? "Summer"
                                        : data.info.season === "FALL" ? "Fall"
                                            : data.info.season }}</p>
                            <p v-if="data.info.seasonYear" class="text-primary">{{ data.info.seasonYear }}</p>
                        </div>
                        <div class="flex flex-wrap items-center gap-1">
                            <p :class="`text-primary ${data.info.episodes ? 'bg-secondary' : 'bg-error'} 
                            rounded-sm px-2`">{{ data.info.episodes ? data.info.episodes : "?" }} Episodes
                            </p>
                            <p v-if="data.info.averageScore" class="text-primary bg-secondary rounded-sm px-2">{{
                                data.info.averageScore }}%</p>
                            <p class="text-primary bg-secondary rounded-sm px-2">{{ data.info.format }}</p>
                            <p :class="`text-primary ${data.info.status === 'NOT_YET_RELEASED' ? 'bg-error' : 'bg-secondary'} 
                            rounded-sm px-2`">
                                {{ data.info.status === "FINISHED" ? "Finished"
                                    : data.info.status === "RELEASING" ? "Releasing"
                                        : data.info.status === "NOT_YET_RELEASED" ? "Not Yet Released"
                                            : data.info.status === "CANCELLED" ? "Cancelled"
                                                : data.info.status === "HIATUS" ? "Hiatsu"
                                                    : data.info.status }}</p>
                        </div>
                        <div class="flex flex-wrap items-center gap-1">
                            <div v-for="(genre, index) in data.info.genres" :key="index">
                                <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                            </div>
                        </div>
                        <div v-html="data.info.description" class="text-primary w-full h-48 overflow-y-auto pr-2" />
                        <section class="space-y-4">
                            <h2 class="text-secondary text-2xl font-semibold">Episodes</h2>
                            <select class="text-primary bg-sub w-full rounded-sm py-2 px-1" v-model="selected"
                                @change="getEpisode">
                                <option value="" selected disabled>Select an episode</option>
                                <option :value="episode.id" v-for="episode in data.episodes" :key="episode.number">
                                    Episode {{ episode.number }}
                                </option>
                            </select>
                        </section>
                    </div>
                </section>
                <section class="flex md:hidden justify-center items-center">
                    <div class="flex flex-col w-full gap-2">
                        <div class="grid grid-cols-2 gap-2">
                            <NuxtLink :to="`https://anilist.co/anime/${data.info.id}`" target="_blank" external
                                class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                                Anilist</NuxtLink>
                            <NuxtLink :to="`https://myanimelist.net/anime/${data.info.idMal}`" target="_blank" external
                                class="text-primary bg-secondary text-center rounded-sm py-1 hover:bg-opacity-75">
                                Mal</NuxtLink>
                        </div>
                    </div>
                </section>
            </section>
        </section>
        <DisqusComments :identifier="`/episode/${episode}`" />
    </section>
</template>

<script setup>
const { id, episode } = defineProps(["id", "episode"]);
const { data } = await useAsyncData("data", async () => {
    const [stream, info, download, episodes] = await Promise.all([
        $fetch("/api/stream?id=" + episode),
        $fetch("/api/info?id=" + id),
        $fetch("/api/download?id=" + episode),
        $fetch("/api/episodes?id=" + id)
    ]);
    return { stream, info, download, episodes }
});
const selected = ref("");
const router = useRouter();
const getEpisode = (event) => {
    const value = event.target.value
    if (value) {
        router.push(`/e/${id}/${value}`);
    }
}
</script>