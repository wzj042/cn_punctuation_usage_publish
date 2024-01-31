import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    icon: "book",
    prefix: "/docs/",
    children: [
      {
        text: "基础内容",
        prefix: "Basics/",
        children: [
          "intro", { text: "介绍", link: "#" },
          "type", { text: "标点符号种类", link: "type-of-punctuation" }
        ],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  }
]);
