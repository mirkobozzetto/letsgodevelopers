import { notion } from "@/lib/notion";
import { ExtendedRecordMap } from "notion-types";

import fetchNotionData from "@/lib/notionFetch";

const rootPageID = process.env.NOTION_BLOG_DB!;
const secret = process.env.NOTION_SECRET!;

async function getData(rootPageID: string): Promise<ExtendedRecordMap> {
  return await notion.getPage(rootPageID);
}

export default async function NotionRoot() {
  const data: ExtendedRecordMap = await getData(rootPageID);
  // console.log("notion page data", data);

  fetchNotionData(rootPageID, secret).then((data) => console.log(data));

  return (
    <>
      {/* <h1>come on !</h1> */}
      {/*  */}
    </>
  );
}
