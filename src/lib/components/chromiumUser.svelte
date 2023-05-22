<script>
 import Chrome from '$lib/assets/anything_but_chrome.gif'
 import Exit from '$lib/assets/retro-os-icons/error3.png'

 export var showContent;

 function close() {
     showContent = false;
     window.location.reload();
 }
</script>

<div style="position: fixed;
            top: 50%;
            left: 50%;
            margin-top: -100px;
            margin-left: -200px;
            ">
{#if showContent}
    <div style="margin-top: 35vh; display: flex; align-items: center; padding-bottom: 1.5vh; padding-left: 1em;">        <div style="align-items: center; margin: auto; padding-left: 1em; padding-right: 1em;">
        <div style="border: 2.5px double var(--text); background-color: var(--base);">
            <span style="display: flex; align-items: center; justify-content: space-between; padding-left: 1em;">
                <h3>Warning!</h3>
                <img src="{Exit}" title="Close warning" on:click={close} alt="Close warning">
            </span>
            <p style="margin-top: -0.65em;">You are using a Chromium based browser which could lead to this website looking weird. Due to Chromiums complete hate for following the standard properly this website will not look as good as it would if you used a Gecko or WebKit based browser. If you switch to a better browser like <a href="https://www.mozilla.org/en-GB/firefox/new/" title="Download Firefox" target="_blank" rel="noopener noreferrer">FireFox</a> or <a href="https://qutebrowser.org/doc/install.html#_installing_qutebrowser" title="Download QTBrowser" target="_blank" rel="noopener noreferrer">QTBrowser</a> then it should look better.</p>
        </div>
        </div>
</div>
{/if}
    </div>
<style>
 p {
     padding-left: 1em;
     padding-right: 1em;
 }
 img {
     padding-right: 0.3em;
 }
</style>
