import { AsyncEventHandler } from "./_types";

export const handler: AsyncEventHandler = async event => {
  console.log("input: ", event);
  return { 
    statusCode: 200, 
    headers: {
      "Access-Control-Allow-Headers" : "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET"
    },
    body: "Open Handler response." 
  };
};
