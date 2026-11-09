import type { AppInfoRepository } from "@/src/application/repositories/app-info.repository.interface";
import type { AppInfo } from "@/src/entities/models/app-info";

export type GetAppInfoUseCase = ReturnType<typeof getAppInfoUseCase>;

export const getAppInfoUseCase =
  (appInfoRepository: AppInfoRepository) =>
  async (): Promise<AppInfo> =>
    appInfoRepository.getAppInfo();
