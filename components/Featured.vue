<template>
    <section class="hidden md:flex flex-row justify-center items-center gap-4 space-y-4 my-8">
        <div class="flex flex-col w-[800px] gap-2">
            <h2 class="text-secondary text-2xl font-semibold">{{ data.title.romaji }}</h2>
            <div class="flex items-center gap-2">
                <h6 class="text-primary">
                    {{ data.season === "WINTER" ? "Winter"
                        : data.season === "SPRING" ? "Spring"
                            : data.season === "SUMMER" ? "Summer"
                                : data.season === "FALL" ? "Fall"
                                    : data.season }}
                </h6>
                <h6 class="text-primary">{{ data.seasonYear }}</h6>
            </div>
            <div class="flex flex-wrap items-center gap-1">
                <div v-for="(genre, index) in data.genres" :key="index">
                    <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                </div>
            </div>
            <p v-html="data.description" class="text-primary w-[800px] h-48 overflow-y-auto pr-2" />
            <div class="my-2">
                <NuxtLink :to="`/i/${data.id}`"
                    class="text-primary bg-secondary text-center rounded-sm uppercase py-2 px-4 hover:bg-opacity-75">
                    Start Watching</NuxtLink>
            </div>
        </div>
        <div>
            <NuxtImg :src="data.coverImage.large" :alt="data.title.romaji" :title="data.title.romaji"
                class="w-72 h-[420px] object-cover rounded-md" />
        </div>
    </section>
</template>

<script setup>
const { data } = defineProps(["data"]);
</script>