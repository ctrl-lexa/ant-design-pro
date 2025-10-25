# 🏛️ Koperasi Bermadani Umbandung

Sistem Informasi Manajemen Koperasi berbasis web untuk mengelola unit minimarket (BSM Mart) dan unit simpan pinjam.

## 📋 Deskripsi Proyek

Proyek ini adalah sistem informasi manajemen untuk **Koperasi Bermadani Umbandung** yang mencakup:

### Unit Bisnis:
1. **Minimarket BSM Mart**
   - Manajemen Produk
   - Manajemen Stok Barang
   - Transaksi Penjualan
   - Data Supplier

2. **Simpan Pinjam**
   - Data Anggota Koperasi
   - Pengajuan Pinjaman
   - Pinjaman Aktif
   - Pembayaran Angsuran
   - Tabungan Anggota

## 🚀 Teknologi yang Digunakan

- **Frontend Framework**: React 19.1.0
- **UI Library**: Ant Design 5.26.4
- **Admin Template**: Ant Design Pro (Pro Components 2.8.9)
- **Build Tool**: UmiJS 4.3.24
- **Language**: TypeScript 5.6.3
- **Testing**: Jest 30.0.4
- **Linter**: Biome 2.1.1

## 📦 Instalasi

### Prasyarat
- Node.js >= 20.0.0
- npm atau yarn

### Langkah Instalasi

1. **Install dependencies**
```bash
npm install
```

2. **Jalankan development server**
```bash
npm run dev
# atau
npm start
```

3. **Build untuk production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 🎨 Konfigurasi Kustom

### Perubahan dari Template Original

1. **Branding**
   - Nama: `Koperasi Bermadani Umbandung`
   - Primary Color: `#52c41a` (Hijau Koperasi)
   - Locale Default: Bahasa Indonesia (`id-ID`)

2. **Routing Menu**
   ```
   - Beranda (Dashboard)
   - Minimarket BSM
     - Manajemen Produk
     - Stok Barang
     - Transaksi Penjualan
     - Data Supplier
   - Simpan Pinjam
     - Data Anggota
     - Pengajuan Pinjaman
     - Pinjaman Aktif
     - Pembayaran Angsuran
     - Tabungan Anggota
   - Administrasi
     - Manajemen Pengguna
     - Pengaturan Sistem
   ```

3. **TypeScript Types**
   - Definisi types untuk entitas koperasi tersedia di `types/index.d.ts`
   - Namespace: `KOPERASI`

## 📁 Struktur Project

```
bermadaniumbandung/
├── config/                 # Konfigurasi aplikasi
│   ├── config.ts          # Config utama (routing, theme, proxy)
│   ├── routes.ts          # Routing koperasi
│   ├── defaultSettings.ts # Settings layout & branding
│   └── proxy.ts           # API proxy config
│
├── src/
│   ├── pages/             # Halaman aplikasi
│   │   ├── Welcome.tsx    # Dashboard utama
│   │   ├── user/login/    # Halaman login
│   │   ├── table-list/    # Template CRUD
│   │   └── Admin.tsx      # Halaman admin
│   │
│   ├── components/        # Komponen reusable
│   │   ├── Footer/
│   │   ├── HeaderDropdown/
│   │   └── RightContent/
│   │
│   ├── locales/           # Internasionalisasi
│   │   └── id-ID/         # Bahasa Indonesia
│   │       ├── menu.ts
│   │       ├── pages.ts
│   │       └── ...
│   │
│   ├── services/          # API Services
│   │   └── ant-design-pro/
│   │
│   ├── app.tsx            # App config
│   └── access.ts          # Access control
│
├── types/                 # TypeScript types
│   └── index.d.ts        # Types entitas koperasi
│
├── mock/                  # Mock data untuk dev
└── public/                # Static assets
```

## 🔑 Fitur Utama

### ✅ Sudah Diimplementasi

- [x] Konfigurasi branding & theme koperasi
- [x] Routing menu untuk Minimarket & Simpan Pinjam
- [x] Internationalization Bahasa Indonesia
- [x] TypeScript types untuk entitas koperasi
- [x] Dashboard dengan statistik overview
- [x] Layout responsive dengan dark/light theme
- [x] Authentication & authorization system
- [x] Template CRUD dengan ProTable

### 📝 Roadmap Development

#### Fase 1: Minimarket BSM Mart
- [ ] CRUD Manajemen Produk
- [ ] Manajemen Stok (In/Out/Opname)
- [ ] Point of Sales (POS) Transaksi
- [ ] Manajemen Supplier
- [ ] Laporan Penjualan

#### Fase 2: Simpan Pinjam
- [ ] CRUD Data Anggota
- [ ] Form Pengajuan Pinjaman
- [ ] Approval Pinjaman
- [ ] Pencairan Pinjaman
- [ ] Input Pembayaran Angsuran
- [ ] Manajemen Tabungan
- [ ] Laporan Keuangan

#### Fase 3: Administrasi & Reporting
- [ ] User Management & Roles
- [ ] Dashboard Analytics
- [ ] Laporan Komprehensif
- [ ] Export ke Excel/PDF
- [ ] Backup & Restore Data
- [ ] Audit Log

## 🔐 Login Credentials (Development)

```
Username: admin
Password: ant.design
```

## 🌐 API Configuration

API endpoint dikonfigurasi di `src/app.tsx`:
```typescript
export const request: RequestConfig = {
  baseURL: isDev ? '' : 'https://your-api-domain.com',
  ...errorConfig,
};
```

Untuk development lokal, konfigurasikan proxy di `config/proxy.ts`

## 📖 Dokumentasi

- [Ant Design Pro Docs](https://pro.ant.design/)
- [Ant Design Components](https://ant.design/components/overview/)
- [UmiJS Documentation](https://umijs.org/)
- [ProComponents](https://procomponents.ant.design/)

## 🤝 Kontribusi

Untuk melakukan kontribusi:
1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Scripts yang Tersedia

```bash
npm run dev          # Jalankan development server
npm run build        # Build untuk production
npm run preview      # Preview production build
npm run lint         # Lint & type checking
npm test             # Run tests
npm run analyze      # Analyze bundle size
```

## 📄 License

Proyek ini menggunakan template dari [Ant Design Pro](https://github.com/ant-design/ant-design-pro) yang berlisensi MIT.

## 📧 Kontak

Untuk pertanyaan atau dukungan, hubungi:
- **Koperasi Bermadani Umbandung**
- Email: info@bermadani.co.id

---

**Dibuat dengan ❤️ menggunakan Ant Design Pro**
