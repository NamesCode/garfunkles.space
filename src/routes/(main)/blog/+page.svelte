<script>
    import attention from '$lib/assets/retro-os-icons/attention.png';
    import { filteredPosts } from "$lib/postData.js";
</script>

 <div style="margin-top: 35vh; display: flex; align-items: center; padding-bottom: 1.5vh;"> 
    <div style="align-items: center; margin: auto; padding-left: 1em; padding-right: 1em;">
        <div style="border: 2.5px double var(--text); background-color: var(--base);">
          <main>
            <ul>
              {#each filteredPosts as {title, slug}}
                <li>
                  <a href="/blog/{slug}">{title}</a>
                </li>
              {/each}
            </ul>
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
