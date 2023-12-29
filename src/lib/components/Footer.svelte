<script lang="ts">
    import settings from "$lib/cms/pages/main-settings.json";
    export function load() {
        return settings;
    }
</script>

<footer class="text-center mail my-4">
    <div class="text-sm font-bold text-center my-4 text-center">
        <a
            href="mailto:{settings.email}"
            class="group border-b-2 border-ritual-primary border-solid inline text-center hover:border-ritual-accent"
        >
            <svg
                class="inline align-middle group-hover:animate-bounce transition-all ease-in-out stroke-ritual-primary group-hover:stroke-ritual-accent"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
                width="18"
                height="18"
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
</footer>
