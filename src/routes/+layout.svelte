<script lang="ts">
    import data from "$lib/cms/pages/main-settings.json";
    import Header from "$lib/components/Header.svelte";
    import "$lib/styles/web.css";
    import "$lib/app.css";
    import { fade } from "svelte/transition";
    import Footer from "$lib/components/Footer.svelte";
    import { base } from "$app/paths";
</script>

<head>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={data.url} />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.blurb} />
    <meta property="og:image" content="{base}{data.embedImg}" />
</head>

<Header />
<main
    class="rounded text-lg mx-8 sm:mx-36 leading-normal"
    in:fade={{ duration: 150, delay: 150 }}
    out:fade={{ duration: 150 }}
>
    <slot />
</main>
<Footer />
