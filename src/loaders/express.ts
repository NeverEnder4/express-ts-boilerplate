import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { prefix } from "@/config";
import routes from "@/api";
import { ExpressLoaderArgs } from "./types";

export default async ({ app }: ExpressLoaderArgs): Promise<void> => {
  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Transforms the raw string of req.body into json
  app.use(express.json());

  // Parses the incoming request with urlencoded payloads
  app.use(express.urlencoded({ extended: true }));

  // Setup api routes
  app.use(prefix.api, routes());

  /// catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err: ResponseError = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res
        .status(err.status || 401)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
