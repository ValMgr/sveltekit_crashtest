<script lang="ts">
	import type { Person } from '@/lib/types';

	export let data;

	const user: Person = data.user;
</script>

<a class="back" href="/directory">Back to list</a>

<div class="row">
	<div class="personal_card card">
		<h1>{user.firstname} {user.lastname}</h1>
    <div>
      <span>Gender: </span>
      <p>{user.gender}</p>
    </div>
		<div>
			<span>Email: </span>
			<p>{user.email}</p>
		</div>
		<div>
			<span>Country: </span>
			<p>{user.country}</p>
		</div>
	</div>

	<div class="school_card card">
		<h2>School</h2>
		<div>
			<span>Formation: </span>
			<p>{user.formation}</p>
		</div>
		<div>
			<span>Year: </span>
			<p>{user.year}</p>
		</div>
		<div>
			<span>Internship: </span>
			<p>{user.internship}</p>
		</div>
	</div>
</div>

<style lang="scss">
	.back {
		padding: 0.5rem 1rem;
		color: rgb(255, 255, 255);
		border-radius: 4px;
		background-color: rgb(0, 0, 0);
		border: 1px solid rgb(0, 0, 0);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		width: fit-content;
		text-decoration: none;

		&:hover {
			background-color: rgb(255, 255, 255);
			color: rgb(0, 0, 0);
		}
	}

	.row {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.card {
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin: 1rem 0;
		flex-grow: 1;

		h1 {
			font-weight: bold;
			font-size: 1.5rem;
		}

    h2 {
      font-weight: bold;
      font-size: 1.2rem;
    }

		> div {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin: 1rem 0;

			span {
				text-decoration: underline;
			}
		}
	}
</style>
