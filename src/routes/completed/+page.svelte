<script lang="ts">
  import { Button, Form } from "$lib";
  import { fade } from "svelte/transition";

  export let data;
</script>

<main class="flex items-center justify-center flex-col gap-4">
  <h1 class="text-2xl font-bold">Stuff you already completed</h1>
  
  <ul>
    {#each data.recommendations as recommendation (recommendation.title)}
    <Form action="?/markAsCompleted" method="post">
      <input type="hidden" name="recommendation" value="{recommendation.title}" />
        <li class="capitalize mb-2 line-through" out:fade>{recommendation.title} - {recommendation.type}</li>
        <Button title="Do It again!" />
      </Form>
      {/each}
    </ul>
  
</main>