import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();

export const healthPath = "/health";

router.get("/", (req: Request, res: Response) => {
  const isHealth = true;

  res.json({
    health: {
      isRunning: isHealth,
    },
  });
});

export default router;
