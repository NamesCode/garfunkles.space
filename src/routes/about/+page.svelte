<script>
 import { marked } from 'marked';
 const url = 'https://raw.githubusercontent.com/sveltejs/kit/master/README.md';
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
                <!-- <img src="Apple_Computer_Logo_rainbow.svg"
                     height="200px"
                     width="200px"
                     alt="Apple logo"
                     style="float: right;"/> -->
                <p>Hallo, Welcome to my webpage!</p>
                <p>For the reasons of privacy I go under the pseudo names "Name" or "Garfunkle" online</p>

                <p>{#await fetch(url).then(r => r.text()) then text}
                    {@html marked(text)}
                {/await}
                </p>
            </div>
        </div>
    </div>
    <div id="side-panel">
        <div class="card">
            <h1 style="padding-left: 15px;">Socials</h1>
            <hr>
            <ul>Twitter: @NameIsALoser</ul>
            <ul>Email: <a  href="mailto:namesexistsinemails@gmail.com">namesexistsinemails@gmail.com</a></ul>
            <ul>Discord: NameExists#3898</ul>
        </div>
</body>


<style>
 p {
     margin-top: -20px;
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
