<script>
  import "../global.css";
</script>
<div class="bg-slate-800 h-screen text-white p-2">

  <nav class="p-2">
    <ul class="flex items-start gap-2 flex-col md:flex-row mb-4">
      <li class="hover:underline"><a href="/">home</a></li>
      <li class="hover:underline"><a href="/completed">completed</a></li>
    </ul>
  </nav>
  <slot />
</div>