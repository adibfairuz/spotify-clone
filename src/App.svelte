<script>
	import { Router, Route } from "svelte-navigator";
	import Home from './pages/Home.svelte';
	import Search from './pages/Search.svelte';

	let isDesktop = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 920;

</script>

<main>
	{#if isDesktop}
		<Router>
			<Route path="/" component={Home} let:location />
			<Route path="/search" component={Search} let:location />
		</Router>
	{:else}
		<div>Only support the desktop size</div>
	{/if}
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>