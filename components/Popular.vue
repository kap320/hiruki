<template>
    <section class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-xl font-semibold">All Time Popular</h2>
            <p class="text-primary text-sm">Most Popular Anime</p>
        </section>
        <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
            <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1" v-for="item in data.results">
                <NuxtImg :src="item.coverImage.large" class="w-full h-44 md:h-56 object-cover rounded-sm" />
                <h2 class="text-primary text-sm truncate">{{ item.title.romaji }}</h2>
                <div class="flex items-center gap-1">
                    <p class="text-primary bg-secondary text-sm rounded-sm px-1.5">{{ item.format }}</p>
                    <p class="text-secondary bg-primary text-sm rounded-sm px-1.5">{{ item.seasonYear }}</p>
                </div>
            </NuxtLink>
        </section>
    </section>
</template>

<script setup>
const { data } = await useFetch("https://api.amvstr.me/api/v2/popular?limit=8");
</script>