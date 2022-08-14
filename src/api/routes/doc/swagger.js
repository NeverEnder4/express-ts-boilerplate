const swaggerAutogen = require("swagger-autogen");

const path = require("path");

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:8080",
  schemes: ["http"],
  basePath: "/api",
};

const outputFile = "src/api/routes/doc/swagger-output.json";
const endpointsFiles = [path.join(__dirname, "../api.ts")];
swaggerAutogen()(outputFile, endpointsFiles, doc);
