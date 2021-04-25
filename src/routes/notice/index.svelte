<script>
	async function getNews() {
		const { data } = await fetch(
			`https://webapi.bohejiasuqi.com/api/news?${new URLSearchParams({
				class_type: 0
			})}`
		).then(res => res.json());

		return data;
	}
</script>

<svelte:head>
	<title>资讯 - 薄荷BOHE加速器</title>
	<meta name="keywords" content="薄荷BOHE加速器" />
	<meta
		name="description"
		content="薄荷加速器专业的网络游戏加速工具，完美加速漫威复仇者联盟、彩虹六号、GTA5、糖豆人、无限法则、NBA2K21、战地等上百款海外游戏，有效解决游戏中出现的延迟、丢包、卡顿等问题"
	/>
</svelte:head>

<section>
	<ul class="activitys flex flex-col">
		{#await getNews()}
			加载中...
		{:then { list }}
			{#each list as news}
				<li>
					{news.title}
				</li>
			{/each}
		{/await}
	</ul>
</section>
