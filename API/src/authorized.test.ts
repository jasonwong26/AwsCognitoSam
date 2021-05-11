import { Event } from "./_types";
import { handler } from "./authorized";

describe("Authorized Handler", () => {
  it("executes for normal case", async () => {
    const input: Event = {
      httpMethod: "GET",
      path: "/",
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
        path: "/",
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
    expect(Object.keys(output.headers as Record<string, unknown>).length).toEqual(4);
    expect(output.body).toContain("Authorized response");
  });
});