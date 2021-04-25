<script>
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

<section class="support">
	<div class="support-header">
		<ul class="support-tags">
			<li class="support-tag">全部</li>
		</ul>
	</div>

	<div class="support-body">
		{#await getGames()}
			加载中...
		{:then games}
			{#each games.slice(0, 40) as game}
				{game.title}
			{/each}
		{/await}
	</div>
</section>
