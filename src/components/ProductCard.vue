<script setup lang="ts">
	defineProps<{ 
		/**
		 * Объект с пользовательскими стилями для переопределения CSS-переменных.
     * Например, можно задать `--bg-color` или `--size`.
		 * 
		 * @type {Record<string, string>}
		 */
		customStyle?: Record<string, string>;
		/**
		 * Текст, отображаемый внутри карточки.
		 * 
		 * @type {string}
		 */
		text: string; 
	}>();
</script>	


<template>
	<div class="product-card" :style="customStyle">{{ text }}</div>
</template>


<style lang="scss" scoped>
	.product-card {
		--_bg-color: var(--bg-color, #123E66);
		--_size: var(--size, 200px);

		align-items: center;
		display: flex;
		justify-content: center;
		aspect-ratio: 1;
		height: var(--_size);
		width: var(--_size);

		background: var(--_bg-color);
		box-shadow: 10px 10px 5px 0 hsl(from var(--_bg-color) h s calc(l * 0.7));

		font-size: 20px;
		font-weight: 500;
		color: hsl(from var(--_bg-color) 0 0 calc((50 - l) * 100));
	}
</style>