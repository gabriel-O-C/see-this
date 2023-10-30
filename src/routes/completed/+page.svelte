<script lang="ts">
  import { Button, Form } from "$lib";
  import { fade } from "svelte/transition";

  export let data;
</script>

<main class="flex flex-col items-center justify-center gap-4">
  <h1 class="text-2xl font-bold">Stuff you already completed</h1>

  <ul>
    {#each data.recommendations as recommendation (recommendation.id)}
      <Form method="post" style={"grid-cols-2"}>
        <input type="hidden" name="id" value={recommendation.id} />

        <li class="mb-2 line-through capitalize" out:fade>
          {recommendation.title} - {recommendation.type}
        </li>
        <Button title="Do It again!" />
      </Form>
    {/each}
  </ul>
</main>
