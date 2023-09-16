import games, { gamesPath } from "./games";
import health, { healthPath } from "./health";

const routes = [
  { path: gamesPath, handlers: [games] },
  { path: healthPath, handlers: [health] },
];

const basePath = "thinkbox";

export default routes.concat(
  routes.map((route) => {
    return { path: `/${basePath}${route.path}`, handlers: route.handlers };
  })
);
