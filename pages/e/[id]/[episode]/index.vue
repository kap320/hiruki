<template>
    <Stream :id="id" :episode="episode" />
</template>

<script setup>
const { id, episode } = useRoute().params
</script>