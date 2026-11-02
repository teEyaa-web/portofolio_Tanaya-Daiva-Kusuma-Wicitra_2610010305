# IT Solution - Koperasi Kampus Modern

Landing page 1-halaman (Single Page Application - Landing Page) modern untuk koperasi kampus menggunakan stack murni: **HTML5, CSS3, dan Vanilla JavaScript (ES6+)**.

---

## Fitur & Tampilan Halaman (1 Page)

1. **Header & Navbar Modern**:
   - Logo brand koperasi kampus dengan ikon inisial & efek glassmorphism saat di-scroll.
   - Menu navigasi: *Beranda*, *Tentang*, *Menu & Layanan*, *Ulasan*, dan *Lokasi & Kontak*.
   - **Scrollspy otomatis**: Link navigasi otomatis aktif sesuai posisi scroll pengguna.
   - **Mobile Hamburger Menu**: Responsif untuk smartphone & tablet (klik menu atau klik di luar untuk menutup).
   - **Tombol Keranjang Estimasi Belanja**: Dilengkapi badge counter jumlah barang.

2. **Hero Section Modern**:
   - Tipografi sans-serif modern (`Plus Jakarta Sans` & `Inter`) dengan palet warna netral & biru terang/gelap bersih.
   - Tagline menarik dengan pill badge beranimasi pulse.
   - **Status Operasional Live (JS)**: Mendeteksi jam & hari secara real-time.
     - Senin - Jumat (07.30 - 17.00 WIB): "🟢 Koperasi Buka Sekarang".
     - Di luar jam tersebut / akhir pekan: "🔴 Koperasi Sedang Tutup".
   - Kartu visual dengan floating badges: *Minuman Dingin*, *Print Kilat*, dan *Rating Kepuasan*.

3. **Menu & Layanan Koperasi (Katalog Interaktif)**:
   - Berisi seluruh daftar produk resmi koperasi sesuai foto `assets/daftar-harga.jpeg`:
     - Minuman: Ichitan, Good Day, Prof, Kopi ABC, Milky, Floridina, Teh Pucuk, Golda, Ultra Milk, Pocari.
     - Snack & Makanan: Nextar, Choco Pie, Kalpa, Beng-Beng, Siip, Triks.
     - ATK & Layanan Print: Tisu, Tip-Ex, Peniti, Pulpen, Jilid, Print Stiker, Print B/W (Rp500), Print Warna (Rp1.000), Amplop, Sertifikat.
   - **Filter Kategori Dinamis**: Semua, Minuman Segar, Snack & Makanan, ATK & Print dengan counter jumlah item.
   - **Pencarian Real-Time**: Input pencarian nama produk dengan debounce & tombol clear pencarian (x).
   - **Pengurutan Harga (Sorting)**: Termurah, Tertinggi, dan Nama A-Z.
   - **Modal Pratinjau Papan Harga Asli**: Klik "Lihat Foto Papan Harga Asli" untuk melihat foto daftar harga fisik koperasi.

4. **Kalkulator / Catatan Estimasi Belanja (Drawer)**:
   - Mahasiswa dapat menekan tombol **"+ Estimasi"** pada setiap produk.
   - Drawer samping menampilkan daftar barang, tombol tambah/kurang kuantitas (+ / -), dan total perkiraan biaya (Rp).
   - Terhubung dengan `localStorage` sehingga data tidak hilang saat refresh.
   - **Fitur Chat WhatsApp**: Otomatis membuat draf pesan pemesanan ke admin koperasi.

5. **Rating & Ulasan Interaktif (Reviews)**:
   - Ringkasan rating keseluruhan (4.9 / 5.0) dengan progress bar persentase bintang.
   - Filter ulasan berdasarkan bintang (Semua, 5 Bintang, 4 Bintang).
   - **Formulir "Tulis Ulasan Kamu" (Modal Dialog)**:
     - Input nama & pilihan status (Mahasiswa, Dosen, Staf, Pengunjung).
     - Pemilih bintang interaktif (1 - 5) dengan hover & teks feedback.
     - Penghitung karakter pesan (maks 200 karakter).
     - **Tersimpan di `localStorage`**: Ulasan baru langsung muncul di daftar tanpa memerlukan server backend!
   - **Tombol Like (👍)**: Mahasiswa dapat menyukai ulasan dengan counter live.

6. **Lokasi & Kontak**:
   - Detail alamat lengkap ruang koperasi kampus.
   - **Tombol "Salin Alamat"**: Menyalin teks alamat ke clipboard dengan notifikasi toast.
   - Jam operasional dan tombol langsung chat WhatsApp admin koperasi.
   - Rute langsung ke Google Maps.
   - Foto papan nama asli koperasi (`assets/foto-koperasi-signage.jpeg`).

7. **Footer Modern**:
   - Navigasi cepat, filter kategori cepat, jadwal operasional, dan info hak cipta dengan tahun otomatis dari JavaScript (`new Date().getFullYear()`).
   - Tombol floating "Kembali ke Atas" yang muncul otomatis saat scroll.

---

## Struktur File
```text
it-solution-koperasi/
│
├── index.html                  # Struktur markup semantik HTML5
├── style.css                   # Gaya CSS3 modern, responsif, & palet biru bersih
├── script.js                   # Logika Vanilla JavaScript lengkap
├── README.txt                  # Petunjuk & dokumentasi proyek
└── assets/
    ├── daftar-harga.jpeg       # Foto referensi papan harga koperasi
    └── foto-koperasi-signage.jpeg # Foto papan nama fisik IT Solution
```

---

## Cara Menjalankan
1. Cukup buka file `index.html` langsung di browser favoritmu (Chrome, Edge, Firefox, Safari).
2. Atau jika menggunakan ekstensi **Live Server** di VS Code / Antigravity IDE, klik kanan pada `index.html` lalu pilih **Open with Live Server**.
3. Pastikan tersambung ke internet agar Google Fonts dan foto stok online dapat dimuat sempurna.
