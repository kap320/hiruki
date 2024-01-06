<template>
    <section class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-2xl font-semibold">{{ information.stream.info.title }}</h2>
            <p class="text-primary">Episode {{ information.stream.info.episode }}</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <iframe :src="information.stream.plyr.main" frameborder="0" class="w-full h-auto md:h-96 rounded-sm" />
            <div class="flex flex-col gap-2">
                <h2 class="text-secondary text-2xl font-semibold">Episodes</h2>
                <div class="flex flex-col w-full h-80 overflow-y-auto gap-2 pr-2">
                    <NuxtLink :to="`/e/${id}/${episode.id}`" v-for="episode in information.episodes.episodes" class="bg-sub rounded-sm py-2 px-4">
                        <h6 class="text-secondary text-lg font-semibold">{{ episode.title }}</h6>
                        <p class="text-primary">Episode {{ episode.number }}</p>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
const { id, episode } = defineProps(["id", "episode"]);
const { data: information } = await useAsyncData("information", async () => {
    const [episodes, stream] = await Promise.all([
        $fetch("https://api.amvstr.me/api/v2/episode/" + id),
        $fetch("https://api.amvstr.me/api/v2/stream/" + episode)
    ]);

    return { episodes, stream }
});
</script>