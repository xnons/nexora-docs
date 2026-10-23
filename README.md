# Xanly Portfolio — dokumentasi publik

Panduan penggunaan untuk portofolio Xanly: https://xnons.github.io/nexora-docs/.

Repository ini hanya memuat panduan yang disaring dan konfigurasi pembuat situs. Kode aplikasi, riwayat repository aplikasi, akun, screenshot site, backup, dokumen perusahaan dan kredensial tidak disalin ke sini.

## Memperbarui

Edit Markdown di `docs/`, lalu jalankan:

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm docs:build
```

GitHub Actions membangun dan menerbitkan situs setelah push ke `main`. Sumber Pages harus **GitHub Actions**. Periksa hasil workflow dan halaman live; push saja belum membuktikan deployment sukses.
