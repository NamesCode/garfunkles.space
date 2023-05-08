<script>
 import { page } from '$app/stores';
 import { onMount } from 'svelte';
 import { mdsvex } from 'mdsvex';
 import About from './about.md';
 import HeaderImage from '$lib/assets/garfpfp.png'
</script>

<body>
    <div class="card" id="main-panel">
        <div class="padded">
            <div class="heading">
                <img src="{HeaderImage}" alt="PFP" height=90px width=90px>
                <h1>About me</h1>
                <hr>
            </div>
            <div style="clear:both;"></div>
            <div class="content">
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
