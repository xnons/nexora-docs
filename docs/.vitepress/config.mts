import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Xanly Portfolio",
  description: "Panduan portofolio Xanly dan langkah pemakaian per jabatan",
  lang: "id-ID",
  base: "/nexora-docs/",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Panduan", link: "/panduan" },
      { text: "Status", link: "/status" },
    ],
    sidebar: [
      { text: "Mulai di sini", link: "/" },
      { text: "Pemakaian per jabatan", link: "/panduan" },
      { text: "Simulasi kecil Xanly", link: "/simulasi" },
      { text: "Data lebih besar & pencarian", link: "/skala" },
      { text: "Sudah & belum", link: "/status" },
      { text: "Izin & keamanan", link: "/keamanan" },
      { text: "Persiapan cloud", link: "/deployment" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/xnons/nexora-docs" },
    ],
    search: { provider: "local" },
    outline: { label: "Di halaman ini" },
    docFooter: { prev: "Sebelumnya", next: "Berikutnya" },
    footer: {
      message: "Panduan publik. Data situs dan kode aplikasi tetap privat.",
    },
  },
});
