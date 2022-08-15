import { Controller, Get, Route } from "tsoa";

export interface ServerStatus {
  status: string;
  serverTime: string;
}

@Route("server-status")
export class ServerStatusController extends Controller {
  @Get()
  public async getServerStatus(): Promise<ServerStatus> {
    return { status: "server is running", serverTime: new Date().toISOString() };
  }
}
