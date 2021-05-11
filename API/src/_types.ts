import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

export type Event = Parameters<AsyncEventHandler>[0];
export type AsyncEventHandler = (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>;
