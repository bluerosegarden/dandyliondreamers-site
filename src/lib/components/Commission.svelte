<script>
    import { Lightbox } from "svelte-lightbox";
    import SvelteMarkdown from "svelte-markdown";
    export let comm;
    export let featured;
    let commSize;

    if (featured) {
        commSize = "xl:w-4/12 w-10/12";
    } else {
        commSize = "xl:w-2/12 w-5/12";
    }
</script>

<div
    class="p-2 px-4 bg-black/50 m-2 {commSize} rounded flex flex-col justify-center shadow-lg flex-wrap"
>
    <Lightbox
        transitionDuration={50}
        title={comm.title}
        description={comm.desc}
    >
        <img class="w-30" src={comm.img} alt={comm.title} />
        <style>
            .svelte-lightbox-body {
                max-height: 40vh !important;
            }
            .svelte-lightbox-footer h2 {
                color: white;
                font-size: 3rem;
                text-align: center;
            }
            .svelte-lightbox-footer h5 {
                color: white;
                font-size: 1.5rem;
                word-wrap: break-word;
            }
        </style>
    </Lightbox>
    <h2 class="w-fit text-center">{comm.title}</h2>
</div>
