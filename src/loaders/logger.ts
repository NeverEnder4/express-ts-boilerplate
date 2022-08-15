import winston, { Logger } from "winston";
import Transport from "winston-transport";

import { log, env } from "@/config";

const transports: Transport[] = [];
if (env.nodeEnv !== "development" && env.nodeEnv !== "test") {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.cli(), winston.format.splat()),
    })
  );
}

const LoggerInstance: Logger = winston.createLogger({
  level: log.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
});

export default LoggerInstance;
