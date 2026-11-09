import { getAppInfoUseCase } from "@/src/application/use-cases/app/get-app-info.use-case";
import { InMemoryAppInfoRepository } from "@/src/infrastructure/repositories/app-info.repository";
import { getAppInfoController } from "@/src/interface-adapters/controllers/app/get-app-info.controller";
import { DI_SYMBOLS } from "@/di/types";

export function createAppModule(): Map<symbol, unknown> {
  const appInfoRepository = new InMemoryAppInfoRepository();
  const appInfoUseCase = getAppInfoUseCase(appInfoRepository);
  const appInfoController = getAppInfoController(appInfoUseCase);

  return new Map<symbol, unknown>([
    [DI_SYMBOLS.IAppInfoRepository, appInfoRepository],
    [DI_SYMBOLS.IGetAppInfoUseCase, appInfoUseCase],
    [DI_SYMBOLS.IGetAppInfoController, appInfoController],
  ]);
}
