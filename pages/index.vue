<template>
    <section class="space-y-4">
        <Cards title="Trending Now" description="Currently Trending Anime" :data="trending" />
        <Cards title="All Time Popular" description="Most Popular Anime" :data="popular" />
        <Cards title="Upcoming Next Season" description="Upcoming Anime" :data="upcoming" />
        <Top title="Top 10 Anime" description="Top High Rated Anime" :data="top" />
    </section>
</template>

<script setup>
const { data: trending } = await useFetch("/api/trending");
const { data: popular } = await useFetch("/api/popular");
const { data: upcoming } = await useFetch("/api/upcoming");
const { data: top } = await useFetch("/api/top");
</script>