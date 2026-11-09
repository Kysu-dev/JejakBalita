import type { AppInfo } from "@/src/entities/models/app-info";

export interface AppInfoRepository {
  getAppInfo(): Promise<AppInfo>;
}
