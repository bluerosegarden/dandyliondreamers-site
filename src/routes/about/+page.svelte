<script>
    export let data;
    const page_data = data.data;
    const settings = data.settings;
</script>

<h1 class="text-6xl mb-20">{page_data.title}</h1>
<div class="bg-ritual-primary/25 p-4 rounded-lg">
    <div class="text-xl font-bold text-center my-4 text-center">
        <a
            href="mailto:{settings.email}"
            class="group border-b-4 border-ritual-primary border-solid inline text-center hover:border-ritual-accent"
        >
            <svg
                class="inline align-middle group-hover:animate-bounce transition-all ease-in-out stroke-ritual-primary group-hover:stroke-ritual-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                ><g transform="translate(24 0) scale(-1 1)"
                    ><path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
                    /></g
                ></svg
            >
            <div class="inline group-hover:text-ritual-accent inline">
                {settings.email}
            </div>
            <svg
                class="inline align-middle group-hover:animate-bounce transition-all ease-in-out stroke-ritual-primary group-hover:stroke-ritual-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                ><g transform="translate(24 0) scale(-1 1)"
                    ><path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
                    /></g
                ></svg
            >
        </a>
    </div>
    <div class="flex justify-center my-4">
        {#each settings.links as link}
            <a
                href={link.link}
                class="bg-ritual-primary rounded-full p-2 text-xl font-bold hover:bg-ritual-accent"
                >{link.name}</a
            >
        {/each}
    </div>
    <div class="mx-10">
        {page_data.body}
    </div>
</div>
