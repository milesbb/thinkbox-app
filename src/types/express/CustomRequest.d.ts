import { APIGatewayEvent, Context } from "aws-lambda";

type APIGateway = {
  apiGateway: {
    event: APIGatewayEvent;
    context: Context;
  };
};

declare global {
  export namespace Express {
    export interface Request extends APIGateway {}
  }
}
