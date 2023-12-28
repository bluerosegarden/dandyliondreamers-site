<script>
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
    <div class="w-1/2 flex flex-col flex-wrap h-100">
        {#each images as image}
            <img class="w-50" src={image.img} />
        {/each}
    </div>
</div>
