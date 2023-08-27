<script lang="ts">
	export let href: string;
	export let width = 48;
	export let color = 'bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-800';
	export let className = '';
	export let onClick: () => void;
</script>

<a on:click={onClick} {href}>
	<div
		class="transition-transform ease-[cubic-bezier(.69,.58,.32,1.69)] hover:scale-105 p-2 m-2 text-lg rounded-2xl w-{width} {color} {className}"
	>
		<slot />
	</div>
</a>
