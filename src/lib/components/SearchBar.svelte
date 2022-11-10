<script lang="ts">

export let search: string;

</script>


<input bind:value="{search}" type="search" placeholder="Search..." >



<style lang="scss">

  input {
    width: 100%;
    margin-bottom: 2rem;
    padding: .5rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

</style>