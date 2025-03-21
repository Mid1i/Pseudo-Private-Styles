<script setup lang="ts">
	defineProps<{
		/**
		 * Текст, отображаемый внутри карточки.
		 *
		 * @type {string}
		 */
		text: string;
	}>();
</script>


<template>
	<div class="product-card">{{ text }}</div>
</template>


<style lang="scss" scoped>
	.product-card {
		--_bg-color: var(--bg-color, #123e66);
		--_size: var(--size, 200px);

		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--_size);
		width: var(--_size);
		aspect-ratio: 1;

		background: var(--_bg-color);
		box-shadow: 10px 10px 5px 0 hsl(from var(--_bg-color) h s calc(l * 0.7));

		font-size: 20px;
		font-weight: 500;
		color: hsl(from var(--_bg-color) 0 0 calc((50 - l) * 100));
	}
</style>
