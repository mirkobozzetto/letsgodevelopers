import { notion } from "@/lib/notion";
import { ExtendedRecordMap } from "notion-types";

const rootPageID = "3f623add4aa04ab9961a64383638f5bb";

async function getData(rootPageID: string) {
  return await notion.getPage(rootPageID);
}

export default async function NotionRoot() {
  const data: ExtendedRecordMap = await getData(rootPageID);
  return (
    <>
      {/*  */}
      {/*  */}
    </>
  );
}
