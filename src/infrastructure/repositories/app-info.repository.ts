import type { AppInfoRepository } from "@/src/application/repositories/app-info.repository.interface";
import type { AppInfo } from "@/src/entities/models/app-info";

export class InMemoryAppInfoRepository implements AppInfoRepository {
  async getAppInfo(): Promise<AppInfo> {
    return {
      name: "JejakBalita",
      description: "Platform pemantauan tumbuh kembang balita.",
      architecture: "Next.js dengan Clean Architecture",
    };
  }
}
