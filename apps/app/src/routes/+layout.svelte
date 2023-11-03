<script lang="ts">
	import '../app.postcss';
	import { Drawer, AppShell, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';
	import { client } from "$lib/wundergraph";
	import {accessTokenStore} from "$lib/stores/accessTokenStore";
	import {onMount} from "svelte";

	export let data: LayoutData;

	onMount(() => {
		accessTokenStore.subscribe((token) => {
			if (!token) {
				token = sessionStorage.getItem("access_token");
			}
			if (!token) {
				return;
			}
			client.setAuthorizationToken(token);
		});
	});

	initializeStores();
	const drawerStore = getDrawerStore();
</script>

<QueryClientProvider client={data.queryClient}>
	<Drawer bgDrawer="bg-white" height="h-auto">
		<ComposeView view={$drawerStore.meta} />
	</Drawer>

	<AppShell>
		<slot />
	</AppShell>
</QueryClientProvider>
