import { expect } from "@/test/testUtils";
import { isIsoDate } from "@/utils/date";
import { ServerStatusController, ServerStatus } from "./serverStatus.controller";

describe("serverStatus controller", () => {
  let serverStatus: ServerStatus;

  before(async () => {
    const serverStatusController = new ServerStatusController();
    serverStatus = await serverStatusController.getServerStatus();
  });

  it("should return a server status message", async () => {
    expect(serverStatus.status).to.be.eq("server is running");
  });

  it("should return server time", async () => {
    expect(isIsoDate(serverStatus.serverTime)).to.be.true;
  });
});
