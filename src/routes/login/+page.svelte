<script lang="ts">
	import { authenticate } from '@/lib/services/auth';
	import { goto } from '$app/navigation';

	let email: string = '';
	let password: string = '';

	$: error = '';

	const handleLogin = async () => {
		const successLoggedIn: boolean = await authenticate(email, password);

		if (!successLoggedIn) {
			error = 'Invalid credentials';
			return;
		}

		goto('/', { replaceState: true });
	};
</script>

<div class="form">
	<input type="text" name="username" placeholder="Email" bind:value="{email}" />
	<input type="password" name="password" placeholder="Password" bind:value="{password}" />
	<button type="submit" on:click="{handleLogin}">Login</button>
</div>

{#if error}
	<p>{error}</p>
{/if}
