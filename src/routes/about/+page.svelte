<script>
    export let data;
    const page_data = data.data;
    const settings = data.settings;
</script>

<h1 class="text-5xl sm:text-6xl text-center">{page_data.title}</h1>
<div class="bg-ritual-primary/25 p-4 rounded-lg 2xl:w-5/12">
    <div class="flex flex-row justify-center my-4">
        {#each settings.links as link}
            <a
                href={link.link}
                class="bg-ritual-primary rounded-full p-2 text-3xl font-bold hover:bg-ritual-accent"
                >{link.name}</a
            >
        {/each}
    </div>
    <div class="text-3xl font-bold text-center my-4 text-center">
        <a
            href="mailto:{settings.email}"
            class="group border-b-4 border-ritual-primary border-solid inline text-center hover:border-ritual-accent"
        >
            <div class="inline group-hover:text-ritual-accent inline">
                {settings.email}
            </div>
        </a>
    </div>
    <p class="mx-4">
        {page_data.body}
    </p>
</div>
