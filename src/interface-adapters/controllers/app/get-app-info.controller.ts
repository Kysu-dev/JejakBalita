import type { GetAppInfoUseCase } from "@/src/application/use-cases/app/get-app-info.use-case";
import type { AppInfo } from "@/src/entities/models/app-info";

function presenter(appInfo: AppInfo) {
  return {
    name: appInfo.name,
    description: appInfo.description,
    architecture: appInfo.architecture,
  };
}

export type GetAppInfoController = ReturnType<typeof getAppInfoController>;

export const getAppInfoController =
  (getAppInfo: GetAppInfoUseCase) =>
  async (): Promise<ReturnType<typeof presenter>> =>
    presenter(await getAppInfo());
