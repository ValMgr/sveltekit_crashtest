<script lang='ts'>

  import Link from '@/lib/components/Link.svelte';
  import { session } from '@/lib/services/auth';

  $: isLogged = $session;
  
</script>

<header>
  <h1>LVA</h1>
  <nav>
    <Link href="/">Home</Link>
    <Link href="/directory">Directory</Link>
    <Link href="/about">About</Link>
    | 
    { #if isLogged }
      <Link href="/logout">Logout</Link>
    {:else}
      <Link href="/login">Login</Link>
    {/if}
  </nav>
</header>

<div class="container">
  <slot></slot>
</div>



<style lang='scss'>
  @use 'src/styles/global.scss';

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 0.5rem rgb(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  .container {
    width: 80%;
    margin: 0 auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

</style>