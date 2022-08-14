import { config } from "dotenv";

config();

interface Env {
  port: string | number;
}

export const env: Env = {
  port: process.env.PORT || 8080,
};
