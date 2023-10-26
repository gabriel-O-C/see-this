<script lang="ts">
  import { Button, Form } from "$lib";
  import { fade } from 'svelte/transition';

  export let data
</script>

<main class="flex items-center justify-center flex-col gap-4">
  <h1 class="text-2xl font-bold">Everything that I wanna you to see/read.</h1>
  
  <ul>
    {#if data.recommendations.length === 0}
      <p>You did everything!</p>
    {/if}
    
    {#each data.recommendations as recommendation (recommendation.title)}
      <Form action="?/markAsCompleted" method="post">
        <input type="hidden" name="recommendation" value="{recommendation.title}" />
        <li class="capitalize mb-2" out:fade>{recommendation.title} - {recommendation.type}</li>
        <Button title="completed" />
      </Form>
    {/each}
    </ul>
  
</main>