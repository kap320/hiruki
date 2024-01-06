<template>
    <Details :id="id" />
</template>  

<script setup>
const { id } = useRoute().params
</script>