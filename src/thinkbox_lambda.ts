import { Server } from "http";
import { createServer, proxy } from "aws-serverless-express";
import app from "./app";
import { APIGatewayEvent, Context } from "aws-lambda";

let server: Server | undefined = undefined;

const thinkboxHandler = async (event: APIGatewayEvent, context: Context) => {
  if (!server) {
    server = createServer(app, undefined, [
      "application/vnd.openxmlformats",
      "application/gzip",
    ]);
  }
  const response = await proxy(server, event, context, "PROMISE").promise;

  return response;
};

export const handler = thinkboxHandler;
