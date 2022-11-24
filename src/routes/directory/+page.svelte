<script lang="ts">
	import type { Person } from '@/lib/types';
	import SearchBar from '@/lib/components/SearchBar.svelte';

	export let data;
	const users: Person[] = data.users;

	let search: string = '';

	$: filteredUsers = users.filter((user) => {
		return (
			user.firstname.toLowerCase().includes(search.toLowerCase()) ||
			user.lastname.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase()) ||
			user.formation.toLowerCase().includes(search.toLowerCase()) ||
			user.internship.toLowerCase().includes(search.toLowerCase()) ||
			user.country.toLowerCase().includes(search.toLowerCase())
		);
	});
</script>

<SearchBar bind:search />

<table class="user_list">
	<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Country</th>
			<th>Formation</th>
			<th>Years</th>
			<th>Internship</th>
		</tr>
	</thead>
	<tbody>
		{#each filteredUsers as user}
			<tr>
				<td>{user.firstname} {user.lastname}</td>
				<td>{user.email}</td>
				<td>{user.country}</td>
				<td>{user.formation}</td>
				<td>{user.year}</td>
				<td>{user.internship}</td>
				<td><a class="see_more" href="/directory/users/{user.id}">+</a></td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	.user_list {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0 10px;
		margin: 2rem 0;

		tr {
			td:not(:last-child) {
				padding: 0.5rem;
				border: 1px solid #ccc;
				border-radius: 4px;
				text-align: center;
			}

			td:last-child {
				padding: 0.5rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			&:nth-child(even) td:not(:last-child) {
				background-color: #f2f2f2;
			}
		}
	}

	.see_more {
		padding: 0.5rem 1rem;
		color: rgb(255, 255, 255);
		border-radius: 4px;
		background-color: rgb(0, 0, 0);
		border: 1px solid rgb(0, 0, 0);
		text-decoration: none;
	}
</style>
