import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    icon: "book",
    prefix: "/docs/",
    children: [
      {
        text: "标点符号基础内容",
        prefix: "Basics/",
        children: [
          "intro", { text: "介绍", link: "#" },
          "type", { text: "种类", icon: "type" ,link: "type-of-punctuation" },
          "location", { text: "位置", icon: "location", link: "loc-and-writing-of-punctuation" }
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
