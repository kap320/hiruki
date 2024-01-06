<template>
    <section class="space-y-4">
        <section class="flex flex-col">
            <h2 class="text-secondary text-xl font-semibold">Trending Now</h2>
            <p class="text-primary text-sm">Currently Trending Anime</p>
        </section>
        <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
            <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1" v-for="item in trending">
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
const { data: trending } = await useFetch("https://api.amvstr.me/api/v2/trending?limit=8", {
    transform: (trending) => {
        return trending.results.map((anime) => ({
            id: anime.id,
            title: anime.title.romaji,
            cover: anime.coverImage.large,
            type: anime.format,
            year: anime.seasonYear
        }));
    }
});
</script>