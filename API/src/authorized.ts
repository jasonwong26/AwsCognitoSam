import { AsyncEventHandler } from "./_types";

interface UserInfo {
  sub: string,
  'cognito:groups': string,
  'cognito:username': string,
  email: string
}

export const handler: AsyncEventHandler = async event => {
  console.log("input: ", event);
  console.log("authorizor: ", event.requestContext.authorizer);

  const userInfo: UserInfo = event.requestContext.authorizer?.claims;
  
  return { 
    statusCode: 200, 
    headers: {
      "Access-Control-Allow-Headers" : "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET",
      "Access-Control-Allow-Credentials": true
    },
    body: `Authorized response for user ${userInfo["cognito:username"]} (sub: ${userInfo.sub})`
  };
};
