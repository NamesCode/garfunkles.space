<script>
 export let foo;
 foo = undefined;
 // Values that are passed in as props
 // are immediately available
 console.log({ foo });
</script>

<body>
    <div class="card" id="main-panel">
        <div class="padded">
            <div class="name">
                <img src="garfpfp.png" alt="PFP" height=90px width=90px>
                <h1>Name</h1>
                <hr>
            </div>
            <div style="clear:both;"></div>
            <div class="content">
                <img src="Apple_Computer_Logo_rainbow.svg"
                     height="200px"
                     width="200px"
                     alt="Apple logo"
                     style="float: right;"/>
                <p>Hallo, Welcome to my webpage!</p>
                <p>For the reasons of privacy I go under the pseudo names "Name" or "Garfunkle" online :)</p>
                <p></p>
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
 a {
     color: #f38ba8;
     text-decoration: none;
     font-family: "Lucida Console", "Courier New", monospace;
 }
 a:hover {
     color: #eba0ac;
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
 ul {
     padding: 0;
     padding-left: 1vw;
     font-family: "Lucida Console", "Courier New", monospace;
     padding-right: 1vw;
 }
 .card {
     background-color: #181825;
     border: 2.5px solid #f38ba8;
     border-radius: 5px;
     margin-bottom: 5px;
     float: left;
 }
 .content {
     max-width: 60%;
     margin: auto;
 }
 ul {
     color: #bac2de;
 }
 p {
     margin-top: -20px;
     padding-top: 0.5em;
     color: #bac2de;
     font-family: "Lucida Console", "Courier New", monospace;
     text-align: justify;
 }
 .padded {
     padding-left: 1vw;
 }
 hr {
     color: #bac2de;
     background-color: #bac2de;
     margin-left: 10px;
     max-width: 90%;
     height: 2.5px;
     border-radius: 5px;
     margin-top: -30px;
 }
 h1 {
     color: #bac2de;
     font-weight: normal;
     font-family: "Rockwell", serif;
 }
 .name {
     padding-top: 1vw;
 }
 .name img {
     float: left;
 }
 .name img {
     border-radius: 20%;
     padding-right: 7.5px;
 }
 @media only screen and (max-width: 1080px) {
     #side-panel {
         display: none;
     }
     #main-panel {
         width: 100%;
     }
     @media only screen and (max-width: 1026px) {
         .content {
             padding-right: 1vw;
             max-width: 100%;
             margin: 0;
         }
     }
 }
</style>
