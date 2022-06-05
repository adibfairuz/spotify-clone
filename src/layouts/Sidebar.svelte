<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faHouse,
        faSearch,
        faBook,
        faSquarePlus,
        faHeart
    } from '@fortawesome/free-solid-svg-icons'
    import { Link } from "svelte-navigator";
    import { useLocation } from "svelte-navigator";

    const location = useLocation()

    $: activeMenuId = $location.pathname

    const menus = [
        {
            id: 1,
            name: 'Home',
            icon: faHouse,
            pathname: '/'
        },
        {
            id: 2,
            name: 'Search',
            icon: faSearch,
            pathname: '/search'
        },
        {
            id: 3,
            name: 'Your Library',
            icon: faBook,
            pathname: '/#'
        }
    ]
</script>

<nav class="bg-black w-64 h-screen fixed">
    <div class="pl-8 pt-6">
        <img src="images/spotify-logo.png" class="h-10" alt="spotify-logo" />
        <ul class="mt-8">
            {#each menus as menu}
                <li class="mt-6">
                    <Link to={menu.pathname} class="{activeMenuId === menu.pathname ? 'text-white' : 'text-gray-400'}  hover:text-white hover:transition-all flex items-center font-semibold">
                        <Fa icon={menu.icon} class="mr-3" size="24" />
                        <span>{menu.name}</span>
                    </Link>
                </li>
            {/each}
        </ul>
        <ul class="mt-12">
            <li class="mt-6">
                <Link to="/" class="text-gray-400 hover:text-white hover:transition-all flex items-center font-semibold">
                    <Fa icon={faSquarePlus} class="mr-3" size="24" />
                    <span>Create Playlist</span>
                </Link>
            </li>
            <li class="mt-6">
                <Link to="/" class="text-gray-400 hover:text-white hover:transition-all flex items-center font-semibold">
                    <span class="flex items-center justify-center w-6 h-6 mr-3 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                        <Fa icon={faHeart} size="14" />
                    </span>
                    <span>Liked Songs</span>
                </Link>
            </li>
        </ul>
    </div>
    <div class="px-8">
        <hr class="my-6 border-gray-500" />
    </div>
</nav>