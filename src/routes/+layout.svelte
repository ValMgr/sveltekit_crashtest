<script lang='ts'>

  import Link from '@/lib/components/Link.svelte';
  
</script>

<header>
  <h1>Who the fuck are you ?</h1>
  <nav>
    <Link href="/">Home</Link>
    <Link href="/directory">Directory</Link>
    <Link href="/calendar">Calendar</Link>
    <Link href="/about">About</Link>
    | 
    <Link href="/login">Login</Link>
  </nav>
</header>

<div class="container">
  <slot></slot>
</div>



<style lang='scss'>
  @use 'src/styles/global.scss';

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
  }

</style>