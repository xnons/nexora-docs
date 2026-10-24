# Dataset lebih besar dan pencarian pesanan

Pada 24 Oktober 2026, **Xanly Portfolio Demo** mendapat 1.810 record utama sintetis tambahan dan 2.170 baris rincian. Semua nama/nilai fiktif. Gunakan **Latihan (Demo)** dan periksa perusahaan pada formulir native.

| Tambahan                |   Jumlah |
| ----------------------- | -------: |
| Barang/jasa             |      240 |
| Pelanggan / pemasok     | 120 / 20 |
| Project                 |       60 |
| Pesanan                 |      600 |
| Faktur pelanggan        |      150 |
| Pesanan pembelian       |      100 |
| Permintaan perlengkapan |      120 |
| Kiriman Input Mudah     |      400 |

Seluruh 970 transaksi native tambahan masih **draf**, tanpa posting akuntansi/stok atau pembayaran otomatis. Siklus kecil sebelumnya tetap ada; saldo yang sudah dibukukan tidak berubah.

## Operasional: mencari pesanan lama

1. Beranda kerja → **Lapor pekerjaan** → **Latihan**.
2. Jika pesanan tidak ada pada 20 kartu awal, isi **Cari pesanan di semua data yang boleh Anda baca** dengan nomor atau nama pelanggan.
3. Tekan **Cari pesanan**, pilih hasilnya. Maksimal 20 hasil; ketik lebih lengkap bila masih banyak.
4. Isi tahap, jumlah dan tanggal. Periksa sebelum mengirim.

Pencarian menjangkau pesanan berizin di luar 200 pilihan awal. **Pengaturan cara mengisi → Formulir lengkap** menyediakan pencarian yang sama tanpa menghapus isian lain. Pemulihan isian dan tautan QR memeriksa ulang referensinya, termasuk pesanan lama.

## Inventaris dan Supervisor

Inventaris membuka **Minta perlengkapan**, lalu mengetik sebagian nama/kode untuk menemukan barang di luar 60 kartu awal. Pesanan opsional. Mengirim formulir tidak langsung mengubah stok.

Supervisor membaca **Ringkasan kerja** sebagai sampel maksimal 200 baris terbaru per jenis, bukan total seluruh dataset. Rekap hari uji memuat 251 laporan/1.376 unit termasuk satu laporan siklus kecil; 250 laporan tambahan belum disetujui. Laporan tidak otomatis menyelesaikan proyek atau membukukan pendapatan.

## Hak akses dan hasil

Inventaris/Operasional tetap ditolak membaca faktur; Finance ditolak dari kontrol agen. Owner tidak otomatis mendapat Payment Entry; pengelola teknis tidak otomatis mendapat keuangan; Pemantauan hanya membaca kesehatan teknis. Pencarian server mengikuti izin native dan memisahkan Demo/Operasional.

183 tes sintetis, 314 kontrol HTTP dan 18 cek browser pada tujuh profil lulus. Performa memakai 536 sampel sebelum/sesudah, termasuk empat pekerja baca paralel. P95 tertinggi sesudah sekitar 102 ms, di bawah target lokal 2.000 ms; tidak ada error HTTP pada sampel.

Ini uji baca singkat pada PC lokal, bukan kapasitas cloud atau posting massal. Core/izin/record pembanding tetap sama; QA kembali nonaktif dan backup tersedia. Restore terbaru, provider AI, pajak/retur/payroll dan penerimaan cloud masih terpisah.

Excel, screenshot, akun, database dan backup tetap privat. Git membawa panduan/kode/script; clone tidak memindahkan data site. [Pekerjaan tersisa](status.md).
