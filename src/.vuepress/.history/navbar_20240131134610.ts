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
        text: "附录",
        prefix: "Appendix/",
        children: [
          "intro", { text: "附录表索引", link: "#" },
          "type", { text: "种类", link: "type-of-punctuation" },
          "usage", { text: "用法", link: "meaning-form-usage" },
          "location", { text: "位置",  link: "loc-and-writing-of-punctuation" }
        ],
      }
    ],
  }
]);
