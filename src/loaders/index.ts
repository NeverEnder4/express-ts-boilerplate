import expressLoader from "./express";

import { ExpressLoaderArgs } from "./types";
import Logger from "./logger";

export default async ({ app }: ExpressLoaderArgs): Promise<void> => {
  await expressLoader({ app });
  Logger.info("✌️ Express loaded");
};
