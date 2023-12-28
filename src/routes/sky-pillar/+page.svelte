<script>
    import PortfolioSet from "$lib/components/PortfolioSet.svelte";

    export let data;
    const sets = data.raySets;
</script>

<h1 class="text-6xl">PAAAA</h1>
{#each sets as set}
    <PortfolioSet {set} />
{/each}
