<script setup lang="ts">
	import ProductCard from "@/components/ProductCard.vue";
</script>


<template>
	<div class="container">
		<ProductCard 
			text="Глубина шторма"
		/>
		<ProductCard
			custom-class="new"
			text="Электро-лазурь"
		/>
		<ProductCard
			custom-class="top"
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
