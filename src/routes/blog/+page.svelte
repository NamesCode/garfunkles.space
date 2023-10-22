<script>
    import { onMount } from "svelte";
    import attention from '$lib/assets/retro-os-icons/attention.png';

     //let postData;
    async function getPostData() {
     //onMount(async () => {
     const postDataResponse = await fetch("/blog/api");
     //const postData = await postDataResponse.json();
     //console.log(postData);
    //});
    return await postDataResponse.json();
    }

    const postData = getPostData();
</script>

 <div style="margin-top: 35vh; display: flex; align-items: center; padding-bottom: 1.5vh;"> 
    <div style="align-items: center; margin: auto; padding-left: 1em; padding-right: 1em;">
        <div style="border: 2.5px double var(--text); background-color: var(--base);">
        <main>
                {#await postData}
                {:then posts}
                <ul>
                {#each posts as {title, slug}}
                <li>
                <a href="/blog/{slug}">{title}</a>
                </li>
                {/each}
                </ul>
                {/await}
                </main>
        </div>
    </div>
</div>

<style>
 main {
     align-items: center; 
     padding-left: 1em;
     padding-right: 1em;
 }
 </style>
