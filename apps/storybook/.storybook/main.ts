import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
  core: { disableTelemetry: true },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE ?? "/",
      plugins: [tailwindcss()],
    });
  },
};

export default config;
