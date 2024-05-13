import { notion } from "@/lib/notion";
import NotionRoot from "./(blog)/NotionRoot";

const rootPageId = "3f623add4aa04ab9961a64383638f5bb";

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}

export default function Home() {
  return (
    <>
      <NotionRoot />
    </>
  );
}
