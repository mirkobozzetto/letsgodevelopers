import { notion } from "@/lib/notion";
import { ExtendedRecordMap } from "notion-types";

const rootPageID = process.env.NOTION_BLOG_DB!;

async function getData(rootPageID: string): Promise<ExtendedRecordMap> {
  return await notion.getPage(rootPageID);
}

export default async function NotionRoot() {
  const data: ExtendedRecordMap = await getData(rootPageID);
  console.log("notion page data", data);

  return (
    <>
      {/* <h1>come on !</h1> */}
      {/*  */}
    </>
  );
}
