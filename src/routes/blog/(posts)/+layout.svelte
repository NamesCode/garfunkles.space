<script>
    import { filteredPosts } from './gatherPostData.js';
    import { page } from '$app/stores';

    const slug = $page.url.pathname.replace("/blog/", ""); // Finds the slug by getting the current url path and removing the "/blog/" part from the string
    const post = filteredPosts.find((post) => post.slug === slug); // looks through the array of posts and finds the one based on slug

    function getDate() {
      const date = new Date(post.date);

      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      return year + "/" + month + "/" + day // conform to ISO-8601 date format yyyy-mm-dd
    }
</script>
<body>
    <div style="display: flex; align-items: center; padding-bottom: 1.5vh;">
        <div class="card" id="main-panel">
        <div class="padded">
            <div class="heading">
                <img src="/favicon.png" alt="Favicon" height=90px width=90px>
                <h1>{post.title}</h1>
                <hr>
            </div>
            <div style="clear:both;"></div>
            <div class="content">
               <main>
               <slot></slot>
               </main>
            </div>
        </div>
        </div>
    </div>
   <p class="padded"><a href="{$page.url}">This article</a> © {getDate()} by <a href="/">Garfunkle</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></p> 
    </body>

<style>
 main {
     margin-top: -2.5em;
	 padding-top: 0.5em;
 }
 #main-panel {
     width: 77%;
     margin: auto;
     padding-bottom: 1vw;
 }
 .padded {
     margin-top: -1vh;
 }
 @media only screen and (max-width: 800px) {
     #main-panel {
		 width: 92.5%;
	 }
 }
</style>
