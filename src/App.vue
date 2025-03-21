<script setup lang="ts">
	import ProductCard from "@/components/ProductCard.vue";
</script>


<template>
	<div class="container">
		<div class="product-row first">
			<ProductCard 
				text="Глубина шторма"
			/>
		</div>
		<div class="product-row second">
			<ProductCard
				text="Электро-лазурь"
			/>
		</div>
		<div class="product-row third">
			<ProductCard
				text="Сахарская вата"
			/>
		</div>
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

	.product-row {
		&.second {
			--bg-color: #2E9AFF;
			--size: 250px;
		}
		&.third {
			--bg-color: #F498AD;
		}
	}
</style>
