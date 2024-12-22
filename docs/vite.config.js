import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  previewLength: 62,
  buttonLabel: "Cerca",
  placeholder: "Cerca",
};

export default defineConfig({
    plugins: [SearchPlugin(options)],
})