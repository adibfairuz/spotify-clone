<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faCirclePause,
        faForwardStep,
        faBackwardStep,
        faShuffle,
        faRepeat,
        faList,
        faMobileScreen,
        faVolumeHigh
    } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="flex h-24 w-full bg-dark border-t border-t-dark-3 fixed bottom-0 left-0">
    <div class="flex-1">

    </div>
    <div class="flex-1 flex justify-center items-center flex-col">
        <div class="flex justify-center items-center">
            <Fa icon={faShuffle} class="text-dark-2 mr-6" size="18" />
            <Fa icon={faBackwardStep} class="text-dark-2" size="20" />
            <Fa icon={faCirclePause} class="text-dark-2 mx-6" size="32" />
            <Fa icon={faForwardStep} class="text-dark-2" size="20" />
            <Fa icon={faRepeat} class="text-dark-2 ml-6" size="18" />
        </div>
        <div class="w-full flex mt-4">
            <span class="text-dark-1 text-xs mr-2">0:00</span>
            <div class="h-1 w-full rounded-md self-center bg-dark-2" />
            <span class="text-dark-1 text-xs ml-2">0:00</span>
        </div>
    </div>
    <div class="flex-1 flex justify-end items-center pr-6">
        <Fa icon={faList} class="text-dark-1 mr-6" size="16" />
        <Fa icon={faMobileScreen} class="text-dark-1 mr-6" size="16" />
        <Fa icon={faVolumeHigh} class="text-dark-1 mr-2" size="16" />
        <div class="h-1 w-24 rounded-md self-center bg-white" />
    </div>
</div>