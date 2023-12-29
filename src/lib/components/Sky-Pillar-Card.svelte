<script>
    import { base } from "$app/paths";
    import { Lightbox } from "svelte-lightbox";
    import SvelteMarkdown from "svelte-markdown";
    export let set;
</script>

<div
    class="p-2 px-4 bg-white/50 m-2 w-60 rounded flex flex-col align-center shadow-lg"
>
    <h2 class="w-fit text-center">{set.title}</h2>
    <Lightbox>
        <img class="w-60" src="{base}{set.img}" alt={set.title} />
    </Lightbox>
    <div class="mx-1 list-disc w-fit text-md">
        <SvelteMarkdown source={set.desc} />
    </div>
</div>
