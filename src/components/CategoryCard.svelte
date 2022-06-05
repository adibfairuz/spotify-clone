<script>
    import getDarkColor from "../utils/getDarkColor";

    export let data;
</script>

<div style="background: {getDarkColor()}" class="relative overflow-hidden p-5 before:pb-[100%] before:block shadow-sm shadow-black rounded-lg w-auto cursor-pointer">
    <div class="absolute inset-0">
        <img class="w-24 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" src={data.image} alt={data.name} />
        <div class="text-white font-bold mt-3 px-3 text-2xl">{data.name}</div>
    </div>
</div>