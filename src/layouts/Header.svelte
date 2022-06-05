<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faChevronLeft,
        faChevronRight,
        faSearch
    } from '@fortawesome/free-solid-svg-icons'
    import Dropdown from '../components/Dropdown.svelte';
    import { onMount } from 'svelte';

    export let searchable = false;

    let header;
    let fixedHeader;

    const dropdownItems = [
        {
            name: 'Account',
            href: '/#',
            showIcon: true
        },
        {
            name: 'Profile',
            href: '/#'
        },
        {
            name: 'Logout',
            href: '/#'
        }
    ];

    onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver(entries => {
                const intersecting = entries[0].isIntersecting;
                if (!intersecting) {
                    fixedHeader.classList.add('bg-black');
                    fixedHeader.classList.remove('bg-transparent');
                } else {
                    fixedHeader.classList.add('bg-transparent');
                    fixedHeader.classList.remove('bg-black');
                }
            })

            observer.observe(header)
            return () => observer.unobserve(header)
        }
    })
</script>

<header class="relative h-8" bind:this={header}>
    <div bind:this={fixedHeader} class="flex justify-between transition-colors px-8 py-3 fixed z-10 right-0 top-0 w-[calc(100%-16rem)]">
        <div class="flex">
            <div class="flex">
                <div class="cursor-pointer rounded-full h-9 w-9 text-dark-1 hover:text-white bg-black flex justify-center items-center mr-6">
                    <Fa icon={faChevronLeft} size="22" />
                </div>
                <div class="cursor-pointer rounded-full h-9 w-9 text-dark-1 hover:text-white bg-black flex justify-center items-center">
                    <Fa icon={faChevronRight} size="22" />
                </div>
            </div>
            {#if searchable}
                <div class="mr-auto ml-4 relative">
                    <label for="search" class="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                        <Fa icon={faSearch} class="text-dark" size="18" />
                    </label>
                    <input type="text" id="search" class="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]" placeholder="Artists, songs, or podcasts">
                </div>
            {/if}
        </div>
        <div>
            <Dropdown items={dropdownItems} />
        </div>
    </div>
</header>