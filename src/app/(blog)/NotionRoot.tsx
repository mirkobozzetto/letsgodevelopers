import { notion } from "@/lib/notion";
import { ExtendedRecordMap } from "notion-types";

const rootPageID = process.env.NOTION_BLOG_DB!;
const secret = process.env.NOTION_SECRET!;

async function getData(rootPageID: string): Promise<ExtendedRecordMap> {
  return await notion.getPage(rootPageID);
}

export default async function NotionRoot() {
  const data: ExtendedRecordMap = await getData(rootPageID);
  // console.log("notion page data", data);

  fetch(`https://api.notion.com/v1/databases/${rootPageID}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Notion-Version": "2021-08-16",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Erreur:", error);
    });

  return (
    <>
      {/* <h1>come on !</h1> */}
      {/*  */}
    </>
  );
}
