import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "中文标点符号用法",
  description: "中文写作、文字交流中的，标点符号用法建议。",

  theme,

  // Enable it with pwa
  shouldPrefetch: true,
});
