<template>
    <section v-if="title !== 'Top 10 Anime'" class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-xl font-semibold">{{ title }}</h2>
            <p class="text-primary text-sm">{{ description }}</p>
        </section>
        <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
            <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1" v-for="item in data">
                <NuxtImg :src="item.coverImage.large" :alt="item.title.romaji" :title="item.title.romaji" class="w-full h-44 ms:h-48 mm:h-60 ml:h-64 tb:h-32 lp:h-56 ll:h-60 4k:h-96 
                    object-cover rounded-sm hover:scale-95" />
                <h6 class="text-primary text-sm truncate">{{ item.title.romaji }}</h6>
                <div class="flex items-center gap-1">
                    <p class="text-primary bg-secondary text-sm rounded-sm px-1.5">{{ item.format }}</p>
                    <p class="text-secondary bg-primary text-sm rounded-sm px-1.5">{{ item.seasonYear }}</p>
                </div>
            </NuxtLink>
        </section>
    </section>
    <section v-if="title === 'Top 10 Anime'" class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-xl font-semibold">{{ title }}</h2>
            <p class="text-primary text-sm">{{ description }}</p>
        </section>
        <section class="grid grid-cols-1 w-full gap-2">
            <NuxtLink :to="`/i/${item.id}`" class="relative w-full space-y-1" v-for="(item, index) in data">
                <NuxtImg :src="item.bannerImage" :alt="item.title.romaji" :title="item.title.romaji"
                    class="w-full h-20 object-cover rounded-sm opacity-50" />
                <div class="absolute inset-0 px-2">
                    <button type="button" class="text-primary bg-secondary text-sm rounded-sm px-2">
                        #{{ index + 1 }}</button>
                    <h6 class="text-primary text-base font-semibold truncate">{{ item.title.romaji }}</h6>
                    <div class="flex items-center gap-2">
                        <button type="button" class="text-primary bg-secondary text-sm rounded-sm px-2">
                            {{ item.averageScore }}%</button>
                        <button type="button" class="text-primary bg-secondary text-sm rounded-sm px-2">
                            {{ item.format }}</button>
                        <button type="button" class="text-primary bg-secondary text-sm rounded-sm px-2">
                            {{ item.season }}</button>
                        <button type="button" class="text-primary bg-secondary text-sm rounded-sm px-2">
                            {{ item.seasonYear }}</button>
                    </div>
                </div>
            </NuxtLink>
        </section>
    </section>
</template>

<script setup>
const { title, description, data } = defineProps(["title", "description", "data"]);
</script>