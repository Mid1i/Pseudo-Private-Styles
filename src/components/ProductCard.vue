<script setup lang="ts">
	defineProps<{ 
		customClass?: string;
		text: string; 
	}>();
</script>	


<template>
	<div :class="['product-card', customClass]">{{ text }}</div>
</template>


<style lang="scss" scoped>
	.product-card {
		--_bg-color: var(--bg-color, #123E66);
		--_padding: var(--padding, 20px);

		align-items: center;
		display: flex;
		justify-content: center;
		aspect-ratio: 1;
		padding: var(--_padding);

		background: var(--_bg-color);
		box-shadow: 10px 10px 5px 0 hsl(from var(--_bg-color) h s calc(l * 0.7));

		font-size: 20px;
		font-weight: 500;
		color: hsl(from var(--_bg-color) 0 0 calc((50 - l) * 100));

		&.new {
			--bg-color: #2E9AFF;
			--padding: 50px;
		}
		&.top {
			--bg-color: #F498AD;
		}
	}
</style>