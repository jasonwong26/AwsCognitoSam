import { Event } from "./_types";
import { handler } from "./open";

describe("Unauthorized Handler", () => {
  it("executes for normal case", async () => {
    const input: Event = {
      httpMethod: "GET",
      path: "/open",
      pathParameters: {},
      queryStringParameters: {},
      multiValueQueryStringParameters: {},
      headers: {},
      multiValueHeaders: {},
      body: "",
      resource: "",
      stageVariables: {},
      requestContext: {
        accountId: "",
        apiId: "",
        authorizer: {},
        httpMethod: "GET",
        identity: {
          accessKey: "",
          accountId: "",
          apiKey:"",
          apiKeyId: "",
          caller:"",
          cognitoAuthenticationProvider: "",
          cognitoAuthenticationType: "",
          cognitoIdentityId: "",
          cognitoIdentityPoolId: "",
          principalOrgId: "",
          sourceIp: "",
          user: "",
          userAgent: "",
          userArn: ""
        },
        path: "/open",
        protocol: "",
        requestId: "",
        requestTimeEpoch: 0,
        resourceId: "",
        resourcePath: "",
        stage: "DEV"
      },
      isBase64Encoded: false
    };

    const output = await handler(input);
    expect(output).toBeTruthy();
    expect(output.statusCode).toEqual(200);
    expect(output.body).toContain("Open Handler response");
  });
});