import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    prefix: "/docs/",
    children: [
      {
        text: "标点符号基础内容",
        prefix: "Basics/",
        children: [
          "intro", { text: "介绍", link: "#" },
          "type", { text: "种类", link: "type-of-punctuation" },
          "usage", { text: "用法", link: "meaning-form-usage" },
          "location", { text: "位置",  link: "loc-and-writing-of-punctuation" }
        ],
      },
      {
        text: "常见问题",
        link: "/zh/faq.md",
        icon: "circle-question",
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        activeMatch: "^/zh/faq",
      },
    ],
  }
]);
