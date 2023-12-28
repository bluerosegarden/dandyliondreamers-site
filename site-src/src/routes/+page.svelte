<script>
    export let data;
    let home_data = data.data;
</script>

<h1 class="text-6xl">{home_data.title}</h1>
<div>
    <img src={home_data.mainImg.img} />
</div>
<div class="text-lg m-4">
    {home_data.body}
</div>
