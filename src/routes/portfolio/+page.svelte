<script>
    import PortfolioSet from "$lib/components/PortfolioSet.svelte";

    export let data;
</script>

<h1 class="text-5xl sm:text-6xl text-center">{data.title}</h1>
<p class="bg-ritual-primary/25 p-4 rounded-lg rounded 2xl:w-4/12">
    {data.body}
</p>

{#each data.portSets as set}
    <PortfolioSet {set} />
{/each}
