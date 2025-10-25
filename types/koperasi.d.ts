// ===================================
// TYPES UNTUK KOPERASI BERMADANI
// ===================================

declare namespace KOPERASI {
  // Anggota Koperasi
  interface Anggota {
    id: string;
    noAnggota: string;
    nama: string;
    nik: string;
    tempatLahir: string;
    tanggalLahir: string;
    jenisKelamin: 'L' | 'P';
    alamat: string;
    noTelepon: string;
    email?: string;
    pekerjaan: string;
    simpananPokok: number;
    simpananWajib: number;
    statusAktif: boolean;
    tanggalBergabung: string;
    foto?: string;
    createdAt: string;
    updatedAt: string;
  }

  // Produk Minimarket
  interface Produk {
    id: string;
    kodeProduk: string;
    namaProduk: string;
    kategori: string;
    satuan: string;
    hargaBeli: number;
    hargaJual: number;
    stok: number;
    stokMinimal: number;
    barcode?: string;
    supplierId: string;
    supplierNama?: string;
    foto?: string;
    keterangan?: string;
    statusAktif: boolean;
    createdAt: string;
    updatedAt: string;
  }

  // Stok Barang
  interface StokBarang {
    id: string;
    produkId: string;
    produkNama?: string;
    jenisTransaksi: 'masuk' | 'keluar' | 'opname';
    jumlah: number;
    hargaSatuan: number;
    totalHarga: number;
    stokSebelum: number;
    stokSesudah: number;
    keterangan?: string;
    userId: string;
    userName?: string;
    tanggal: string;
    createdAt: string;
  }

  // Transaksi Penjualan
  interface TransaksiPenjualan {
    id: string;
    noTransaksi: string;
    tanggal: string;
    kasirId: string;
    kasirNama?: string;
    pelangganId?: string;
    pelangganNama?: string;
    totalBelanja: number;
    diskon: number;
    totalBayar: number;
    jumlahBayar: number;
    kembalian: number;
    metodePembayaran: 'tunai' | 'transfer' | 'qris';
    statusPembayaran: 'lunas' | 'pending' | 'batal';
    items: DetailTransaksiPenjualan[];
    createdAt: string;
    updatedAt: string;
  }

  interface DetailTransaksiPenjualan {
    id: string;
    transaksiId: string;
    produkId: string;
    produkNama: string;
    kodeProduk: string;
    hargaSatuan: number;
    jumlah: number;
    subtotal: number;
    diskon: number;
    total: number;
  }

  // Supplier
  interface Supplier {
    id: string;
    kodeSupplier: string;
    namaSupplier: string;
    alamat: string;
    noTelepon: string;
    email?: string;
    kontakPerson?: string;
    keterangan?: string;
    statusAktif: boolean;
    createdAt: string;
    updatedAt: string;
  }

  // Pengajuan Pinjaman
  interface PengajuanPinjaman {
    id: string;
    noPengajuan: string;
    tanggalPengajuan: string;
    anggotaId: string;
    anggotaNama?: string;
    jumlahPengajuan: number;
    jangkaWaktu: number; // dalam bulan
    bunga: number; // persentase
    tujuanPinjaman: string;
    statusPengajuan: 'pending' | 'disetujui' | 'ditolak' | 'dibatalkan';
    keterangan?: string;
    disetujuiOleh?: string;
    tanggalDisetujui?: string;
    createdAt: string;
    updatedAt: string;
  }

  // Pinjaman Aktif
  interface Pinjaman {
    id: string;
    noPinjaman: string;
    pengajuanId: string;
    anggotaId: string;
    anggotaNama?: string;
    tanggalCair: string;
    jumlahPinjaman: number;
    bunga: number;
    jangkaWaktu: number;
    angsuranPerBulan: number;
    totalAngsuran: number;
    totalDibayar: number;
    sisaPinjaman: number;
    statusPinjaman: 'aktif' | 'lunas' | 'menunggak';
    tanggalJatuhTempo: string;
    keterangan?: string;
    createdAt: string;
    updatedAt: string;
  }

  // Pembayaran Angsuran
  interface Angsuran {
    id: string;
    noAngsuran: string;
    pinjamanId: string;
    noPinjaman?: string;
    anggotaId: string;
    anggotaNama?: string;
    tanggalBayar: string;
    angsuranKe: number;
    jumlahAngsuran: number;
    pokok: number;
    bunga: number;
    denda: number;
    totalBayar: number;
    metodePembayaran: 'tunai' | 'transfer';
    keterangan?: string;
    kasirId: string;
    kasirNama?: string;
    createdAt: string;
  }

  // Tabungan
  interface Tabungan {
    id: string;
    noTabungan: string;
    anggotaId: string;
    anggotaNama?: string;
    jenisTabungan: 'pokok' | 'wajib' | 'sukarela';
    saldo: number;
    statusAktif: boolean;
    tanggalBuka: string;
    createdAt: string;
    updatedAt: string;
  }

  interface TransaksiTabungan {
    id: string;
    noTransaksi: string;
    tabunganId: string;
    anggotaId: string;
    anggotaNama?: string;
    jenisTransaksi: 'setor' | 'tarik';
    jumlah: number;
    saldoSebelum: number;
    saldoSesudah: number;
    tanggal: string;
    keterangan?: string;
    kasirId: string;
    kasirNama?: string;
    createdAt: string;
  }

  // Common Types
  interface PageParams {
    current?: number;
    pageSize?: number;
  }

  interface PageResponse<T> {
    data: T[];
    total: number;
    success: boolean;
    pageSize: number;
    current: number;
  }
}
