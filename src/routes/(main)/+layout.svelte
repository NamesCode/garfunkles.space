<script>
 import '$lib/css/styles.css';
 import Navbar from '$lib/components/navbar.svelte';
</script>

<html lang="en-GB">
    <title>Garfunkles.space</title>
    <Navbar />
</html>

<style>
 html {
     background-color: #000000;
     background-image: url('$lib/assets/stars.gif');
 }
</style>

<slot></slot>
