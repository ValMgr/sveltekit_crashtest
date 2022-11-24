<script lang="ts">
	export let search: string;
</script>

<input bind:value="{search}" type="search" placeholder="Search..." />

<style lang="scss">
	input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
	}
</style>
