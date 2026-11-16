# Ngadem di Sawah — konsep redesign

Konsep website independen untuk penawaran. Belum berafiliasi atau dikelola oleh Ngadem di Sawah. Halaman sengaja memakai `noindex` sampai ada persetujuan untuk menjadi situs resmi.

## Menjalankan proyek

```bash
npm install
npm run build
```

Buka `index.html` untuk melihat hasil. `npm run dev` memantau perubahan CSS pada `src/input.css` dan membangun ulang `styles.css`.

## Alur reservasi

- Harga kamar yang tampil di HTML disalin dari poster `assets/listharga_*.jpg` sebagai harga acuan.
- Semua tombol ketersediaan kamar menuju listing Ngadem di Sawah di tiket.com.
- Pertanyaan restoran dan acara menuju nomor WhatsApp yang tercantum dalam materi bisnis.
- Menu dan harga makanan belum ditampilkan karena materi resmi belum tersedia.

## Aset

Foto halaman menggunakan `view1.webp`, `view2.webp`, dan `kamar.webp` yang diberikan untuk konsep ini. Ukuran foto tersebut kecil; versi beresolusi lebih tinggi diperlukan sebelum hasil akhir dipublikasikan. Poster kamar ditampilkan utuh dalam dialog agar pengunjung dapat memperbesar informasi.
