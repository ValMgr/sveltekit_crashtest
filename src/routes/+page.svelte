<script lang="ts">
	import { session } from '@/lib/services/auth';

	$: isLogged = !!$session;
</script>

<h2>Welcome to LVA</h2>
<p>
	This is a POC to experiment SvelteKit. <br />
	Goal is to create a simple app to manage student lists.
</p>
<p>Powered with SvelteKit</p>

<hr />

<h5>Basic features:</h5>
<ul>
	<li>- Basic auth system</li>
	<li>- List student from JSON file</li>
	<li>- Searchbar to find student by any field</li>
</ul>

<p></p>

<hr />
<p>
	Auth status:
	{#if isLogged}
		<span style:color="{'green'}"> You are logged in</span>
	{:else}
		<span style:color="{'red'}"> You are not logged in</span>
	{/if}
</p>

<style>
	h2 {
		font-size: 1.8rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}

	h5 {
		font-size: 1.1rem;
		margin-bottom: 1rem;
		text-decoration: underline;
	}

	hr {
		margin: 2rem 0;
	}

</style>
