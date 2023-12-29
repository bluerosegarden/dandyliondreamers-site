<script>
    import RayquezaCard from "$lib/components/Sky-Pillar-Card.svelte";

    export let data;
    const sets = data.raySets;
</script>

<h1 class="text-6xl">{data.title}</h1>

<section class="flex flex-row flex-wrap">
    {#each sets as set}
        <RayquezaCard {set} />
    {/each}
</section>
