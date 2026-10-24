# Panduan Xanly Portfolio · ERPNext dan Nexora

Workspace ini memusatkan pekerjaan di ERPNext memakai akun yang sama. Arah proyek sekarang adalah portofolio dan simulasi Xanly. Data dummy kecil **Xanly Portfolio Demo** tersedia sejak 24 Oktober 2026; [cara mencoba per jabatan](simulasi.md). Data dummy besar tetap ditunda dan data lama tidak dipulihkan otomatis.

## Mulai dalam beberapa langkah

1. Masuk ke site ERPNext, lalu buka `/desk/nexora-beranda`.
2. Pilih kartu pekerjaan yang tersedia untuk akun Anda. Menu mengikuti izin, sehingga setiap jabatan dapat melihat pilihan berbeda.
3. Untuk mencari menu lain, buka **Semua menu & bantuan**, lalu ketik istilah seperti **pesanan**, **tagihan pelanggan**, **stok**, atau **AI**.
4. Gunakan **Beranda kerja** di header untuk kembali.
5. Sebelum berganti pengguna, tekan **Keluar akun**, konfirmasikan **Ya**, dan pastikan halaman login muncul. Jika koneksi gagal, draf belum dikosongkan.

**Latihan** dipakai untuk belajar. **Data asli** dipakai hanya untuk pencatatan pekerjaan sungguhan. Memilih Latihan tidak otomatis membuat master atau transaksi contoh. Jika pilihan barang, gudang atau pesanan kosong, minta pengelola menyiapkan data latihan, kemudian tekan **Periksa lagi**.

## Mencatat pesanan: manual atau AI

Dari **Catat pesanan**, pilih salah satu cara:

- **Buka formulir pesanan** membuka formulir Sales Order bawaan ERPNext, jika akun memiliki izin membuatnya. Pilih perusahaan latihan di dalam formulir ketika melakukan simulasi. Formulir baru belum tersimpan sampai Anda menekan **Simpan**.
- **Pilih bantuan AI** membuka isian sumber teks/berkas. Pengiriman ke provider baru terjadi ketika **Analisis dengan AI** ditekan dan dapat memakai anggaran AI. Hasil tetap harus diperiksa; proses analisis tidak otomatis mengesahkan pesanan.

Pilihan cakupan pada analisis AI tidak menentukan perusahaan pada formulir manual. Jika tombol manual tidak tersedia, ikuti pesan izin yang muncul dan minta bantuan pengelola; berpindah menu tidak menambah hak akses.

## Meminta barang atau melaporkan produksi

1. Pilih **Minta bahan** atau **Lapor produksi** di beranda.
2. Periksa cakupan Latihan/Data asli.
3. Gunakan kotak pilihan dan langkah terpandu. Opsi **Formulir lengkap** dan pembacaan pertanyaan berada di **Pengaturan cara mengisi**.
4. Periksa isian sebelum mengirim. Jika tidak ada data yang bisa dipilih, ikuti pesan persiapan data; jangan mengisi perkiraan agar bisa lanjut.
5. Lihat perkembangan pada **Kiriman saya**. Kiriman formulir perlu pemeriksaan; kiriman tersebut bukan otomatis pembukuan stok atau keuangan.

Pengaturan dapat dibuka dengan keyboard. Gunakan **Tab** untuk berpindah fokus dan **Enter** untuk membuka atau menutup bagian pengaturan. Tombol utama tetap dapat dipakai pada tampilan HP.

## Tagihan resmi dan data impor

Buka **Tagihan pelanggan** atau **Tagihan pemasok** dari menu sesuai izin. Tampilan awal adalah **Dokumen ERPNext**, yang berisi dokumen native. Dokumen berstatus draf belum dibukukan.

**Data impor · tabel & grafik** adalah pilihan terpisah untuk memeriksa arsip sumber. Angka grafik arsip menghitung baris sumber, bukan otomatis nilai tagihan, saldo stok atau laba resmi. Sumber impor perlu pemeriksaan dan alur promosi tersendiri sebelum menjadi dokumen ERPNext.

## Langkah per jabatan

Nama role berawalan Garmen masih dipertahankan sebagai pengenal kompatibilitas. Nama tersebut tidak mengubah arah proyek menjadi operasional garment lagi.

| Jabatan                             | Mulai dari                                               | Langkah dan batas akses                                                                                                                                                                                      |
| ----------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Inventaris (`Garmen Inventaris`)    | Minta bahan                                              | Pilih barang, jumlah dan gudang setelah master latihan tersedia. Penerimaan/perpindahan stok memakai dokumen ERPNext sesuai izin. Role ini tetap ditolak membaca Sales Invoice pada pemeriksaan server.      |
| Operasional (`Garmen Operasional`)  | Lapor produksi / Catat pesanan                           | Pilih pesanan dan tahap ketika data tersedia; periksa hasil sebelum kirim. Pada pesanan, pilih manual atau AI secara jelas. Role ini juga tetap ditolak membaca Sales Invoice pada pemeriksaan server.       |
| Supervisor (`Garmen Supervisor`)    | Periksa kiriman                                          | Tinjau isi dan catatan perbaikan ketika kiriman tersedia; gunakan Lihat kondisi kerja untuk progres dan hambatan. Pemeriksaan diprioritaskan di beranda akun dengan beberapa role.                           |
| Finance (`Garmen Finance`)          | Tagihan pelanggan/pemasok / Pembayaran                   | Pastikan Dokumen ERPNext terpilih ketika membaca faktur resmi. Data impor adalah arsip terpisah. Semua pembuatan dan pengesahan mengikuti izin native.                                                       |
| Owner (`Nexora Owner`)              | Lacak pesanan / Lihat kiriman saya / Lihat kondisi kerja | Gunakan menu yang tersedia untuk membaca progres. Owner tidak otomatis memiliki seluruh formulir atau hak pengelolaan sistem.                                                                                |
| Pengelola sistem (`System Manager`) | Menu pengaturan yang diizinkan                           | Siapkan rencana data latihan terpisah, periksa akun dan akses. Pada konfigurasi site yang diuji, role System Manager uji tidak memiliki izin membuat Sales Order; perbaikan UI tidak menambah izin tersebut. |

## Yang sudah diuji dan yang masih menyusul

Perubahan UI telah diuji dengan 149 tes sintetis, pemeriksaan server baca-saja untuk enam role, dan 19 pemeriksaan browser memakai sesi Administrator. Cakupan browser meliputi desktop serta viewport HP efektif 390 x 844 CSS px. Hash 37 entri data bisnis/konfigurasi tetap sama. Guest ditolak pada RPC pilihan input baru. Itu bukan audit lengkap semua endpoint.

Checkpoint UI 23 Oktober masih memakai master kosong. Simulasi kecil berisi master dan transaksi kini tersedia; [panduan simulasi](simulasi.md). Data besar, variasi transaksi lengkap, uji provider berbayar, pembaca layar dan kesiapan cloud masih terpisah. Panduan ini tidak berisi screenshot site, akun, backup atau data perusahaan.

Lihat [status dan pekerjaan tersisa](status.md), [izin dan keamanan](keamanan.md), serta [persiapan cloud](deployment.md).

Pembaruan 23 Oktober: 25 pemeriksaan browser terbaru dengan enam login jabatan berbeda lulus. Pemeriksaan HTTP 169/169 dan Frappe rollback 38/38 juga lulus; regresi sintetis kini 162 tes. Role Inventaris/Operasional tetap tidak memperoleh data keuangan; System Manager teknis tidak otomatis memperoleh hak akuntansi native. Screenshot dan laporan lengkap tetap privat.

## Identitas dan nama menu terbaru

Layar login kini memakai **Masuk ke Xanly Portfolio**. Menu **Kendali Garmen** menjadi **Ringkasan kerja**, **Data Sumber Garmen** menjadi **Arsip sumber**, dan **Nexora Agen** menjadi **Asisten Nexora**. Nama jabatan di beranda ditampilkan sebagai Inventaris, Operasional, Keuangan, Supervisor, Owner dan Pengelola sistem.

Tautan serta ID role lama tetap berlaku untuk kompatibilitas. Nama perusahaan legal dan isi arsip tidak diganti menjadi Xanly. Panduan contoh lama diberi penjelasan bahwa angka/statusnya bukan kondisi data site sekarang. Data dummy portofolio baru tetap ditunda.

Perubahan identitas ini lulus 166 tes sintetis, 195 pemeriksaan HTTP dan 22 pemeriksaan browser valid pada tujuh profil. Sebanyak 42 hash tabel, termasuk izin, autentikasi dan workspace, tetap sama; semua akun QA telah dinonaktifkan kembali. Tidak ada panggilan provider atau transaksi/dummy baru.

Pemeriksaan terakhir menambahkan dua cek browser untuk label dan tautan **Ringkasan kerja** pada Kotak Tindakan; keduanya lulus. Versi cache diperbarui, 166 tes sintetis dan sintaks diperiksa ulang, serta akun QA kembali dinonaktifkan tanpa perubahan pada 42 hash tabel. Total bukti browser terbaru: 22 pemeriksaan awal ditambah dua pemeriksaan label/navigasi.
