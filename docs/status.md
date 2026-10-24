# Sudah dan belum

Checkpoint: 24 Oktober 2026. Bedakan bukti UI lokal, tes otomatis dan kesiapan cloud.

## Sudah diverifikasi

- Dataset lebih besar: 1.810 record utama tambahan dan 2.170 baris rincian; semua 970 transaksi native tambahan masih draf. Pencarian Input Mudah kini menjangkau pesanan di luar 200 pilihan awal. [Data, cara pakai dan batas ukur](skala.md).
- Uji skala 24 Oktober: 183 tes sintetis, 314 kontrol HTTP, 536 sampel performa dan 18 cek browser tujuh profil lulus. P95 tertinggi sesudah sekitar 102 ms pada PC lokal; core/izin/record pembanding tetap sama dan QA kembali nonaktif. Tanpa posting massal atau provider AI.
- Profil perusahaan **Xanly Portfolio Demo**, alur jasa/proyek, empat barang/jasa dan siklus transaksi kecil sudah aktif lokal. [Isi data dan pemakaian per jabatan](simulasi.md).
- Verifikasi 24 Oktober: 177 tes sintetis, 175 kontrol HTTP, 88 replay alur, lima cek jejak, 25 cek tambahan dan 29 cek browser valid lulus. GL, stok dan saldo faktur telah dicocokkan; core/role/izin tetap utuh, akun QA nonaktif kembali.

Checkpoint 23 Oktober berikut adalah bukti sebelum simulasi kecil:

- Identitas tampilan menjadi **Xanly Portfolio**; judul/menu dan jabatan dirapikan tanpa mengganti ID role, rute, perusahaan atau core.
- Beranda ERPNext menjadi satu pintu, dengan pilihan pekerjaan sesuai izin.
- Tampilan dokumen resmi dipisahkan dari arsip impor. Formulir kosong menjelaskan data yang perlu disiapkan.
- Input pesanan menawarkan manual atau bantuan AI secara jelas; formulir tidak otomatis tersimpan.
- Kontrol HP, navigasi beranda dan pencarian menu diperbaiki.
- Regresi terbaru: 166 tes sintetis dan pemeriksaan sintaks lulus.
- Enam login jabatan terpisah lulus 25 pemeriksaan browser terbaru, termasuk logout. HTTP lintas role/Guest lulus 169/169; Frappe rollback 38/38. Inventaris/Operasional tetap ditolak membaca Sales Invoice.
- Tiga masalah pada aplikasi tambahan Nexora diperbaiki. Core ERPNext/Frappe tetap utuh; 36 hash tabel sama, akun QA dinonaktifkan kembali, tanpa provider AI.
- Pengujian UI sebelumnya lulus 19 pemeriksaan memakai sesi Administrator pada desktop dan viewport HP. Hash 37 entri data/konfigurasi tetap sama.
- Panduan publik per jabatan tersedia. Kode aplikasi dan data site tidak disertakan di repository dokumentasi ini.

## CI dan publikasi sudah lulus

Hasil diperiksa kembali pada 23 Oktober 2026:

| Pemeriksaan                       | Hasil                                                              |
| --------------------------------- | ------------------------------------------------------------------ |
| Lint seluruh repository aplikasi  | Lulus; formatter, ejaan, shell, Dockerfile dan Compose             |
| Regresi sintetis Nexora           | 166 tes lulus, ditambah sintaks dan schema                         |
| Docker ERPNext v15 — amd64        | 18 tes integrasi lulus                                             |
| Docker ERPNext v15 — ARM64 native | 18 tes integrasi lulus                                             |
| Docker ERPNext v16 — amd64        | 18 tes integrasi lulus                                             |
| Docker ERPNext v16 — ARM64 native | 18 tes integrasi lulus                                             |
| Referensi teknis privat           | Build dan artifact lulus; tetap terbatas di repo privat            |
| Panduan publik ini                | Build dan deploy Pages lulus; lima halaman dan aset utama HTTP 200 |

Integrasi Docker memeriksa koneksi database/cache/worker, endpoint/aset/berkas, header keamanan HTML, backup ke S3 terisolasi, HTTPS, pemasangan ERPNext dan pembuatan situs PostgreSQL. Arsitektur image diperiksa sebelum tes. Ini adalah pengujian scaffold Docker; hasil v15 bukan pernyataan bahwa custom app Nexora mendukung v15. Target app yang digunakan adalah ERPNext v16.

Pages hanya menyajikan panduan statis. Kode, riwayat repository aplikasi, akun, screenshot ERP, backup, kredensial dan dokumen perusahaan tidak dipublikasikan di repository ini. Pencarian panduan sudah dicoba dari browser. Lihat [workflow situs publik](https://github.com/xnons/nexora-docs/actions/workflows/pages.yml).

Kelulusan CI tetap terpisah dari pengujian transaksi lengkap dan penerimaan cloud di bawah.

Pemindaian image menghasilkan laporan keamanan terpisah. Laporan bersifat advisory; build lulus tidak berarti nol kerentanan. Artifact keamanan tetap privat bersama repository aplikasi. Dashboard Code Scanning memerlukan dukungan fitur dan aktivasi tersendiri.

## Belum / ditunda

| Pekerjaan                                                      | Status                                                                                                      |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Skala produksi: jutaan baris, banyak pengguna, posting massal  | Dataset lokal 1.810 record utama sudah diuji; kapasitas produksi belum diuji                                |
| Variasi transaksi di luar siklus kecil lintas jabatan          | Siklus kecil sudah lulus; variasi pajak, retur dan payroll belum                                            |
| Perluasan browser ke transaksi lengkap dan kombinasi role lain | 29 cek browser tujuh profil lulus pada data kecil; variasi transaksi dan kombinasi role lain masih terpisah |
| Kualitas jawaban provider AI berbayar pada skenario portofolio | Belum diuji pada tahap ini                                                                                  |
| Pembaca layar dan penilaian aksesibilitas menyeluruh           | Belum                                                                                                       |
| Triage temuan pemindaian image dan dashboard Code Scanning     | Pekerjaan keamanan terpisah; dashboard belum diaktifkan                                                     |
| Seluruh istilah/workflow garment digeneralisasi                | Sebagian; nama role lama tetap untuk kompatibilitas                                                         |
| Instalasi situs kosong yang lengkap dan berulang               | Belum; rilis saat ini masih memiliki kebutuhan schema/izin situs                                            |
| Frappe Cloud, domain, HTTPS dan penerimaan di target           | Belum                                                                                                       |
| Uji pemulihan terbaru setelah skenario migrasi ditentukan      | Backup sebelum/sesudah simulasi sudah ada; restore target tetap diperlukan sebelum migrasi                  |

Data lama yang tidak terkonfirmasi tidak diperbaiki dengan tebakan atau dikembalikan otomatis. Payroll dan penerapan produksi merupakan pekerjaan terpisah.

Checkpoint identitas 23 Oktober (sebelum data kecil): 22 pemeriksaan browser valid pada tujuh profil, 195 pemeriksaan HTTP dan 42 hash tabel tetap sama. Panduan lama diberi catatan historis; saat itu data simulasi belum dibuat. Profil perusahaan, alur jasa dan dataset lebih besar ditambahkan pada 24 Oktober; kapasitas produksi belum diuji.

Pemeriksaan terakhir menambahkan dua cek browser untuk label dan tautan **Ringkasan kerja** pada Kotak Tindakan; keduanya lulus. Versi cache diperbarui, 166 tes sintetis dan sintaks diperiksa ulang, serta akun QA kembali dinonaktifkan tanpa perubahan pada 42 hash tabel. Total bukti browser terbaru: 22 pemeriksaan awal ditambah dua pemeriksaan label/navigasi.

Simulasi kecil dan dataset lebih besar tersedia lokal. Posting massal dan variasi pajak/retur/payroll belum diuji. GitHub tidak menyimpan database atau setting perusahaan site.
