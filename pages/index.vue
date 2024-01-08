<template>
    <Featured :data="data.featured" />
    <section class="space-y-4">
        <Cards title="Trending Now" description="Currently Trending Anime" :data="data.trending" />
        <Cards title="All Time Popular" description="Most Popular Anime" :data="data.popular" />
        <Cards title="Upcoming Next Season" description="Upcoming Anime" :data="data.upcoming" />
        <Cards title="Top 10 Anime" description="Top High Rated Anime" :data="data.top" />
    </section>
</template>

<script setup>
const { data } = await useAsyncData("data", async () => {
    const [featured, trending, popular, upcoming, top] = await Promise.all([
        $fetch("/api/featured"),
        $fetch("/api/trending"),
        $fetch("/api/popular"),
        $fetch("/api/upcoming"),
        $fetch("/api/top")
    ]);
    return { featured, trending, popular, upcoming, top }
});
</script>