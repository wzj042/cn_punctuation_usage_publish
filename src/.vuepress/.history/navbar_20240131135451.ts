import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    prefix: "/docs/",
    children: [
      {
        text: "标点符号",
        prefix: "Basics/",
        children: 
          [
            "/",
            "type-of-punctuation", 
            "meaning-form-usage" ,  
            "loc-and-writing-of-punctuation" 
          ],
      },
      "faq", "reference"
    ],
  }
]);
