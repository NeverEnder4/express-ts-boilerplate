import { Router, Request, Response } from "express";

const route = Router();

export default (app: Router): void => {
  app.use("/", route);

  route.get("/", (req: Request, res: Response) => {
    res.send("Express server with TS");
  });
};
