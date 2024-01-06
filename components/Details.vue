<template>
    <section v-show="data" class="space-y-4">
        <section v-show="data.bannerImage" class="flex justify-center items-center">
            <NuxtImg :src="data.bannerImage" class="w-full h-20 md:h-40 object-cover rounded-sm opacity-75" />
        </section>
        <section class="flex flex-col">
            <h2 v-show="data.title.romaji" class="text-secondary text-2xl font-semibold">{{ data.title?.romaji }}</h2>
            <p v-show="data.title.native" class="text-primary">{{ data.title.native }}</p>
        </section>
        <section class="grid grid-cols-[auto,1fr] gap-4">
            <div class="hidden md:flex">
                <NuxtImg v-show="data.coverImage && data.coverImage.large" :src="data.coverImage.large"
                    class="w-full h-72 object-cover rounded-sm" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-1">
                    <p v-show="data.season" class="text-primary">{{ data.season }}</p>
                    <p v-show="data.year" class="text-primary">{{ data.year }}</p>
                </div>
                <div class="flex flex-wrap items-center gap-1">
                    <p v-show="data.episodes" class="text-primary bg-secondary rounded-sm px-2">{{ data.episodes }} Episodes
                    </p>
                    <p v-show="data.score && data.score.averageScore" class="text-primary bg-secondary rounded-sm px-2">{{
                        data.score.averageScore }}%</p>
                    <p v-show="data.format" class="text-primary bg-secondary rounded-sm px-2">{{ data.format }}</p>
                    <p v-show="data.status" class="text-primary bg-secondary rounded-sm px-2">{{ data.status }}</p>
                </div>
                <div class="flex flex-wrap items-center gap-1">
                    <div v-show="data.genres" v-for="(genre, index) in data.genres" :key="index">
                        <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                    </div>
                </div>
                <div v-show="data.description" v-html="data.description"
                    class="text-primary w-full h-48 overflow-y-auto pr-2" />
            </div>
        </section>
    </section>
</template>

<script setup>
const { id } = defineProps(["id"]);
const { data } = await useFetch("https://api.amvstr.me/api/v2/info/" + id, { key: id });
</script>