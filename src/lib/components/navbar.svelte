<script>
 import { navData } from '$lib/contentData.js';

 let mobileNav = { toggled: false };

 function toggle() {
	 mobileNav.toggled = !mobileNav.toggled;
 }

 let windowWidth;
</script>

<svelte:window bind:outerWidth={windowWidth}/>

<div class="container">
    <div class="navbar">
        <div class="mainNav">
            {#if windowWidth < 501}
            <h3>Garfunkles.space</h3>
            <!-- this is such an awful hack but it works -->
            <div style="width: 20vw;"/>
            {:else}
            <h3>Garfunkles.space</h3>
           {/if}
            <div class="desktop">
                <span>
                    <a href="/">Home</a>
                    {#each navData as {title, href}}
                        <p>|</p>
                        <a {href} {title}>{title}</a>
                    {/each}
                </span>
            </div>
            <div class="mobile">
                <span>
                    {#if !mobileNav.toggled}
                        <svg on:click={toggle} class="button"viewBox="0 0 100 80" width="25" height="25" fill="#bac2de">
                            <rect width="100" height="20" rx="5"></rect>
                            <rect y="30" width="100" height="20" rx="5"></rect>
                            <rect y="60" width="100" height="20" rx="5"></rect>
                        </svg>
                    {/if}
                    {#if mobileNav.toggled}
                        <svg on:click={toggle} style="padding-top:2.5px;" viewBox="0 0 460.775 460.775" height="20" width="20" fill="#bac2de">
                            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	                                 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	                                 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	                                 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	                                 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	                                 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                        </svg>
                    {/if}
                </span>
            </div>
        </div>
    </div>
    <div style="clear:both;"></div>
    {#if mobileNav.toggled}
        <hr>
        <!-- its not an excuse for bad website design, its a feature -->
        <div id="mobileNavMenu" style="padding-left:7vw;">
            <ul>
                <a href="/" title="Home"><li>Home</li></a>
                {#each navData as {title, href}}
                    <a {href} {title}><li>{title}</li></a>
                {/each}
            </ul>
        </div>
    {/if}
</div>
 <div style="height: 30px;"/> 
<div class="garf_line" style="margin-bottom: 2.5px; margin-top: 2.5px;"/>

<style>
 h3 {
     color: #bac2de;
     font-family: "Lucida Console", "Courier New", monospace;
     text-align: justify;
 }
 hr {
     margin-left: 5px;
     width: 85%;
 }
 ul {
	 margin-top: -0.35em;
     margin-left: -0.45em;
 }
 li {
     padding-bottom: 0.35em;
 }
 .garf_line {
     background-image: url('$lib/assets/garf_line.gif');
     background-repeat: repeat-x;
     height: 2rem;
 }
 .container {
     background-color: var(--mantle);
     border-bottom: 2.5px solid var(--red);
     overflow: hidden;
     width: 100%;
     position: fixed;
     top: 0;
 }
 .mainNav {
     display: flex;
     align-items: center;
 }
 .navbar * {
     padding-left: 5px;
     float: left;
     margin: auto
 }
 .navbar h3 {
     font-size: 1.35rem;
     letter-spacing: 0;
     padding-right: 5px;
 }
 .navbar a, .navbar p {
     margin-top: 2px;
 }
 .mobile {
     display: none;
 }
         @media only screen and (max-width: 500px) {
             .desktop {
                 display: none;
             }
             .mobile {
                 display: block;
             }
             .mainNav {
                 width: 100%;
                 padding-top: 1.5px;
                 padding-bottom: 1.5px;
             }
             .navbar h3 {
                 margin-left: -1vw;
             }
         }
</style>
