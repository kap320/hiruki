export default defineEventHandler(async () => {
    const { API } = useRuntimeConfig();
    return await $fetch(API + "/upcoming");
});