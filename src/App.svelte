<script>
	import { Router, Route } from "svelte-navigator";
	import Home from './pages/Home.svelte';
	import Search from './pages/Search.svelte';
</script>

<main>
	<Router>
		<Route path="/" component={Home} let:location />
		<Route path="/search" component={Search} let:location />
	</Router>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>