import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    prefix: "/docs/",
    children: [
      {
        text: "主要内容",
        prefix: "Basics/",
        children: 
          [
            "README",
            "type-of-punctuation", 
            "meaning-form-usage" ,  
            "loc-and-writing-of-punctuation" 
          ],
      },
      "faq", "reference"
    ],
  }
]);
