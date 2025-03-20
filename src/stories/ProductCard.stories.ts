import type { Meta, StoryObj } from "@storybook/vue3";
import ProductCard from "@/components/ProductCard.vue";


// Описание компонента
const componentDescription = `
Компонент карточки товара для отображения информации о продукте. 
 
> **Примечание:** Использует псевдоприватные кастомные свойства для гибкой стилизации.

### Псевдоприватные кастомные свойства:

| Имя свойства     |  Значение по умолчанию  | Описание                    |
|------------------|-------------------------|-----------------------------|
| \`--_bg-color\`  | \`#123E66\`           | Основной цвет фона компонента. Используется в \`background\`, \`color\`, \`box-shadow\`. |
| \`--_size\`      | \`200px\`               | Размер карточки. Определяет значения \`height\` и \`width\`. | 
`;

// Метаданные
const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      }
    }
  }
};

type Story = StoryObj<typeof ProductCard>;

// Истории
export const Default: Story = {
  args: {
    text: "Пример текста",
    customStyle: {
      "--bg-color": "",
      "--size": ""
    },
  },
};

export const StormDepth: Story = {
  args: {
    text: "Глубина шторма",
    customStyle: { 
      "--bg-color": "#2E9AFF", 
      "--size": "250px" 
    }
  },
};

export const SugarCotton: Story = {
  args: {
    text: "Сахарская вата",
    customStyle: { 
      "--bg-color": "#F498AD" 
    }
  },
};

export default meta;