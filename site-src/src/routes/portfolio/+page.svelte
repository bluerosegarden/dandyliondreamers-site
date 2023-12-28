<script>
    import PortfolioSet from "$lib/components/PortfolioSet.svelte";

    export let data;
    const sets = data.data.portSets;
</script>

<h1 class="text-6xl">PAAAA</h1>
{#each sets as set}
    <PortfolioSet {set} />
{/each}
