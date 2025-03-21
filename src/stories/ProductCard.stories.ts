import type { Meta, StoryObj } from "@storybook/vue3";
import ProductCard from "@/components/ProductCard.vue";


// Тип пропсов компонента ProductCard
type ProductCardProps = InstanceType<typeof ProductCard>["$props"];

// Интерфейс аргументов для историй
interface IStoryArgs extends ProductCardProps {
  bgColor: string;
  size: string;
};

// Тип объекта истории
type Story = StoryObj<IStoryArgs>;


// Описание компонента
const component = `
Компонент карточки товара для отображения информации о продукте. 
 
> **Примечание:** Использует псевдоприватные кастомные свойства для гибкой стилизации.

### Псевдоприватные кастомные свойства:

| Имя свойства     |  Значение по умолчанию  | Описание                    |
|------------------|-------------------------|-----------------------------|
| \`--_bg-color\`  | \`#123E66\`           | Основной цвет фона компонента. Используется в **background**, **color**, **box-shadow**. |
| \`--_size\`      | \`200px\`               | Размер карточки. Определяет значения **height** и **width**. | 
`;

// Пример кода компонента
const code = `
<template>
  <div class="product-card first">
    <ProductCard text="Пример текста"/>
  </div>
</template>

<style scoped>
  .product-card.first {
    --bg-color: #123E66;
    --size: 200px;
  }
</style>
`;

// Метаданные
const meta: Meta<IStoryArgs> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    bgColor: { 
      control: "color", 
      name: "--bg-color",
      description: "Основной цвет фона компонента. Используется в **background**, **color**, **box-shadow**.",
      table: { category: "CSS Variables" }
    },
    size: { 
      control: "text", 
      name: "--size",
      description: "Размер карточки. Определяет значения **height** и **width**.",
      table: { category: "CSS Variables" } 
    }
  },
  parameters: {
    docs: {
      description: { component },
      source: { code }
    }
  }
};


// Истории
export const Default: Story = {
  args: { 
    text: "Пример текста",
    bgColor: "#123e66",
    size: "200px" 
  },
  render: (args) => ({
    components: { ProductCard },
    setup: () => ({ args }),
    template: `
      <div
        class="product-card" 
        :style="{
          '--bg-color': args.bgColor,
          '--size': args.size
        }"
      >
        <ProductCard :text="args.text"/>
      </div>
    `
  })
};

export const StormDepth: Story = {
  ...Default,
  args: { 
    text: "Глубина шторма",
    bgColor: "#2E9AFF",
		size: "250px" 
  },
};

export const SugarCotton: Story = {
  ...Default,
  args: { 
    text: "Сахарская вата",
    bgColor: "#F498AD" 
  },
};

export default meta;