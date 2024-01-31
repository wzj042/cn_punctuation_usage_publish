import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "中文标点符号用法",
      prefix: "/docs/",
      children: [
        {
          text: "主要内容",
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
