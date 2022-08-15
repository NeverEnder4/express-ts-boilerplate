import { expect, api, Response } from "../utils";
import { isIsoDate } from "../../utils/date";

describe("GET /server-status", () => {
  let response: Response;

  before(async () => {
    response = await api.get("/server-status");
  });

  it("should return server status message and server time", () => {
    expect(response.body.status).to.eq("server is running");
  });

  it("should return server time", () => {
    expect(isIsoDate(response.body.serverTime)).to.be.true;
  });

  it("should return a statusCode of 200", () => {
    expect(response.statusCode).to.eq(200);
  });
});
