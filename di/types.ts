import type { AppInfoRepository } from "@/src/application/repositories/app-info.repository.interface";
import type { GetAppInfoUseCase } from "@/src/application/use-cases/app/get-app-info.use-case";
import type { GetAppInfoController } from "@/src/interface-adapters/controllers/app/get-app-info.controller";

export const DI_SYMBOLS = {
  IAppInfoRepository: Symbol.for("IAppInfoRepository"),
  IGetAppInfoUseCase: Symbol.for("IGetAppInfoUseCase"),
  IGetAppInfoController: Symbol.for("IGetAppInfoController"),
} as const;

export interface DI_RETURN_TYPES {
  IAppInfoRepository: AppInfoRepository;
  IGetAppInfoUseCase: GetAppInfoUseCase;
  IGetAppInfoController: GetAppInfoController;
}
