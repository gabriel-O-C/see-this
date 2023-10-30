<script lang="ts">
  import { Button, Form } from "$lib";
  import { fade, slide } from "svelte/transition";

  export let data;
</script>

<main class="flex flex-col items-center justify-center gap-4">
  <h1 class="text-2xl font-bold">Everything that I wanna you to see/read.</h1>

  <ul>
    {#if data.recommendations.length === 0}
      <p>You did everything!</p>
    {/if}

    {#each data.recommendations as recommendation (recommendation.id)}
      <Form method="post" style={"grid-cols-2"}>
        <input type="hidden" name="id" value={recommendation.id} />

        <li class="mb-2 capitalize" out:fade in:slide>
          {recommendation.title} - {recommendation.type}
        </li>
        <Button title="completed" />
      </Form>
    {/each}
  </ul>
</main>
