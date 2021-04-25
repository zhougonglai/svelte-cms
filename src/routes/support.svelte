<script>
	import BouncingLoader from '$lib/ui/BouncingLoader.svelte';
	const allType = [
		{
			key: 'all',
			label: '全部'
		}
	];
	const hotAndFree = [
		{
			key: 'is_hot',
			label: '热门'
		},
		{
			key: 'is_free',
			label: '限免'
		}
	];

	const otherType = [
		{
			key: 'steam',
			label: 'steam'
		},
		{
			key: 'origin',
			label: 'origin'
		},
		{
			key: 'uplay',
			label: 'uplay'
		},
		{
			key: 'xbox',
			label: 'xbox'
		},
		{
			key: 'ps4s',
			label: 'ps4s'
		},
		{
			key: 'witch',
			label: 'witch'
		}
	];
	async function getGames() {
		return await fetch(
			`https://jiasu.bohe.com/config/game.json?${new URLSearchParams({
				lang: 'zh_CN',
				region_code: 1
			})}`
		).then(res => res.json());
	}
</script>

<svelte:head>
	<title>游戏支持 - 薄荷BOHE加速器</title>
	<meta name="keywords" content="彩虹六号加速器、GTA5加速器、糖豆人加速器" />
	<meta
		name="description"
		content="薄荷加速器专业的网络游戏加速工具，完美加速漫威复仇者联盟、彩虹六号、GTA5、糖豆人、无限法则、NBA2K21、战地等上百款海外游戏，有效解决游戏中出现的延迟、丢包、卡顿等问题"
	/>
</svelte:head>

<section class="support mx-auto my-10">
	<div class="support-header flex justify-between">
		<ul class="support-tags flex gap-x-4">
			{#each allType.concat(hotAndFree, otherType) as type}
				<li class="support-tag cursor-pointer">{type.label}</li>
			{/each}
		</ul>

		<div class="support-search">
			<input
				class="search outline-none px-5 transition shadow hover:shadow-lg"
				type="search"
			/>
		</div>
	</div>

	<ul class="support-body grid grid-cols-5 gap-5 mt-5">
		{#await getGames()}
			<BouncingLoader />
		{:then games}
			{#each games.slice(0, 40) as game}
				<li class="game">{game.title}</li>
			{/each}
		{/await}
	</ul>
</section>

<style lang="scss">
	.support {
		width: 1200px;
		min-height: 600px;

		&-header {
			line-height: 40px;
			height: 40px;
		}

		&-search {
			.search {
				width: 360px;
				border-radius: 20px;
			}
		}
	}
</style>
