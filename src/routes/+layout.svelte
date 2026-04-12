<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav>
	<a href={resolve('/')}>Home</a>
	<a href={resolve('/demo')}>Demo</a>
	<a href={resolve('/demo/playwright')}>Demo/Playwright</a>
</nav>

{@render children()}
