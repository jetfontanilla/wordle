<script lang="ts">
	import logo from './svelte-logo.svg';
	import github from './github-light.png';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
		<a href="https://github.com/jetfontanilla/wordle">
			<img src={github} alt="View on GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		display: flex;
		height: 3em;
		gap: 0.5em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
