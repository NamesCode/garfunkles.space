<script>
 import HeaderImage from '$lib/assets/garfpfp.png'
</script>

<body>
    <div class="card" id="main-panel">
        <div class="padded">
            <div class="heading">
                <img src="{HeaderImage}" alt="PFP" height=90px width=90px>
                <h1>Heading</h1>
                <hr>
            </div>
            <div style="clear:both;"></div>
            <div class="content">
                <p>Text</p>
            </div>
        </div>
    </div>
    <div id="side-panel">
        <div class="card">
            <h1 style="padding-left: 15px;">Side heading</h1>
            <hr>
            <p>Text</p>
        </div>
    </div>
</body>


<style>
 #side-panel {
     float: right;
     /* padding-left: 1vw; */
     width: 20%;
     padding-right: 24px;
 }
 #side-panel h1 {
     padding-right: 10px;
     padding-bottom: 5px;
 }
 #main-panel {
     width: 77%;
     padding-bottom: 1vw;
 }
 #side-panel p {
     padding-top: 15px;
     padding-left: 1vw;
     font-family: "Lucida Console", "Courier New", monospace;
     color: #bac2de;
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
 .heading {
     padding-top: 1vw;
 }
 .heading img {
     float: left;
 }
 .heading img {
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
