<script>
    import RayquezaCard from "$lib/components/Sky-Pillar-Card.svelte";

    export let data;
    const sets = data.raySets;
</script>

<h1 class="text-5xl sm:text-6xl text-center mb-8">{data.title}</h1>

<section class="flex flex-row flex-wrap justify-center">
    {#each sets as set}
        <RayquezaCard {set} />
    {/each}
</section>
