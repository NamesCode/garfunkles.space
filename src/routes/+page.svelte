<script>
 import HeaderImage from '$lib/assets/bbc_micro.gif';
 import Home from '$lib/md/home.md';
</script>

<body>
    <div style="display: flex; align-items: center; padding-bottom: 1.5vh;">
        <div class="card" id="main-panel">
        <div class="padded">
            <div class="heading">
                <img src="{HeaderImage}" alt="BBC Micro" height=90px width=90px>
                <h1>Home page</h1>
                <hr>
            </div>
            <div style="clear:both;"></div>
            <div class="content">
               <main>
                   <Home />
               </main>
            </div>
        </div>
        </div>
    </div>
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
