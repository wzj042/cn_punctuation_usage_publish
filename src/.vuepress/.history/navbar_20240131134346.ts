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
          "location", { text: "位置",  link: "loc-and-writing-of-punctuation" }
        ],
      }
    ],
  }
]);
