<script lang="ts">
    import { LayoutDashboard } from 'lucide-svelte';
    import { MessageSquare } from 'lucide-svelte';
    import { ImagePlus } from 'lucide-svelte';
    import { Settings } from 'lucide-svelte';
    import { LogIn } from 'lucide-svelte';
    import { ClipboardPen } from 'lucide-svelte';
	import Navigation from './navigation.svelte';

	

    const sidebarElement = [
        {
            name: 'Studio',
            icon: LayoutDashboard,
            link: "/studio"
        },
        {
            name: 'Conversation',
            icon: MessageSquare,
            link: "/conversation"
        },
        {
            name: 'Image Generation',
            icon: ImagePlus,
            link: "/image-generation"
        },
        {
            name: 'Settings',
            icon: Settings,
            link: "/settings"

        },
        {
            name: 'Sign In',
            icon: LogIn,
            link: "/sign-in"
        },
        {
            name: 'Sign Up',
            icon: ClipboardPen,
            link: "/sign-up"
        }
    ];
    
</script>

<Navigation />
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
     <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">

              {#each sidebarElement as { name, icon, link } }
                <li>
                    <a href={link} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {#if icon}
                            <svelte:component this={icon} />
                        {/if}
                        <span class="ms-3">{name}</span>
                    </a>
                </li>   
              {/each}
        </ul>
     </div>
  </aside>
  
 
  