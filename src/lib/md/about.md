<script>
const birthday = new Date("2008/11/23"); 
var ageDifMs = Date.now() - birthday;
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1970);

import { langData, stuffIWantToDo, socials } from '$lib/contentData.js';
import Mozilla from '$lib/assets/monazilla.gif';
import Rust from '$lib/assets/original_ferris.svg';
import Apple from '$lib/assets/apple_logo.svg';
import NixOS from '$lib/assets/nixos_logo.svg';
import VeryNix from '$lib/assets/verynix.png';
import HateMS from '$lib/assets/hatems.gif';

</script>

# Hallo!

<div style="margin-top: -1.5em">

Thanks for coming to my minuscule corner of the internet!<br>
I'm a {age} year old software developer (hobbyist?) from Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿<br>
My interests are typically a wide area of things ranging from tinkering with embedded projects, DevOPs and computer science to 3d design and science.

Studying for <hover-info>GCSE's<hover-info-text> Computer science, product design and triple science</hover-info-text></hover-info> (.┰ω┰.)


## Contact me!

<div style="margin-top: -1.5em; padding-left: 1em;">

{#each socials as {type, name, href}}

<div style="margin-top: -1em;">

- {type}: [{name}]({href})

</div>

{/each}

</div>

<div style="padding-bottom: 0.1em;">

## What I use <sub style="font-size: 0.3em;">(I have no clue what I'm meant to put on this website so this filler will have to do)</sub>

<hr style="margin-top: -1.3em; margin-left: -0.1em;">

</div>

<div style="margin-top: -1em;">

<p>Everything I use, along with configuration files and theming, is available in my <a href="https://github.com/NamesCode/.Dotfiles" target="_blank" rel="noopener noreferrer">Nix dotfiles </a><img src="{VeryNix}" alt="Nix logo with sunglasses on"/></p>

<div style="padding-left: 1em;">

### Code editor

<div style="margin-top: -1em">

~~I use Doom Emacs since I can use both Emacs bindings and VIM bindings in a great looking GUI with low resource usage. Catppuccin Mocha as well btw.~~

I no longer use Emacs in favor of Neovim. Emacs was just too buggy and a pain to get working.

I have used other editors in the past, for example VScode, but I never really liked them.

</div>

### OS <img src="{Apple}" alt="MacOS" height="20vh">

<div style="margin-top: -1em">

I daily drive <hover-info>macOS<hover-info-text>However it has been hardened using <a href="https://github.com/drduh/macOS-Security-and-Privacy-Guide" target="_blank" rel="noopener noreferrer">this guide</a></hover-info-text></hover-info> but I use <hover-info>Linux<hover-info-text><span style="display: flex;">Specifically NixOS<img src="{NixOS}" alt="NixOS logo" style="height: 1em; padding-left: 0.5em;"></span></hover-info-text></hover-info> on server and any other machine. <br> I am never touching that vile piece of software called "Microsoft Windows" ever again. ![I hate Microsoft]({HateMS})
</div>

### Language of choice <img src="{Rust}" alt="Rust" height="15vh">

<div style="margin-top: -1em">

I don't really have a language of choice, I will just go with whatever is easiest or that I want to use. However, I am quite fond of Rust.

</div>

### Web-browser <img src="{Mozilla}" alt="Mozilla" height="15vh">

<div style="margin-top: -1em">

I only use the finest browser. Which is, of course, Firefox. <br>
In all seriousness, I use hardened version of Firefox as my web-browser. <br> 
I may switch back to <a href="https://librewolf.net/" target="_blank" rel="noopener noreferrer">Librewolf</a> at some point since I dislike quite a few <hover-info>things<hover-info-text>e.g. The Firefox profiles</hover-info-text></hover-info> in Firefox.

I've also been thinking of switching to a webkit based browser, since Firefox is a bit of a sinking ship, but I haven't heard of any good FOSS webkit browsers.

<p><a href="https://nyxt.atlas.engineer/" target="_blank" rel="noopener noreferrer">Nyxt</a> also looks pretty cool as it's engine agnostic and hackable like Emacs.</p>

</div>

</div>
</div>
</div>

## Other stuff

<div style="margin-top: -1.5em;">
<div style="padding-left: 1em;">

<details>
<summary>Programming languages I know or want to learn</summary>

<div style="margin-top: -1em">

- Rust <sub style="padding-bottom: 5px">_(segfaults scare me)_</sub>

{#each langData as {lang, info}}

<div style="margin-top: -1em;">

- {lang} {#if info != ""}<sub style="padding-bottom: 5px">_({info})_</sub>{/if}

</div>

{/each}

</div>

</details>

<details>
<summary>Stuff I wanna mess around with / things I want to do</summary>

<div style="margin-top: -1em">

- Go to a Will Wood concert and meet the fellow <sub style="padding-bottom: 5px">_(He makes the funky music)_</sub>

{#each stuffIWantToDo as {thing, info}}

<div style="margin-top: -1em;">

- {thing} {#if info != ""}<sub style="padding-bottom: 5px">_({info})_</sub>{/if}

</div>

{/each}

</div>

</details>
</div>

</div>

<style>
p img {
    margin-bottom: -0.25em;
    /*padding-left: 0.5em;*/
    height: 1.2em;
}
</style>
