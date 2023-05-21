<script>
    import {finishedProjects, projects} from '$lib/contentData.js';
    import Emacs from '$lib/assets/made_with_emacs.png';
    import Mac from '$lib/assets/made_with_mac.gif'
    import Catppuccin from '$lib/assets/catppuccin_is_for_sex_havers.png'
</script>

Welcome to my minuscule and insignificant corner of the web! Please don't expect anything of quality from this website.

## Projects

<div style="margin-top: -1em;">

**Some projects ive done in the past:**

<hr>

<div style="padding-left: 1em;">

{#each finishedProjects as {project, description}}

### {project}

<div style="margin-top: -1em;">

{description}

</div>

{/each}

</div>

**Current projects i'm working on are:**

<hr>

<div style="padding-left: 1em;">

{#each projects as {project, description}}

### {project}

<div style="margin-top: -1em;">

{description}

</div>
{/each}

<div style="margin-top: -1em; padding-bottom: 5px;">
<sub style="color: var(--text); font-family: courier-new;">(I might not even do any of these)</sub>
</div>

</div>

## Contributions

<div style="margin-top: -1em;">

<img src="{Catppuccin}" alt="Catppuccin is for sex havers" title="This statement is entirely true and has been fact checked by true American patriots" height="50vh" style="float: left;">

<p class="alignRoundImg">I am one of the current maintainers for <a href="https://github.com/catppuccin/emacs">Catppuccin Emacs</a>.<br>
If you checkout my <a href="https://github.com/NamesCode">Github</a> and <a href="https://gitlab.com/NamesCode">Gitlab</a> profiles you can look throught my contributions. I will highlight the big ones here.</p>

</div>

<img src="{Mac}" alt="Made with MacOS" height="35vh" title="UNIX > DOS">
<a href="https://www.gnu.org/software/emacs/" target="_blank" rel="noopener noreferrer" title="The best code editor"><img src="{Emacs}" alt="Made with GNU Emacs" height="35vh"></a>

</div>

<style>
hr {
margin-top: -1em;
margin-left: -0.2em
}
.alignRoundImg {
text-align: justify;
}
img {
padding-right: 0.25em;
}
</style>
