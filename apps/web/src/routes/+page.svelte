<script lang="ts">
	import { MyCounterButton } from 'ui';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<MyCounterButton />

{#each data.countries_countries ?? [] as country}
	<div>{country.name}</div>
{/each}
