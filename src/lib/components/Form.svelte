<script lang="ts">
  import { enhance } from "$app/forms";

  export let action: string
  export let method: string
</script>

<form action="{action}" method="{method}" use:enhance class="grid grid-cols-2 gap-4">
  <slot />
</form>