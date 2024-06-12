<script>
    import Commission from "$lib/components/Commission.svelte";

    export let data;
    let featuredComms;
    let regularComms;

    featuredComms = data.comms.filter((comm) => comm.featured);
    regularComms = data.comms.filter((comm) => !comm.featured);
</script>

<h1 class="text-5xl sm:text-6xl text-center">{data.title}</h1>
{#if data.mainImg}
    <img class="max-h-96" src={data.mainImg} alt="Commissions Hero" />
{/if}
<div class="2xl:w-4/12 pb-12">{data.body}</div>

<div class="flex xl:flex-row flex-col justify-center items-center">
    {#each featuredComms as comm}
        <Commission {comm} featured={true} />
    {/each}
</div>

<div class="flex flex-row justify-center">
    {#each regularComms as comm}
        <Commission {comm} featured={false} />
    {/each}
</div>
