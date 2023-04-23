import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  try {
    const data = {
      message: "Test message from Netlify Function",
    };

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};