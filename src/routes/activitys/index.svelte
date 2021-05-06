<script>
	import BouncingLoader from '$lib/ui/BouncingLoader.svelte';
	import Activity from './_active.svelte';

	async function getActivitys() {
		const { data } = await fetch(
			`${import.meta.env.VITE_SVELTEKIT_API_PATH}/api/activity`
		).then(res => res.json());

		return data;
	}
</script>

<svelte:head>
	<title>薄荷活动 - 薄荷BOHE加速器</title>
	<meta name="keywords" content="网游加速器,薄荷bohe活动,薄荷bohe福利" />
	<meta
		name="description"
		content="薄荷加速器专业的网络游戏加速工具，完美加速漫威复仇者联盟、彩虹六号、GTA5、糖豆人、无限法则、NBA2K21、战地等上百款海外游戏，有效解决游戏中出现的延迟、丢包、卡顿等问题"
	/>
</svelte:head>

<section class="mx-auto py-4">
	<ul class="activitys grid grid-flow-row-dense gap-y-4">
		{#await getActivitys()}
			<BouncingLoader />
		{:then { list }}
			{#each list as activity}
				<Activity {activity} />
			{/each}
		{/await}
	</ul>
</section>

<style lang="scss">
	section {
		width: 1200px;
	}
</style>
