<script>
    import CategoryCard from "../components/CategoryCard.svelte";
    import categories from '../mocks/categories.json';
</script>

<div class="mt-10">
    <h3 class="text-white text-2xl font-bold">Browse All</h3>
    <div class="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-6">
        {#each categories as category}
            <CategoryCard data={category} />
        {/each}
    </div>
</div>
