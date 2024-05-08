// @ts-check

const NotionParse = require("@kodaps/notion-parse");
const dotenv = require("dotenv");

dotenv.config();

const go = async () => {
  if (process.env.NOTION_SECRET) {
    await NotionParse.parseNotion(process.env.NOTION_SECRET, "../app/blog/", [
      {
        databaseId: process.env.NOTION_BLOG_DB || "",
        contentType: "Blog",
      },
      // {
      //   databaseId: process.env.NOTION_POST_DATABASE_ID || "",
      //   contentType: "Post",
      //   languageField: "lang",
      //   filterFields: ["translation", "createdAt", "status", "Type"],
      // },
    ]);
  }
};

go().then(() => {
  console.log("Done");
});
