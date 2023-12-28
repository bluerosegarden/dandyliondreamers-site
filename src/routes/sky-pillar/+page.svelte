<script>
    import PortfolioSet from "$lib/components/Sky-Pillar-Card.svelte";

    export let data;
    const sets = data.raySets;
</script>

<h1 class="text-6xl">{data.title}</h1>
{#each sets as set}
    <PortfolioSet {set} />
{/each}
