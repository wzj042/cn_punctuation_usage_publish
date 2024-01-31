import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档内容",
      prefix: "/docs/",
      children: [
        {
          text: "基础部分",
          prefix: "Basics/",
          children:
            [
              "#",
              "type-of-punctuation",
              "meaning-form-usage",
              "loc-and-writing-of-punctuation"
            ],
        },
        "Appendix/", "faq", "reference"
      ],
    }
  ],
});
