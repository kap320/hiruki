<template>
    <section class="space-y-4">
        <div class="flex flex-col justify-center items-center h-screen gap-2">
            <div class="flex flex-col items-center">
                <h1 class="text-error text-7xl font-bold uppercase">Error</h1>
                <p class="text-primary text-lg">Something Went Wrong!</p>
            </div>
            <NuxtLink to="/" class="text-primary bg-error rounded-sm py-1 px-4 hover:bg-opacity-75">Go Back Home</NuxtLink>
        </div>
    </section>
</template>