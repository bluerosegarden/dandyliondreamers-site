<script>
    import { base } from "$app/paths";
    export let data;
</script>

<h1 class="text-6xl">{data.title}</h1>
<div>
    <img class="h-96" src="{base}{data.mainImg}" />
</div>
<p class="bg-ritual-primary/25 p-4 rounded-lg">
    {data.body}
</p>
