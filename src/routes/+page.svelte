<script lang="ts">
	import { session } from '@/lib/services/auth';

	const isLogged: boolean = !!$session;
</script>

<h1>Welcome to LVA</h1>
<p>Powered with SvelteKit</p>

<hr />
<p>
	Auth status:
	{#if isLogged}
		You are logged in
	{:else}
		You are not logged in
	{/if}
</p>
