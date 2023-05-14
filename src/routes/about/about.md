<script>
const birthday = new Date("11/23/2008"); // stupid american format
var ageDifMs = Date.now() - birthday;
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1970);

import { langData, stuffIWantToDo, socials } from '$lib/contentData.js';

</script>

# Hallo!

<div style="margin-top: -1.5em">

Thanks for coming to my miniscule corner of the internet where I assumed no one would visit!<br> I'm a {age} year old software developer (hobbyist?) from wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿<br>
I have an interest in all STEM subjects with the largest being computer science.

I am currently studying for GCSE's 0_o

## Socials

<div style="margin-top: -1.5em; padding-left: 1em;">

{#each socials as {type, name, href}}

<div style="margin-top: -1em;">

- {type}: [{name}]({href})

</div>

{/each}

</div>

## What I use <sub style="font-size: 0.3em;">(I have no fucking clue what i'm meant to put on this website so this filler will have to do)</sub>

<div style="margin-top: -1em; padding-left: 1em;">

### Code editor

<div style="margin-top: -1em">

I use Doom Emacs since I can use both Emacs bindings and VIM bindings in a great looking GUI with low resource usage. Catppuccin Mocha aswell btw.

I have used other editors in the past, for example VScode, but I never really liked them.

</div>

### OS

<div style="margin-top: -1em">

I daily drive MacOS but I use linux on server and any other machine. <br> I am never touching that filthy fucking cretin called "Microsoft Windows" ever again. If I have to use windows I will personally claw out the organs of every single Microsoft bigwig. This is a threat.

</div>

### Language of choice

<div style="margin-top: -1em">

I don't really have a language of choice, I will just go with whatever is easiest or that I want to use. However, I am quite fond of rust.

</div>

### Webbrowser

<div style="margin-top: -1em">

I only use the finest browser, which is of course firefox. <br>
In all seriousness I use librewolf as my webbrowser since it resists fingerprinting and data tracking well to a point and its essentially unmozilla'd firefox.

</div>

</div>
</div>

## Other shit

<div style="margin-top: -1.5em;">
<div style="padding-left: 1em;">

<details>
<summary>Programming languages I know or want to learn</summary>

<div style="margin-top: -1em">

- rust

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

- building a linux OS from the bare minimum<sub style="padding-bottom: 5px">_(That way I could finetune everything to how I want it)_</sub>

{#each stuffIWantToDo as {thing, info}}

<div style="margin-top: -1em;">

- {thing} {#if info != ""}<sub style="padding-bottom: 5px">_({info})_</sub>{/if}

</div>

{/each}

</div>

</details>

<details>
<summary>More info</summary>

<div style="margin-top: -1em">

My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead– murdered by my brother-in-law, Hank Schrader. Hank has been building a meth empire for over a year now, and using me as his chemist. Shortly after my 50th birthday, he asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using connections that he made through his career with the DEA. I was... astounded. I... I always thought Hank was a very moral man, and I was particularly vulnerable at the time – something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me in on a ride-along and showed me just how much money even a small meth operation could make. And I was weak. I didn't want my family to go into financial ruin, so I agreed. Hank had a partner, a businessman named Gustavo Fring. Hank sold me into servitude to this man. And when I tried to quit, Fring threatened my family. I didn't know where to turn. Eventually, Hank and Fring had a falling-out. Things escalated. Fring was able to arrange – uh, I guess... I guess you call it a "hit" – on Hank, and failed, but Hank was seriously injured. And I wound up paying his medical bills, which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge. Working with a man named Hector Salamanca, he plotted to kill Fring. The bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but I'm a coward. I wanted to go to the police, but I was frightened. Hank had risen to become the head of the Albuquerque DEA. To keep me in line, he took my children. For three months, he kept them. My wife had no idea of my criminal activities, and was horrified to learn what I had done. I was in hell. I hated myself for what I had brought upon my family. Recently, I tried once again to quit, and in response, he gave me this. [Walt points to the bruise on his face left by Hank in "Blood Money."] I can't take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. All I could think to do was to make this video and hope that the world will finally see this man for what he really is.

</div>

</details>
</div>

</div>
