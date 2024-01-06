<template>
    <section class="space-y-4">
        <section v-if="info.bannerImage" class="flex justify-center items-center">
            <NuxtImg :src="info.bannerImage" class="w-full h-20 md:h-40 object-cover rounded-sm opacity-75" />
        </section>
        <section class="flex flex-col">
            <h2 v-if="info.title.romaji" class="text-secondary text-2xl font-semibold">{{ info.title.romaji }}</h2>
            <p v-if="info.title.native" class="text-primary">{{ info.title.native }}</p>
        </section>
        <section class="grid grid-cols-[auto,1fr] gap-4">
            <div class="hidden md:flex">
                <NuxtImg :src="info.coverImage.large" class="w-full h-72 object-cover rounded-sm" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-1">
                    <p v-if="info.season" class="text-primary">{{ info.season }}</p>
                    <p v-if="info.year" class="text-primary">{{ info.year }}</p>
                </div>
                <div class="flex flex-wrap items-center gap-1">
                    <p v-if="info.episodes" class="text-primary bg-secondary rounded-sm px-2">{{ info.episodes }} Episodes
                    </p>
                    <p v-if="info.score.averageScore" class="text-primary bg-secondary rounded-sm px-2">{{
                        info.score.averageScore }}%</p>
                    <p v-if="info.format" class="text-primary bg-secondary rounded-sm px-2">{{ info.format }}</p>
                    <p v-if="info.status" class="text-primary bg-secondary rounded-sm px-2">{{ info.status }}</p>
                </div>
                <div class="flex flex-wrap items-center gap-1">
                    <div v-for="genre in info.genres">
                        <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                    </div>
                </div>
                <div v-html="info.description" class="text-primary w-full h-48 overflow-y-auto pr-2" />
            </div>
        </section>
        <Recommendations :id="id" />
    </section>
</template>

<script setup>
const { id } = useRoute().params
const { data: info } = await useFetch("https://api.amvstr.me/api/v2/info/" + id, { key: id });
</script>