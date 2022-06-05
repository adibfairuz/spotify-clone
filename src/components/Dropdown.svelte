<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faUser,
        faCaretDown,
        faCaretUp,
        faArrowUpRightFromSquare
    } from '@fortawesome/free-solid-svg-icons'
    import clickOutside from '../events/click_outside'

    export let show = false
    export let items = []

    const handleShow = () => {
        show = !show
    }
</script>

<div class="relative" use:clickOutside on:click_outside={() => (show = false)}>
    <div on:click={handleShow} class="bg-black hover:bg-dark-3 select-none rounded-2xl flex py-1 pl-1 pr-2 items-center cursor-pointer">
        <span class="rounded-full h-7 w-7 bg-dark-2 flex justify-center items-center">
            <Fa icon={faUser} class="text-white" size="15" />
        </span>
        <div class="text-white font-semibold text-sm flex items-center mx-3">
            Jhon Doe
        </div>
        {#if show}
            <Fa icon={faCaretUp} class="text-white" size="15" />
        {:else}
            <Fa icon={faCaretDown} class="text-white" size="15" />
        {/if}
    </div>
    {#if show}
        <div class="absolute top-10 right-0 bg-dark-3 shadow-sm shadow-black rounded-md w-48">
            <ul class="text-white py-1">
                {#each items as item}
                    <li class="hover:bg-dark-2 rounded-sm mx-1">
                        <a class="px-4 h-12 flex items-center justify-between" href={item.href}>
                            <span>{item.name}</span>
                            {#if item.showIcon}
                                <Fa icon={faArrowUpRightFromSquare} class="text-white" size="18" />
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>