<script>
 const navData = [
     {
         title: 'About',
         href: '/about'
     }
 ]
</script>
<div class="container">
    <!-- <div class="navbar" style="float: left; width: 100%;"> -->
    <div class="navbar">
        <div id="desktop">
            <h3>Garfunkles.space</h3>
            <a href="/">Home</a>
            {#each navData as {title, href}}
                <p>|</p>
                <a {href} {title}>{title}</a>
            {/each}
        </div>
        <div id="mobile">
            <svg viewBox="0 0 100 80" width="25" height="25" fill="#bac2de">
                <rect width="100" height="20" rx="5"></rect>
                <rect y="30" width="100" height="20" rx="5"></rect>
                <rect y="60" width="100" height="20" rx="5"></rect>
            </svg>
            <svg viewBox="0 0 460.775 460.775" height="25" width="25" fill="#bac2de">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	                     c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	                     c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	                     c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	                     l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	                     c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
            </svg>
        </div>
        <!-- </div> -->
</div>
<div style="clear:both;"></div>
</div>
<div style="height: 20px;"></div>
<div class="garf_line" style="margin-bottom: 5px;"></div>

<style>
 h3 {
     color: #bac2de;
     font-family: "Lucida Console", "Courier New", monospace;
     text-align: justify;
 }
 .garf_line {
     background-image: url('$lib/assets/garf_line.gif');
     background-repeat: repeat-x;
     height: 2rem;
 }
 .container {
     background-color: var(--mantle);
     border-bottom: 2.5px solid var(--red);
     margin-left: -1vw;
     overflow: hidden;
     width: 100%;
     position: fixed;
     top: 0;
 }
 .navbar * {
     padding-left: 5px;
     float: left;
     margin: auto
 }
 .navbar h3 {
     letter-spacing: 0;
     padding-right: 5px;
 }
 .navbar a, .navbar p {
     margin-top: 2px;
 }
 #mobile {
     display: none;
 }
 @media only screen and (max-width: 500px) {
     #desktop {
         display: none;
     }
     #mobile {
         display: block;
     }
 }

</style>
