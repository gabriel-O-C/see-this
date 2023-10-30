<script lang="ts">
  import { enhance } from "$app/forms";

  export let action: string = "";
  export let method: string;
  export let style: string = "";
</script>

<form {action} {method} use:enhance class="grid gap-4 {style}">
  <slot />
</form>
