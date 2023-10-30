<script>
  import { onNavigate } from "$app/navigation";
  import "../global.css";

  onNavigate((navigation) => {
    //@ts-expect-error this api types doesnt exist yet
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      //@ts-expect-error this api types doesnt exist yet
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="h-screen p-2 text-white bg-slate-800">
  <nav class="p-2">
    <ul class="flex flex-col items-start gap-2 mb-4 md:flex-row">
      <li class="hover:underline"><a href="/">home</a></li>
      <li class="hover:underline"><a href="/completed">completed</a></li>
      <li class="hover:underline">
        <a href="/new-sugestion">new sugestion</a>
      </li>
    </ul>
  </nav>
  <slot />
</div>
