<template>
    <section class="flex justify-between items-center p-4">
        <p class="text-primary">©{{ currentYear }}. mentalz4k</p>
        <div class="flex items-center gap-2">
            <NuxtLink to="https://tiktok.com/mentalz" target="_blank" external
                class="text-primary bg-secondary text-xl rounded-sm pb-1 px-1.5 hover:bg-opacity-75">
                <Icon name="eva:github-fill" />
            </NuxtLink>
            <NuxtLink to="/dmca" class="text-primary bg-secondary text-xl rounded-sm pb-1 px-1.5 hover:bg-opacity-75">
                <Icon name="fa-solid:dharmachakra" />
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
