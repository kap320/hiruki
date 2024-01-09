export default defineEventHandler(async (event) => {
    const { query } = getQuery(event);
    const { API } = useRuntimeConfig();
    return await $fetch(API + "/search/" + query);
});