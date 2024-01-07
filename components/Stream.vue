<template>
    <section class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-2xl font-semibold">{{ stream.info.title }}</h2>
            <p class="text-primary">Episode {{ stream.info.episode }}</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <iframe :src="stream.plyr.default" frameborder="0" class="w-full h-auto md:h-96 rounded-sm" />
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
    </section>
</template>

<script setup>
const { id, episode } = defineProps(["id", "episode"]);
const { data: stream } = await useFetch("/api/stream?id=" + episode);
const { data: episodes } = await useFetch("/api/episodes?id=" + id);
console.log(episodes.value);
</script>