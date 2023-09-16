import { NextFunction, Request, Response } from "express";

interface ResponseError extends Error {
  status?: number;
  statusCode?: number;
  httpStatus?: number;
  errorCode?: number;
  errorKey?: string;
  body?: any;
}

export const ErrorCodes = {
  NotFound: (url: string) => ({
    errorCode: 1001,
    errorKey: "NotFound",
    message: `The url ${url} was not able to be matched to an endpoint`,
    httpStatus: 404,
  }),
  GeneralError: {
    errorCode: 1002,
    errorKey: "GeneralError",
    message: "General Error Occurred",
    httpStatus: 500,
  },
};

export const errorHandler = (
  error: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error.httpStatus) {
    error = ErrorCodes.GeneralError as ResponseError;
    error.httpStatus = ErrorCodes.GeneralError.httpStatus;
  }

  res.status(error.httpStatus);
  res.send({
    message: error.message,
    errorCode: error.errorCode,
    errorKey: error.errorKey,
    body: error.body,
  });
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const url = `${req.method}:${req.path}`;

  next(ErrorCodes.NotFound(url));
};
