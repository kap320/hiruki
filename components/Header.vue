<template>
    <section class="flex justify-between items-center p-4">
        <NuxtLink to="/">
            <h1 class="text-secondary text-4xl font-bold">hiruki</h1>
        </NuxtLink>
        <button type="button" @click="toggle = !toggle"
            class="text-primary bg-secondary text-xl rounded-sm pb-1 px-1.5 hover:bg-opacity-75">
            <Icon name="heroicons-solid:magnifying-glass" />
        </button>
        <div v-show="toggle" class="absolute flex items-center right-4 top-16 gap-2">
            <input type="text" placeholder="Search" @keypress.enter="getSearch" v-model.trim="query" 
            class="text-primary bg-sub border-primary border rounded-sm outline-none 
                py-1 px-2 focus:border-secondary" />
        </div>
    </section>
</template>

<script setup>
const router = useRouter();
const toggle = ref(false);
const query = ref("");

const getSearch = () => {
    if (query.value !== "") {
        router.push(`/search/${query.value}`);
    }
};
</script>