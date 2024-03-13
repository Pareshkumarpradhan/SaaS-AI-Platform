<script>
	import { DarkMode } from 'flowbite-svelte';
	import { onMount } from 'svelte';

    // onMount
    onMount(() => {
        const userTheme = localStorage.getItem('colorTheme');
        console.log('userTheme', userTheme);
        const userTheme2 = window.matchMedia('(prefers-color-scheme: light)').matches? 'dark' : 'light';
        console.log('userTheme2', userTheme2);

        if (userTheme2 === 'dark') {
           console.log("Setting Dark Mode");
        } else {
            console.log("Setting Light Mode");
        }
    });

</script>

<div class="mx-10">
    <DarkMode />
    <h1>This is Home Page</h1>
</div>

  



