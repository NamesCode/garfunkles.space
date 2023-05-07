<script>
 // var markdownSrc = '$lib/md/about.md';
 import { page } from '$app/stores';
 import { onMount } from 'svelte';
 import { mdsvex } from 'mdsvex';
 import About from './about.md';

 // let url = ``;
 // onMount(() => url = window.location.href);
 // url = url.toString().replace("http://localhost:5173/about", "");

 let markdownSrc = `{$page.url.pathname}.md`;
</script>


<body>
    <div class="card" id="main-panel">
        <div class="padded">
            <div class="heading">
                <img src="garfpfp.png" alt="PFP" height=90px width=90px>
                <h1>About me</h1>
                <hr>
            </div>
            <div style="clear:both;"></div>
            <div class="content">
                <!-- <p>Hallo, Welcome to my webpage!</p>
                     <p>For the reasons of privacy I go under the pseudo names "Name" or "Garfunkle" online</p>
                     <p>Current URL: {$page.url.pathname}</p> -->
                <main>
                    <About />
                </main>
            </div>
        </div>
    </div>
    <div id="side-panel">
        <div class="card">
            <h1 style="padding-left: 15px;">Socials</h1>
            <hr>
            <ul>Twitter: @NameIsALoser</ul>
            <ul>Email: <a href="mailto:lasagna@garfunkles.space">lasagna@garfunkles.space</a></ul>
            <ul>Discord: NameExists#3898</ul>
        </div>
</body>


<style>
 main {
     margin-top: -2.5em;
	 padding-top: 0.5em;
 }
 #side-panel {
     float: right;
     /* padding-left: 1vw; */
     width: 20%;
     padding-right: 24px;
 }
 #main-panel {
     width: 77%;
     padding-bottom: 1vw;
 }
 @media only screen and (max-width: 1080px) {
     #main-panel {
		 width: 100%;
	 }
 }
</style>
