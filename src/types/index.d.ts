interface ResponseError extends Error {
  status?: number | undefined;
}
