<script>
    import { Lightbox } from "svelte-lightbox";
    /**
     * @type {{ images: any; title: any; desc: any; }}
     */
    export let set;
    const images = set.images;
</script>

<div class="p-8 bg-ritual-secondary flex flex-row flex-wrap w-11/12 rounded">
    <div class="w-1/2 h-20">
        <h2 class="text-4xl text-center">
            {set.title}
        </h2>
        <p>{set.desc}</p>
    </div>
    <div class="w-1/2 flex flex-row flex-wrap max-h-96">
        {#each images as image}
            <Lightbox>
                <img
                    class="max-h-44 w-auto bg-ritual-faded p-2"
                    src={image.img}
                />
            </Lightbox>
        {/each}
    </div>
</div>
