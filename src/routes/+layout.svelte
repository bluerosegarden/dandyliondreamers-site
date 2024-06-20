<script lang="ts">
    import site_data from "$lib/cms/pages/main-settings.json";
    import Header from "$lib/components/Header.svelte";
    import "$lib/styles/web.css";
    import "$lib/app.css";
    import { fade } from "svelte/transition";
    import Footer from "$lib/components/Footer.svelte";
    export let data;
</script>

<head>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={site_data.url} />
    <meta property="og:title" content={site_data.title} />
    <meta property="og:description" content={site_data.blurb} />
    <meta property="og:image" content={site_data.embedImg} />
    <title>{site_data.title}</title>
</head>
{#key data.pathname}
    <div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
        <Header />
        <main class="rounded text-lg sm:mx-10 md:mx-36 leading-normal">
            <slot />
        </main>
        <Footer />
    </div>
{/key}
