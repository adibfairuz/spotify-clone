<script>
    import MusicList from "../containers/MusicList.svelte";
    import Page from "../layouts/Page.svelte";
    import musics from '../mocks/musics.json'

</script>

<Page>
    {#each musics as music}
        <MusicList name={music.name} items={music.items} />
    {/each}
</Page>