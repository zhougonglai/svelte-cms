<script context="module">
	export async function load({ page: { query } }) {
		return {
			props: {
				query
			}
		};
	}
</script>

<script>
	export let query = { tab: 'default' };

	const tabs = {
		menus: {
			default: 'BOHE加速器'
		}
	};
</script>

<section>
	<div class="tabs">
		<div class="tab-bars">
			<div class="tab-bar">
				{tabs.menus[query.tab]}
			</div>
		</div>
	</div>
</section>
