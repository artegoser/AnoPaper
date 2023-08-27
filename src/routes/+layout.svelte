<script>
	import '../app.css';
	import Menu from '$lib/components/Menu.svelte';
</script>

<div class="text-black dark:text-white flex flex-col">
	<Menu />
	<slot />
</div>
