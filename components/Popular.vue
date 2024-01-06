<template>
    <section class="space-y-4">
        <section class="flex flex-col">
            <h1 class="text-secondary text-xl font-semibold">All Time Popular</h1>
            <p class="text-primary text-sm">Most Popular Anime</p>
        </section>
        <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
            <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1" v-for="item in popular">
                <NuxtImg :src="item.cover" class="w-full h-44 md:h-56 object-cover rounded-sm" />
                <h6 class="text-primary text-sm truncate">{{ item.title }}</h6>
                <div class="flex items-center gap-1">
                    <p class="text-primary bg-secondary text-sm rounded-sm px-1.5">{{ item.type }}</p>
                    <p class="text-secondary bg-primary text-sm rounded-sm px-1.5">{{ item.year }}</p>
                </div>
            </NuxtLink>
        </section>
    </section>
</template>

<script setup>
const { data: popular } = await useFetch("https://api.amvstr.me/api/v2/popular?limit=8", {
    transform: (popular) => {
        return popular.results.map((anime) => ({
            id: anime.id,
            title: anime.title.romaji,
            cover: anime.coverImage.large,
            type: anime.format,
            year: anime.seasonYear
        }));
    }
});
</script>