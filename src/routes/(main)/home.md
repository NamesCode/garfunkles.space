<script>
    import {finishedProjects, projects} from '$lib/contentData.js';

    import CatppuccinWebring from '$lib/assets/88x31/ctp_webring.webp';
    import WebringBack from '$lib/assets/webring_back.webp';
    import WebringForward from '$lib/assets/webring_forward.webp';

    import Me from '$lib/assets/88x31/garfunkles-space.webp';
    import Neovim from '$lib/assets/88x31/made_with_neovim.gif';
    import Mac from '$lib/assets/88x31/made_with_mac.gif';
    import Cookies from '$lib/assets/88x31/nocookie.gif';
    import Webdesign from '$lib/assets/88x31/webdesign.gif';
    import Catppuccin from '$lib/assets/catppuccin_is_for_sex_havers.png';
    import Cat from '$lib/assets/88x31/cat.gif';
    import LocalNetwork from '$lib/assets/88x31/local_network.gif';
    import LockNKey from '$lib/assets/retro-os-icons/keys3.png';
    import AGPL from '$lib/assets/88x31/agplv3.gif';
</script>

Welcome to my minuscule and insignificant corner of the web!<br>
Please don't expect anything of quality from this website.<br>
Half of what you'll see here are the ramblings of a madman and projects I've tinkered with.

If you'd like to link to my page, firstly thanks ♡(｡-ω-), secondly click [here!](/blog/link-me)

<div style="margin-top: -0.8em;">

<img src={Me} alt="My 88x31 for my website!" style="width: 88px">
<img src={LocalNetwork} alt="Local Network">
<a href="https://www.youtube.com/watch?v=u0-szsoiWcQ" target="_blank" rel="noopener noreferrer">
    <img src={Cat} height=31vh alt="Cat" title="Meow">
</a>

</div>

<div style="display: flex; align-items: center;">

<a href="/public_key.gpg" download="Garfunkles/Names GPG key.gpg">
    <img src={LockNKey} alt="Lock'N'key" title="GPG" style="float: left;">
</a>

<p>If you use GPG you can download <a href="/public_key.gpg" title="GPG Download" download="Garfunkles/Names GPG key.gpg">my GPG key here</a></p>

</div>

<span class="webring"><a href="https://ctp-webr.ing/garfunkles.space/previous"><img src={WebringBack} alt="An 88x32 of the Catppuccin webring."></a><a href="https://ctp-webr.ing/"><img src={CatppuccinWebring} alt="An 88x32 of the Catppuccin webring."></a><a href="https://ctp-webr.ing/garfunkles.space/next"><img src={WebringForward} alt="A forward arrow button for moving through webrings"></a></span>

## Projects

<div style="margin-top: -1em;">

**Some projects I've done in the past:**

<hr>

<div style="padding-left: 1em;">

{#each finishedProjects as {project, description}}

### {project}

<div style="margin-top: -1em;">

{@html description}

</div>

{/each}

</div>

**Current projects I'm working on are:**

<hr>

<div style="padding-left: 1em;">

{#each projects as {project, description}}

### {project}

<div style="margin-top: -1em;">

{@html description}

</div>
{/each}

<div style="margin-top: -1em; padding-bottom: 5px;">
<sub>(I might not even do any of these)</sub>
</div>

</div>

## Contributions

<div style="margin-top: -1em;">

<img src="{Catppuccin}" alt="Catppuccin is for sex havers" title="This statement is entirely true and has been fact checked by true American patriots" height="50vh" style="float: left;">

<p>I was one of the current maintainers for <a href="https://github.com/catppuccin/emacs">Catppuccin Emacs</a>.<br>
If you checkout my <a href="https://github.com/NamesCode">Github</a> and <a href="https://gitlab.com/NamesCode">Gitlab</a> profiles you can look throught my contributions. I will highlight the big ones here.</p>

</div>

<img src="{Mac}" alt="Made with MacOS" height="35vh" title="UNIX > DOS">
<a href="https://neovim.io" target="_blank" rel="noopener noreferrer" title="The best code editor">
  <img src="{Neovim}" alt="Made with Neovim" height="35vh">
</a>
<img src="{Cookies}" alt="No cookies" height="35vh">
<a href="https://neocities.org" target="_blank" rel="noopener noreferrer" title="Make a damn website please!!">
  <img src="{Webdesign}" alt="Webdesign is my passion :3" height="35vh">
</a>
<img src="{AGPL}" alt="AGPL-3.0" height="35vh" title="This website is licensed under AGPL-3.0">
<a href="https://aubrey.pet/" target="_blank" rel="noopener noreferrer">
  <img src="https://aubrey.pet/buttons/aubreyrs.png" alt="The 88x31 of aubrey" height="35vh"/>
</a>
<br>
<sub>If you have a website with a 88x31, please send it to me and I may add you here &lt3</sub>

</div>

<style>
hr {
margin-top: -1em;
margin-left: -0.2em
}
img {
    padding-right: 0.25em;
}
.webring img {
    padding: 0.05rem;
}
</style>
