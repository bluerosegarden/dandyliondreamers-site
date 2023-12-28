<script>
    export let data;
    let home_data = data.data;
</script>

<h1 class="text-6xl">{home_data.title}</h1>
<div>
    <img class="h-96" src={home_data.mainImg} />
</div>
<div class="text-lg mx-24">
    {home_data.body}
</div>
