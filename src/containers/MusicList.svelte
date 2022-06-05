<script>
    import Card from "../components/Card.svelte";

    export let name;
    export let items;
</script>

<div class="mt-10">
    <div class="flex justify-between">
        <a href="/#">
            <h3 class="text-white text-2xl font-bold hover:underline">{name}</h3>
        </a>
        <a href="/#">
            <span class="uppercase hover:underline text-sm font-semibold text-dark-1">see all</span>
        </a>
    </div>
    <div class="grid gap-5 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 mt-6">
        {#each items as item}
            <Card data={item} />
        {/each}
    </div>
</div>
