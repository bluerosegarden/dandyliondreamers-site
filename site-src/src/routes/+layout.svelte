<script>
    import Header from "$lib/components/Header.svelte";
    import "$lib/styles/web.css";
    import "$lib/app.css";
    import { fade } from "svelte/transition";
</script>

<Header />
<main
    class="rounded"
    in:fade={{ duration: 150, delay: 150 }}
    out:fade={{ duration: 150 }}
>
    <slot />
</main>
