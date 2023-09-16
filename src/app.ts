import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./controllers";
import * as middleware from "./middleware";

dotenv.config();

const app: express.Express = express();
const port = process.env.PORT ?? 8000;

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

routers.forEach((router) => app.use(router.path, ...router.handlers));

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(port, () => {
  console.log(`Server is hosted on port ${port}`);
});
