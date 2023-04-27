const { Client } = require('@notionhq/client');

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: NOTION_API_KEY });

const handler = async function (event) {
  try {
    // Query the Notion database
    const response = await notion.databases.query({ database_id: NOTION_DATABASE_ID });

    // Fetch the content of each page
    const pagesWithContent = await Promise.all(
      response.results.map(async (page) => {
        const pageContent = await notion.blocks.children.list({ block_id: page.id });

        return {
          ...page,
          content: pageContent,
        };
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ results: pagesWithContent }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

module.exports = { handler };
