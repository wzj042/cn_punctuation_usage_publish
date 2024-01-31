import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    prefix: "/docs/",
    children: [
      {
        text: "基础部分",
        prefix: "Basics/",
        children: 
          [
            "#",
            "type-of-punctuation", 
            "meaning-form-usage" ,  
            "loc-and-writing-of-punctuation" 
          ],
      },
      "Appendix/", "faq", "reference"
    ],
  }
]);
