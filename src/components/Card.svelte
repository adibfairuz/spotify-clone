<script>
    export let data;
</script>

<div class="p-5 bg-[#181818] hover:bg-dark-3 shadow-sm shadow-black rounded-lg w-auto cursor-pointer">
    <img src={data.image} alt="card-img" />
    <div class="text-white font-bold text-base mt-3 overflow-hidden text-ellipsis whitespace-nowrap w-auto">{data.name}</div>
    <div class="text-dark-1 text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap w-auto">{data.publisher || data.description || data.artist}</div>
</div>