import express, { Application } from "express";

import { env } from "./config";
import Logger from "./loaders/logger";

async function startServer() {
  const app: Application = express();

  await require("./loaders").default({ app });

  app
    .listen(env.port, () => {
      Logger.info(`
          ################################################
          🛡️  Server listening on port: ${env.port} 🛡️
          ################################################
        `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
