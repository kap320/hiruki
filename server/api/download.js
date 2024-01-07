export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    const { API } = useRuntimeConfig();
    return await $fetch(API + "/download/" + id);
});