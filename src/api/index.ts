import { Router } from "express";
import api from "./routes/api";
import doc from "./routes/doc";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  api(app);
  doc(app);
  return app;
};
