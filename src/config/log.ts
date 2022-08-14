interface Log {
  level: string;
}

export const log: Log = {
  level: process.env.LOG_LEVEL || "silly",
};
