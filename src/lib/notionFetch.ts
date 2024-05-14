const fetchNotionData = (rootPageID: string, secret: string) => {
  return fetch(`https://api.notion.com/v1/databases/${rootPageID}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Notion-Version": "2022-06-28",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erreur:", error);
    });
};

export default fetchNotionData;
