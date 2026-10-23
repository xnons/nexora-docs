# Izin dan keamanan

## Menu mengikuti akun

Hak akses menentukan apa yang boleh dibaca, dibuat dan disahkan. Tombol yang terlihat bukan satu-satunya pengaman: pemeriksaan server tetap diperlukan ketika endpoint dipanggil langsung atau konteks chat digunakan ulang.

Pada pemeriksaan server baca-saja 23 Oktober 2026, enam peran diperiksa. Inventaris dan Operasional tetap ditolak membaca Sales Invoice; pilihan membuat pesanan manual mengikuti izin native ERPNext. Guest ditolak pada endpoint pilihan input baru. QA tidak diaktifkan untuk pemeriksaan tersebut.

## Hasil AI perlu diperiksa

Pengiriman ke provider AI dilakukan hanya lewat tindakan analisis yang jelas dan dapat memakai anggaran. Hasil analisis tidak otomatis menjadi transaksi resmi. Jangan menyalin kredensial, dokumen pribadi atau data di luar izin ke chat.

## Batas bukti

Hasil di atas bukan audit seluruh endpoint. Pengujian browser terbaru memakai sesi Administrator; itu tidak membuktikan semua jabatan telah melalui transaksi lengkap. Perubahan peran dan konteks AI harus diuji ulang dengan akun dan data sintetis yang sesuai.

Lihat [status pengujian dan pekerjaan tersisa](status.md).

## Pemeriksaan akses terbaru

Pada 23 Oktober 2026, enam akun jabatan terpisah lulus 25 pemeriksaan browser baca/akses/logout, 169 pemeriksaan HTTP lintas role/Guest, serta 38 pemeriksaan Frappe dengan rollback. Pembacaan Job melalui API umum ditutup; gunakan Inbox Nexora yang menyaring sesuai izin. Revisi laporan tidak dapat membawa metadata analisis internal. Core dan role ERPNext tidak diubah. Akun QA dikembalikan nonaktif; 36 hash tabel tetap sama. Ini bukan jaminan semua kombinasi role atau deployment cloud sudah diuji.
