<script>
    import PortfolioSet from "$lib/components/PortfolioSet.svelte";

    export let data;
</script>

<h1 class="text-6xl">{data.title}</h1>
<p>{data.body}</p>
{#each data.portSets as set}
    <PortfolioSet {set} />
{/each}
