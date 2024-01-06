<template>
    <section class="space-y-4">
        <section class="space-y-4">
            <section v-if="information.info.bannerImage" class="flex justify-center items-center">
                <NuxtImg :src="information.info.bannerImage"
                    class="w-full h-20 md:h-40 object-cover rounded-sm opacity-75" />
            </section>
            <section class="flex flex-col">
                <h2 class="text-secondary text-2xl font-semibold">{{ information.info.title.romaji }}</h2>
                <p class="text-primary">{{ information.info.title.native }}</p>
            </section>
            <section class="grid grid-cols-[auto,1fr] gap-4">
                <div class="hidden md:flex">
                    <NuxtImg :src="information.info.coverImage.large" class="w-full h-72 object-cover rounded-sm" />
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-1">
                        <p class="text-primary">{{ information.info.season }}</p>
                        <p class="text-primary">{{ information.info.year }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ information.info.episodes ?
                            information.info.episodes : "?" }} Episodes
                        </p>
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ information.info.score.averageScore }}%</p>
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ information.info.format }}</p>
                        <p class="text-primary bg-secondary rounded-sm px-2">{{ information.info.status }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-1">
                        <div v-for="(genre, index) in information.info.genres" :key="index">
                            <p class="text-secondary bg-primary rounded-sm px-2">{{ genre }}</p>
                        </div>
                    </div>
                    <div v-html="information.info.description" class="text-primary w-full h-48 overflow-y-auto pr-2" />
                </div>
            </section>
        </section>
        <section class="space-y-4">
            <section class="flex flex-col">
                <h2 class="text-secondary text-xl font-semibold">Recommendations</h2>
                <p class="text-primary text-sm">Recommended For You</p>
            </section>
            <section class="grid grid-cols-2 md:grid-cols-8 gap-2">
                <NuxtLink :to="`/i/${item.id}`" class="w-full space-y-1"
                    v-for="item in information.recommendations.results.slice(0, 8)">
                    <NuxtImg :src="item.coverImage.large" class="w-full h-44 md:h-56 object-cover rounded-sm" />
                    <h6 class="text-primary text-sm truncate">{{ item.title.romaji }}</h6>
                    <div class="flex items-center gap-1">
                        <p class="text-primary bg-secondary text-sm rounded-sm px-1.5">{{ item.format }}</p>
                        <p class="text-secondary bg-primary text-sm rounded-sm px-1.5">{{ item.status }}</p>
                    </div>
                </NuxtLink>
            </section>
        </section>
    </section>
</template>

<script setup>
const { id } = defineProps(["id"]);
const { data: information } = await useAsyncData("information", async () => {
    const [info, recommendations] = await Promise.all([
        $fetch("https://api.amvstr.me/api/v2/info/" + id),
        $fetch("https://api.amvstr.me/api/v2/recommendations/" + id)
    ]);

    return { info, recommendations }
});
</script>