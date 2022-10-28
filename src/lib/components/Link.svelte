<script lang="ts">
	export let href: string = '#';
</script>

<a href="{href}">
  <slot>
    Unknown Link
  </slot>
</a>


<style lang='scss'>
  a {
    color: rgb(0, 92, 163);
    text-decoration: none;
  }

  a:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: rgb(0, 92, 163);
    transition: width 0.3s;
  }

  a:hover:after {
    width: 100%;
  }
</style>