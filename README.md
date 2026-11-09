# JejakBalita

JejakBalita adalah aplikasi Next.js yang menggunakan pemisahan tanggung jawab
berbasis Clean Architecture.

## Struktur arsitektur

- `app/`: Frameworks & Drivers. Halaman Next.js hanya mengambil data melalui
  controller.
- `src/entities/`: Model domain yang tidak bergantung pada framework.
- `src/application/`: Use case dan interface repository.
- `src/infrastructure/`: Implementasi repository dan integrasi teknis.
- `src/interface-adapters/`: Controller dan presenter untuk menjembatani UI
  dengan application layer.
- `di/`: Registrasi dependency dan composition root.

Alur data halaman utama adalah `app/page.tsx` → controller → use case →
repository. Dependency konkret dirakit di `di/modules/app.module.ts`, sehingga
use case tidak mengetahui detail implementasi infrastructure.

## Getting Started

Jalankan server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Validasi yang tersedia:

```bash
npm run lint
npm run typecheck
npm run build
```
