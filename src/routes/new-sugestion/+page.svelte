<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Form from "$lib/components/Form.svelte";
  import { slide } from "svelte/transition";

  export let form;
</script>

<section
  class="grid items-center justify-center w-full grid-cols-1 place-items-center"
>
  <h1 class="mb-4 text-2xl">Add a new sugestion!</h1>
  <Form method="post" style={"grid-cols-1"}>
    <fieldset class="flex flex-col justify-center">
      <label for="sugestion" class="w-full text-left">Sugestion:</label>
      <input
        type="text"
        name="sugestion"
        placeholder="Enter a new sugestion"
        class={`w-full p-2 text-black rounded border ${
          form?.sugestionError ? "border-red-400" : ""
        }`}
      />
      {#if form?.sugestionError}
        <small class="text-red-400" in:slide>{form?.sugestionError}.</small>
      {/if}
    </fieldset>
    <fieldset class="flex flex-col justify-center">
      <select
        name="type"
        id="type"
        placeholder="select"
        class={`w-full p-2 text-black rounded border ${
          form?.sugestionTypeError ? "border-red-400" : ""
        }`}
      >
        <option value="" selected disabled
          >Select the type of the sugestion</option
        >
        <option value="movie">movie</option>
        <option value="book">book</option>
        <option value="anime">anime</option>
      </select>

      {#if form?.sugestionTypeError}
        <small class="text-red-400" in:slide>{form?.sugestionTypeError}.</small>
      {/if}
    </fieldset>
    <Button title="save" />
  </Form>
</section>
