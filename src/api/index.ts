import { Router } from "express";
import api from "./routes/api";
import doc from "./routes/doc";

// guaranteed to get dependencies
export default (): Router => {
  const app = Router();
  api(app);

  // This route and corresponding docs are generated via swagger-autogen and swagger-ui-express
  doc(app);
  return app;
};
