<script>
    import { Lightbox } from "svelte-lightbox";
    /**
     * @type {{ images: any; title: any; desc: any; link: any;}}
     */
    export let set;
    const images = set.images;
</script>

{#if set.link}
    <h2
        class="group text-2xl border-b-4 border-ritual-primary m-2 hover:border-ritual-accent"
    >
        <a class="group-hover:text-ritual-accent" href={set.link}>
            {set.title}
        </a>
    </h2>
{:else}
    <h2 class="text-2xl">
        {set.title}
    </h2>
{/if}

<div
    class="p-8 bg-ritual-primary/25 flex flex-row flex-wrap xl:w-6/12 w-11/12 rounded"
>
    <div class="flex flex-row flex-wrap w-full justify-center">
        {#each images as image}
            <div class="relative group">
                {#if image.title}
                    <span
                        class="ease-in duration-300 opacity-0 group-hover:opacity-100 absolute top-0 right-0 bg-ritual-faded-accent p-1"
                        >{image.title}</span
                    >
                {/if}
                {#if image.link}
                    <Lightbox
                        description="{image.desc} <a href={image.link} class='text-ritual-secondary'>(link)</a>"
                    >
                        <img
                            class="max-h-44 w-auto bg-ritual-faded p-2"
                            src={image.img}
                        />
                    </Lightbox>
                {:else}
                    <Lightbox description={image.desc}>
                        <img
                            class="max-h-64 w-auto bg-ritual-faded p-2"
                            src={image.img}
                        />
                    </Lightbox>
                {/if}
                <span
                    class="ease-in duration-300 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 rounded bg-ritual-faded-accent"
                    >{image.desc}</span
                >
            </div>
        {/each}
    </div>
</div>
