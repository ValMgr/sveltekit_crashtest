<script lang="ts">
	import type { Person } from '@/lib/types';
	import Loader from '@/lib/components/Loader.svelte';

	export let data;

	const users: Promise<Person[]> = data.users;
  console.log(users);
</script>

{#await users}
	<Loader />
{:then users}
	<table>
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
			{#each users as user}
				<tr>
					<td>{user.firstname} {user.lastname}</td>
					<td>{user.email}</td>
					<td>{user.country}</td>
					<td>{user.formation}</td>
					<td>{user.year}</td>
					<td>{user.internship}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/await}

<style lang="scss">
	table {
		width: 100%;
	}
</style>
