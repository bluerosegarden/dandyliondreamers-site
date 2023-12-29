<script>
    import { base } from "$app/paths";
    export let data;
</script>

<h1 class="text-5xl sm:text-6xl text-center">{data.title}</h1>
<div>
    <img class="max-h-96" src="{base}{data.mainImg}" />
</div>
<p class="bg-ritual-primary/25 p-4 rounded-lg">
    {data.body}
</p>
