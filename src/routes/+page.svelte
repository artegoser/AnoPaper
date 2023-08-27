<script>
	import Button from '$lib/components/buttons/Button.svelte';

	let count = 0;
	let text = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
	function handleClick() {
		count += 1;
		text = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
	}
</script>

<h1 class="text-3xl font-bold underline">AnoPaper!</h1>

<Button onClick={handleClick} href="#">{text}</Button>
