<script lang="ts">
	import SideBar from "$lib/components/sideBar.svelte";

    
</script>

<SideBar />

<div class="p-4 sm:ml-64">
	<div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
	   <div class="grid grid-cols-3 gap-4 mb-4">
			<slot />
	   </div>
	</div>
 </div>