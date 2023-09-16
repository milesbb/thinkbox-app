import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./controllers";
import * as middleware from "./middleware";

const applyMiddleware = (app: express.Express) => {
  dotenv.config();

  app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
  app.use(express.json({ limit: "2mb" }));

  routers.forEach((router) => app.use(router.path, ...router.handlers));

  app.use(middleware.notFound);
  app.use(middleware.errorHandler);
  return app;
};

export default applyMiddleware(express());
