# Sudah dan belum

Checkpoint: 23 Oktober 2026. Bedakan bukti UI lokal, tes otomatis dan kesiapan cloud.

## Sudah diverifikasi

- Beranda ERPNext menjadi satu pintu, dengan pilihan pekerjaan sesuai izin.
- Tampilan dokumen resmi dipisahkan dari arsip impor. Formulir kosong menjelaskan data yang perlu disiapkan.
- Input pesanan menawarkan manual atau bantuan AI secara jelas; formulir tidak otomatis tersimpan.
- Kontrol HP, navigasi beranda dan pencarian menu diperbaiki.
- 149 tes sintetis dan pemeriksaan sintaks lulus kembali setelah perbaikan format.
- Enam peran diperiksa baca-saja di server. Inventaris/Operasional tetap ditolak membaca Sales Invoice.
- Pengujian UI sebelumnya lulus 19 pemeriksaan memakai sesi Administrator pada desktop dan viewport HP. Hash 37 entri data/konfigurasi tetap sama.
- Panduan publik per jabatan tersedia. Kode aplikasi dan data site tidak disertakan di repository dokumentasi ini.

## Pemeriksaan rilis yang sedang diselesaikan

Perbaikan lint, pemisahan tes integrasi Docker dari tes sintetis Nexora, dan publikasi Pages sedang diverifikasi kembali di GitHub. Status akhir akan dicatat setelah workflow selesai; jangan menganggap deployment sukses hanya karena commit sudah terkirim.

## Belum / ditunda

| Pekerjaan | Status |
|---|---|
| Skenario bisnis dan dataset sintetis besar untuk portofolio | Ditunda sesuai arahan pemilik |
| Transaksi lengkap lintas jabatan menggunakan data simulasi | Belum, menunggu master dan skenario |
| Tes browser lengkap menggunakan login setiap jabatan pada UI terbaru | Belum; bukti terbaru adalah browser Administrator + enam role server |
| Kualitas jawaban provider AI berbayar pada skenario portofolio | Belum diuji pada tahap ini |
| Pembaca layar dan penilaian aksesibilitas menyeluruh | Belum |
| Seluruh istilah/workflow garment digeneralisasi | Sebagian; nama role lama tetap untuk kompatibilitas |
| Instalasi situs kosong yang lengkap dan berulang | Belum; rilis saat ini masih memiliki kebutuhan schema/izin situs |
| Frappe Cloud, domain, HTTPS dan penerimaan di target | Belum |
| Backup baru dan uji pemulihan setelah skenario migrasi ditentukan | Diperlukan sebelum migrasi |

Data lama yang tidak terkonfirmasi tidak diperbaiki dengan tebakan atau dikembalikan otomatis. Payroll dan penerapan produksi merupakan pekerjaan terpisah.
