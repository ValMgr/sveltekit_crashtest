<script lang="ts">
	import type { Person } from '@/lib/types';

	export let data;

  const user: Person = data.user;

</script>


<a href="/directory">Back to list</a>

<div>
  <h1>{user.firstname} {user.lastname}</h1>
  <p>{user.email}</p>
  <p>{user.country}</p>
  <p>{user.formation}</p>
  <p>{user.year}</p>
  <p>{user.internship}</p>
</div>