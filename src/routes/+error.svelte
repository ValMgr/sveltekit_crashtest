<script lang="ts">
  import Link from '@/lib/components/Link.svelte';

</script>


<div class="container">
  <h1><span id="code">404 |</span> Page not found</h1>
  <Link href="/">Return to home</Link>
</div>

<style lang="scss">
	.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    z-index: -1;

    #code {
      font-size: 4rem;
      font-weight: 100;
    }
	}


</style>
