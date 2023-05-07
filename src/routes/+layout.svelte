<script>
    import "../styles.css"
</script>

<html lang="en-GB">
    <body>
        <div class="card" style="float: left; width: 100%;">
            <div class="navbar">
                <h3>Garfunkles.space</h3>
                <a href="/">Home</a>
                <p>|</p>
                <a href="/about">About</a>
                <p>|</p>
                <a href="https://github.com/NamesCode">Github</a>
                <p>|</p>
                <a href="https://gitlab.com/NamesCode">Gitlab</a>
                <p>|</p>
                <a href="https://github.com/NamesCode/.Dotfiles">.Dotfiles</a>
                <p>|</p>
                <a href="https://git.garfunkles.space">Source code</a>
            </div>
        </div>
        <div style="clear:both;"></div>
        <div class="garf_line" style="margin-bottom: 5px;"></div>
    </body>
</html>

<style>
 html {
     background-image: url('stars.gif');
 }
 h3 {
     color: #bac2de;
     font-family: "Lucida Console", "Courier New", monospace;
     text-align: justify;
 }
 .garf_line {
     background-image: url('garf_line.gif');
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
