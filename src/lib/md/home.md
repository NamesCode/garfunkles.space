<script>
    import {finishedProjects, projects} from '$lib/contentData.js';
    import Neovim from '$lib/assets/made_with_neovim.gif';
    import Mac from '$lib/assets/made_with_mac.gif';
    import Cookies from '$lib/assets/nocookie.gif';
    import Webdesign from '$lib/assets/webdesign.gif';
    import Catppuccin from '$lib/assets/catppuccin_is_for_sex_havers.png';
    import Cat from '$lib/assets/cat.gif';
    import LocalNetwork from '$lib/assets/local_network.gif';
    import LockNKey from '$lib/assets/retro-os-icons/keys3.png';
    
    var showContent = false;
</script>

Welcome to my minuscule and insignificant corner of the web!<br>
Please don't expect anything of quality from this website.<br>
Half of what you'll see here are the ramblings of a madman and projects i've tinkered with.

I self-host the majority of things linked to on this site because:

<div style="margin-top: -1em;">

- I like privacy
- I am cheaper than Mr. Krabs 🦀

<div style="margin-top: -0.8em;">

<img src={LocalNetwork} alt="Local Network">
<a href="https://www.youtube.com/watch?v=u0-szsoiWcQ" target="_blank" rel="noopener noreferrer">
    <img src={Cat} height=31vh alt="Cat" title="Meow">
</a>

</div>

</div>

<div style="display: flex; align-items: center;">

<a href="/public_key.gpg" download="Garfunkles/Names GPG key.gpg">
    <img src={LockNKey} alt="Lock'N'key" title="GPG" style="float: left;">
</a>

<p>If you use GPG you can download <a href="/public_key.gpg" title="GPG Download" download="Garfunkles/Names GPG key.gpg">my GPG key here</a></p>

</div>


## Projects

<div style="margin-top: -1em;">

**Some projects I've done in the past:**

<hr>

<div style="padding-left: 1em;">

{#each finishedProjects as {project, description}}

### {project}

<div style="margin-top: -1em;">

{description}

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
<sub style="color: var(--text); font-family: courier new;">(I might not even do any of these)</sub>
</div>

</div>

## Contributions

<div style="margin-top: -1em;">

<img src="{Catppuccin}" alt="Catppuccin is for sex havers" title="This statement is entirely true and has been fact checked by true American patriots" height="50vh" style="float: left;">

<p>I am one of the current maintainers for <a href="https://github.com/catppuccin/emacs">Catppuccin Emacs</a>.<br>
If you checkout my <a href="https://github.com/NamesCode">Github</a> and <a href="https://gitlab.com/NamesCode">Gitlab</a> profiles you can look throught my contributions. I will highlight the big ones here.</p>

</div>

<img src="{Mac}" alt="Made with MacOS" height="35vh" title="UNIX > DOS">
<a href="https://neovim.io" target="_blank" rel="noopener noreferrer" title="The best code editor"><img src="{Neovim}" alt="Made with Neovim" height="35vh"></a>
<img src="{Cookies}" alt="No cookies" height="35vh">
<img src="{Webdesign}" alt="Webdesign is my passion :3" height="35vh">

</div>

<style>
hr {
margin-top: -1em;
margin-left: -0.2em
}
img {
padding-right: 0.25em;
}
</style>
