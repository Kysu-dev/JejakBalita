import { createAppModule } from "@/di/modules/app.module";
import { DI_SYMBOLS } from "@/di/types";
import type { DI_RETURN_TYPES } from "@/di/types";

const applicationContainer = createAppModule();

export function getInjection<K extends keyof DI_RETURN_TYPES>(
  symbol: K
): DI_RETURN_TYPES[K] {
  const dependency = applicationContainer.get(DI_SYMBOLS[symbol]);

  if (!dependency) {
    throw new Error(`Dependency ${symbol} is not registered.`);
  }

  return dependency as DI_RETURN_TYPES[K];
}
