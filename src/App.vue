<script setup lang="ts">
	import ProductCard from "@/components/ProductCard.vue";
</script>


<template>
	<div class="container">
		<ProductCard 
			text="Глубина шторма"
		/>
		<ProductCard
			:custom-style="{ '--bg-color': '#2E9AFF', '--size': '250px' }"
			text="Электро-лазурь"
		/>
		<ProductCard
			:custom-style="{ '--bg-color': '#F498AD' }"
			text="Сахарская вата"
		/>
	</div>
</template>


<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		justify-content: center;
		gap: 50px;
		height: 100%;
		width: 100%;
	}
</style>
