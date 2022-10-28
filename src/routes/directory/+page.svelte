<script lang="ts">
	import type { Person } from '@/lib/types';

	export let data;

  const users: Person[] = data.users;

</script>


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