import type { StorybookConfig } from "@storybook/vue3-vite";


const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|js)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  }
};


export default config;