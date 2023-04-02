<html lang="en-GB">
    <body>
        <div class="card" style="float: left; width: 100%;">
            <div class="navbar">
                <h3>My website</h3>
                <a href="/">Home</a>
                <p>|</p>
                <a href="https://github.com/NamesCode">Github</a>
                <p>|</p>
                <a href="https://github.com/NamesCode/.Dotfiles">.Dotfiles</a>
                <p>|</p>
                <a href="">Source code</a>
            </div>
        </div>
        <div style="clear:both;"></div>
        <div class="garf_line" style="margin-bottom: 5px;"></div>
    </body>
</html>

<style>
 a {
     color: #f38ba8;
     text-decoration: none;
     font-family: "Lucida Console", "Courier New", monospace;
 }
 a:hover {
     color: #eba0ac;
 }
 html {
     background-image: url('stars.gif');
 }
 .card {
     background-color: #181825;
     border: 2.5px solid #f38ba8;
     border-radius: 5px;
     margin-bottom: 5px;
 }
 p, h3 {
     color: #bac2de;
     font-family: "Lucida Console", "Courier New", monospace;
     text-align: justify;
 }
 .garf_line {
     background-image: url('garf_line2.gif');
     background-repeat: repeat-x;
     height: 2rem;
 }
 .navbar * {
     padding-left: 5px;
     float: left;
     margin: auto
 }
 .navbar h3 {
     padding-right: 5px;
 }
 .navbar a, .navbar p {
     margin-top: 2px;
 }
</style>

<slot></slot>
