# JejakBalita

**JejakBalita** adalah sistem informasi pencatatan tumbuh kembang balita berbasis web yang dirancang untuk mendukung kegiatan operasional Posyandu secara digital. Sistem ini menggantikan proses pencatatan manual menggunakan buku KMS (Kartu Menuju Sehat) dengan platform yang terstruktur, mudah diakses, dan mampu memberikan analisis pertumbuhan secara otomatis berdasarkan standar WHO.

---

## Latar Belakang

Posyandu (Pos Pelayanan Terpadu) merupakan ujung tombak pelayanan kesehatan masyarakat tingkat dasar di Indonesia, khususnya untuk pemantauan gizi dan tumbuh kembang balita usia 0–5 tahun. Proses pencatatan yang selama ini dilakukan secara manual rentan terhadap kesalahan tulis, kehilangan data, serta sulitnya pemantauan tren pertumbuhan secara historis.

**JejakBalita** hadir untuk menjawab permasalahan tersebut dengan menyediakan:

- **Pencatatan Penimbangan Digital** — Petugas Posyandu dapat mencatat berat badan, tinggi badan, dan lingkar kepala balita setiap bulan secara sistematis.
- **Pemantauan Tumbuh Kembang** — Data pertumbuhan balita dianalisis secara otomatis dan dibandingkan dengan kurva pertumbuhan standar WHO untuk mendeteksi potensi stunting, wasting, atau underweight sejak dini.
- **Riwayat Kesehatan Balita** — Seluruh riwayat penimbangan tersimpan secara digital dan dapat diakses kapan saja oleh petugas kesehatan maupun orang tua.
- **Dashboard Monitoring** — Petugas Posyandu dan tenaga kesehatan dapat melihat rekapitulasi data gizi balita secara keseluruhan dalam satu tampilan terpadu.

---

## Fitur Utama

| Fitur | Deskripsi |
| :--- | :--- |
| **Manajemen Data Balita** | Pendaftaran dan pengelolaan data identitas balita (nama, NIK, tanggal lahir, jenis kelamin, nama orang tua). |
| **Pencatatan Penimbangan** | Input data penimbangan bulanan (berat badan, tinggi/panjang badan, lingkar kepala) oleh petugas Posyandu. |
| **Kalkulasi Status Gizi** | Perhitungan otomatis status gizi berdasarkan indikator BB/U, TB/U, dan BB/TB sesuai standar WHO Child Growth Standards. |
| **Grafik Pertumbuhan** | Visualisasi grafik kurva pertumbuhan balita dari waktu ke waktu. |
| **Autentikasi & Otorisasi** | Sistem login berbasis peran (Role-Based Access Control) untuk petugas Posyandu dan tenaga kesehatan. |
| **Laporan & Rekapitulasi** | Ekspor laporan data penimbangan per periode untuk keperluan pelaporan ke Puskesmas. |

---

## Teknologi yang Digunakan

- **Framework:** Next.js 16 (App Router, Fullstack)
- **Bahasa:** TypeScript 5
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS v4
- **Validasi:** Zod
- **Arsitektur:** Clean Architecture

---

## Arsitektur Sistem

Proyek ini menerapkan **Clean Architecture** untuk memisahkan tanggung jawab setiap lapisan sistem:

```
app/                    → Frameworks & Drivers (Halaman UI & API Route Handlers)
src/entities/           → Enterprise Business Rules (Domain Model)
src/application/        → Application Business Rules (Use Cases & Repository Interfaces)
src/infrastructure/     → Infrastructure (Implementasi Database & External Services)
src/interface-adapters/ → Interface Adapters (Controllers & Presenters)
di/                     → Composition Root (Dependency Injection Container)
```

Alur data: `app/ (UI/API)` → `Controller` → `Use Case` → `Repository Interface` → `Infrastructure (Database)`

Dependency konkret dirakit di `di/modules/`, sehingga lapisan dalam (use case & entities) tidak pernah bergantung pada detail implementasi teknis.

---

## Memulai Pengembangan

### Prasyarat
- Node.js 20+
- PostgreSQL aktif dan terkonfigurasi
- npm

### Instalasi

```bash
# Clone repository
git clone <url-repository>
cd JejakBalita

# Install dependencies
npm install

# Salin file environment dan sesuaikan isinya
cp .env.example .env.local

# Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Perintah yang Tersedia

```bash
npm run dev        # Menjalankan server development dengan Turbopack
npm run build      # Build untuk production
npm run start      # Menjalankan server production
npm run typecheck  # Pemeriksaan tipe TypeScript
npm run lint       # Pemeriksaan kode dengan ESLint
```

---

## Tim Pengembang

Proyek ini dikembangkan oleh mahasiswa sebagai bagian dari mata kuliah **Manajemen Proyek Perangkat Lunak**.

| NIM | Nama |
| :---: | :--- |
| **152023018** | Ghinova Klarisa Irawadi |
| **152023148** | Felix Angga Resky |
| **152023167** | Raelqiansyah Putranta Dibrata |
