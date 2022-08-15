import { config } from "dotenv";

config();

interface Env {
  port: string | number;
  nodeEnv: string | undefined;
}

export const env: Env = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV,
};
