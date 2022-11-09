<script lang="ts">
  import { session } from '@/lib/services/auth';

  const isLogged: boolean = !!$session;
</script>

<h1>Welcome to Who the fuck you are ?</h1>
<p>Powered with SvelteKit</p>
  
  {#if isLogged}
    <p>You are logged in</p>
  {:else}
    <p>You are not logged in</p>
  {/if}
