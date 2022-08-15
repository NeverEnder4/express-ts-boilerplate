import express, { Express } from "express";
import supertest, { SuperTest, Test, Response } from "supertest";

let api: SuperTest<Test>;

async function loadTestServer(): Promise<void> {
  const app: Express = express();

  await require("src/loaders").default({ app });

  api = supertest(app);
}

loadTestServer();

export { api, Response };
