# Persiapan cloud

Situs dokumentasi ini berbeda dari aplikasi ERPNext. Pages hanya menyajikan panduan; Pages tidak menjalankan ERPNext, database, scheduler atau worker AI.

## Yang belum tersedia

Target Frappe Cloud, langganan, domain aplikasi, master simulasi dan penerimaan pada target belum diselesaikan. Core ERPNext/Frappe tetap dipertahankan. Arah terbaru adalah portofolio Xanly; data perusahaan lama tidak dipulihkan otomatis.

## Urutan persiapan

1. Tentukan contoh bisnis, peran, alur transaksi dan ukuran data sintetis yang ingin ditampilkan.
2. Siapkan paket cloud yang mendukung custom app dan versi ERPNext yang sesuai. Pembelian dilakukan pemilik.
3. Verifikasi pemasangan schema dan izin. Clone kode saja belum mereproduksi konfigurasi situs.
4. Buat backup baru yang sesuai keadaan saat migrasi, lalu uji restore pada lingkungan terisolasi.
5. Uji login per peran, izin negatif, transaksi latihan lengkap, scheduler, worker, HTTPS dan websocket.
6. Verifikasi backup tujuan beserta pemulihannya sebelum memutuskan go-live.

Tidak ada harga tetap di panduan ini; harga dan paket perlu diperiksa kembali pada penyedia ketika pembelian direncanakan. Lihat [daftar sudah dan belum](status.md).
