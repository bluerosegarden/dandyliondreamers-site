<script lang="ts">
    import { base } from "$app/paths";
</script>

<header
    class="z-10 mt-8 bg-rites-background fixed md:static h-24 w-full md:bg-transparent border-b-8 md:border-b-transparent border-b-hex-primary justify-between"
>
    <nav>
        <ul class="flex-row align-center justify-around">
            <li>
                <a
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                    href="{base}/about/"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >about</span
                    >
                </a>
            </li>
            <li class="">
                <a
                    href="{base}/portfolio/"
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >portfolio</span
                    >
                </a>
            </li>
            <li>
                <a
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                    href="{base}/"
                    ><span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >home</span
                    >
                </a>
            </li>
            <li>
                <a
                    href="{base}/commissions/"
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >commissions</span
                    >
                </a>
            </li>
            <li>
                <a
                    class="group border-b-4 border-ritual-primary hover:border-b-ritual-accent"
                    href="{base}/sky-pillar/"
                >
                    <span
                        class="hidden md:inline text-2xl text-center group-hover:text-ritual-accent"
                        >sky pillar</span
                    >
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }
    li {
        margin: 0 1rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>
