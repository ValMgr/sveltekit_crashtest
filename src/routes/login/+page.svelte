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
	<p class="error">{error}</p>
{/if}


<style lang="scss">
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 2rem 0;
		width: 100%;

		input {
			padding: 0.5rem;
			border: 1px solid #ccc;
			border-radius: 4px;
			min-width: 250px;
		}

		button {
			padding: 0.5rem 1rem;
			color: rgb(255, 255, 255);
			border-radius: 4px;
			background-color: rgb(0, 0, 0);
			border: 1px solid rgb(0, 0, 0);
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			&:hover {
				background-color: rgb(255, 255, 255);
				color: rgb(0, 0, 0);
			}
		}
	}

	.error {
		text-align: center;
		width: 100%;
		color: rgb(255, 0, 0);
	}
</style>
