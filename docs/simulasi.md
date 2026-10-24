# Mencoba data kecil Xanly

Sejak 24 Oktober 2026, site lokal memiliki perusahaan **Xanly Portfolio Demo** pada cakupan **Latihan (Demo)**. Semua pelanggan, pemasok, nilai dan dokumennya fiktif. Ini contoh portofolio, bukan laporan bisnis Xanly atau transaksi bank sungguhan.

## Data yang sudah tersedia

- Empat barang/jasa: penyiapan aplikasi, dukungan bulanan, media USB uji, dan paket perlengkapan.
- Dua pelanggan, satu pemasok, dan satu proyek contoh.
- Dua pesanan: satu jasa disahkan dan satu barang masih draf.
- Faktur jasa Rp1.500.000 sudah Dibayar melalui penerimaan sintetis. Tagihan pemasok Rp150.000 masih belum lunas.
- Stok awal 10 USB senilai Rp600.000; satu pembelian menunggu penerimaan; satu permintaan perlengkapan draf.
- Satu laporan pekerjaan pada tahap Pengerjaan telah disetujui.

Perusahaan latihan memiliki akun/gudang standar yang dibuat ERPNext. Data lama tidak dipulihkan atau diganti nama. Memilih Latihan pada Nexora tidak berarti semua formulir native otomatis memakai perusahaan yang benar: periksa kolom **Perusahaan** sebelum menyimpan. Pintu **Catat pesanan → Buka formulir pesanan** sudah menyiapkan perusahaan latihan pada formulir baru.

## Inventaris

1. Masuk dengan akun Inventaris, buka **Minta perlengkapan**, pilih **Latihan**.
2. Pilih media USB/paket perlengkapan, jumlah dan gudang latihan.
3. Periksa sebelum mengirim. Lihat hasil pada **Kiriman saya**.
4. Kiriman contoh yang sudah ada telah disetujui Supervisor dan menjadi **draf** Material Request. Stok tidak berubah hanya karena formulir dikirim.

Inventaris dapat membuat draf pergerakan stok sesuai izin, tetapi tidak mengesahkannya sendiri. Pembuatan Purchase Order dan pembacaan faktur/Payment Entry tetap tidak diberikan.

## Operasional

1. **Catat pesanan → Buka formulir pesanan** untuk mencoba formulir ERPNext tanpa AI. Perusahaan terisi Xanly Portfolio Demo; periksa kembali.
2. Pilih pelanggan serta barang/jasa contoh, jumlah, harga dan tanggal. Formulir baru belum tersimpan sampai **Simpan** ditekan.
3. Untuk laporan kemajuan, buka **Lapor pekerjaan**, pilih pesanan lalu tahap Persiapan, Pengerjaan, Pemeriksaan, Perbaikan, Penyerahan atau Selesai.
4. Masukkan jumlah unit selesai/perlu perbaikan, periksa, lalu kirim untuk ditinjau.

Staf membuat draf pesanan; pengesahan dilakukan Supervisor. Laporan kerja tidak otomatis menyelesaikan Project. Faktur keuangan tetap ditolak untuk akun ini.

## Finance

Buka faktur pelanggan Alpha untuk melihat **Dibayar**, total Rp1.500.000 dan saldo nol. Buka tagihan pemasok untuk melihat saldo Rp150.000 belum lunas. Finance membuat draf faktur/penerimaan; Supervisor mengesahkan sesuai izin yang sudah ada.

Nilai contoh tidak memakai pajak atau koneksi bank. Tidak terjadi transfer uang nyata.

## Supervisor

Gunakan **Periksa kiriman** untuk mencocokkan sumber, mengonfirmasi pratinjau dan membuat draf permintaan. Draf tidak disubmit otomatis.

Di **Lacak pesanan**, pilih pelanggan Alpha. Pengerjaan Project, faktur dan pembayaran ditampilkan sebagai tahap terpisah. Klik **Pembayaran** untuk melihat referensi faktur dan alokasinya. Pembayaran lunas tidak membuktikan proyek selesai atau barang terkirim.

**Rekap Pekerjaan Harian** memakai satuan unit; QR memakai pilihan tahap yang sama. Pilih **Latihan**. Alamat `127.0.0.1` pada QR hanya untuk komputer itu sendiri; penggunaan HP memerlukan alamat server yang dapat dijangkau, yang belum disiapkan lewat panduan ini.

## Owner, pengelola dan pemantauan

| Jabatan          | Batas contoh yang diuji                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Owner            | Membaca pesanan/faktur yang diizinkan; Project dan Payment Entry tetap tidak tersedia pada profil uji.                    |
| Pengelola sistem | Mengelola konfigurasi sesuai izin; System Manager teknis tidak otomatis memiliki hak membuat pesanan atau membaca faktur. |
| Pemantauan       | Membaca kesehatan sistem; data bisnis, profil pengguna lain dan pengelolaan agen tetap ditolak.                           |

Gunakan **Keluar akun** sebelum berganti pengguna. Akun QA sudah dinonaktifkan kembali; pemakaian sehari-hari memakai akun yang ditetapkan pengelola.

## Hasil dan batas

177 tes sintetis; 175 kontrol HTTP, 88 pemeriksaan replay alur, lima cek semantik jejak dan 25 cek tambahan; serta 29 cek browser valid pada tujuh profil lulus. Rekonsiliasi GL seimbang Rp3.750.000 pada kedua sisi, dan stok/faktur cocok dengan dokumen native. Core, role, izin dan payload record lama yang diperiksa dipertahankan. Tidak ada panggilan provider AI.

GitHub memuat panduan/kode/seed sintetis, bukan database atau konfigurasi site. Menyalin kode saja tidak memindahkan data contoh. Data besar, skenario pajak/retur/payroll, pengujian aksesibilitas menyeluruh, AI berbayar dan penerimaan cloud masih terpisah.
