<template>
    <Cards title="Search Result" :description="`Query: ${query}`" :data="data" />
</template>

<script setup>
const { query } = useRoute().params
const { data } = await useFetch("/api/search?query=" + query);
</script>