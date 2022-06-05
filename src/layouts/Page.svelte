<script>
    import Header from "./Header.svelte";
    import MediaPlayer from "./MediaPlayer.svelte";
    import Sidebar from "./Sidebar.svelte";

    export let searchable = false
</script>

<div class="flex">
    <Sidebar />
    <Header searchable={searchable} />
    <div class="w-full flex justify-end">
        <div class="w-[calc(100%-16rem)]">
            <div class="bg-dark w-full min-h-screen px-8 pt-16 pb-40">
                <slot />
            </div>
            <MediaPlayer />
        </div>
    </div>
</div>