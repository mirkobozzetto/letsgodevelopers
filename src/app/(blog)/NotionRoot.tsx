import { notion } from "@/lib/notion";
import { ExtendedRecordMap } from "notion-types";

// const rootPageID = "3f623add4aa04ab9961a64383638f5bb";
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
      {/*  */}
    </>
  );
}
