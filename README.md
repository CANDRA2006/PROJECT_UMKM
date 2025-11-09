# 🍠 Keripik Singkong Candra

Website UMKM untuk keperluan tugas akhir Mata Kuliah Pemrograman WEB-I

## 📋 Deskripsi Project

Website ini merupakan platform digital untuk mempromosikan produk keripik singkong dengan berbagai varian rasa. Website ini menyediakan informasi lengkap mengenai produk, harga, galeri, formulir kontak interaktif, dan fitur-fitur JavaScript yang menarik untuk meningkatkan pengalaman pengguna.

## ✨ Fitur Utama

### 🏠 Halaman Beranda (index.html)
- Hero section dengan tagline menarik
- Grid produk unggulan dengan gambar dan deskripsi
- Informasi kontak lengkap dengan ikon
- Integrasi link media sosial (Facebook, Instagram, WhatsApp)

### ℹ️ Halaman Tentang (tentang.html)
- Sejarah dan filosofi perusahaan
- Komitmen terhadap kualitas produk
- Informasi tentang industri keripik singkong di Indonesia
- Galeri produk unggulan

### 🛍️ Halaman Produk (produk.html)
- **Cek Kategori Usia**: Fitur interaktif untuk mengkategorikan pelanggan berdasarkan usia
- **Testimoni Pelanggan**: Menampilkan 5 testimoni dengan rating bintang menggunakan perulangan
- **Kalkulator Belanja**: Menghitung total pembelian dengan format Rupiah
- Tabel daftar produk dan harga lengkap
- Galeri produk dengan gambar dan deskripsi detail
- Video proses pembuatan keripik singkong
- Informasi pemesanan dan jam operasional

### 🖼️ Halaman Galeri (galeri.html)
- Tampilan card responsif untuk setiap produk
- Gambar proses panen singkong
- Deskripsi singkat setiap varian
- Efek hover interaktif

### 📞 Halaman Kontak (kontak.html)
- **Formulir Kontak Lengkap** dengan validasi:
  - Nama Lengkap
  - Email
  - Nomor HP (dengan validasi format)
  - Tanggal Pengiriman Pesanan
  - Jenis Kelamin
  - Kategori Pesan
  - Upload File (opsional)
  - Textarea untuk pesan
  - Checkbox newsletter
- **Validasi Form JavaScript**:
  - Validasi nomor HP (hanya angka, 10-13 digit, dimulai dengan 0)
  - Validasi tanggal (tidak boleh masa lampau)
  - Validasi field wajib diisi
- **Feedback System**:
  - Pop-up sukses dengan animasi
  - Pesan feedback dinamis (success/error)
- **Tombol Clear Data**: Menghapus semua data form dengan konfirmasi

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur dan markup halaman dengan semantic elements
- **CSS3**: 
  - Styling modern dengan gradient dan shadow effects
  - Flexbox dan Grid Layout
  - Animasi dan transisi smooth
  - Responsive design untuk semua ukuran layar
- **JavaScript (Vanilla JS)**:
  - DOM Manipulation
  - Event Handling
  - Form Validation
  - Local Storage
  - Dynamic Content Generation
- **Font Awesome 6.4.0**: Icons untuk UI yang lebih menarik
- **CDN**: Cloudflare CDN untuk Font Awesome

## 📦 Produk yang Ditawarkan

| No | Produk | Harga | Status |
|----|--------|-------|--------|
| 1 | **Keripik Singkong Original** | Rp 15.000 | Tersedia |
| 2 | **Keripik Singkong Balado** | Rp 16.000 | Tersedia |
| 3 | **Keripik Singkong Bawang** | Rp 17.000 | Tersedia |
| 4 | **Keripik Singkong Keju** | Rp 18.000 | Tersedia |
| 5 | **Keripik Singkong Jagung** | Rp 18.000 | Tersedia |

## 📁 Struktur File

```
CANDRA/
├── index.html              # Halaman utama/beranda
├── tentang.html            # Halaman tentang kami
├── produk.html             # Halaman produk dengan fitur interaktif
├── galeri.html             # Halaman galeri foto
├── kontak.html             # Halaman kontak dengan form
├── style.css               # Stylesheet utama (global)
├── kontak-style.css        # Stylesheet khusus halaman kontak (jika ada)
├── script.js               # JavaScript utama
├── kontak-script.js        # JavaScript khusus halaman kontak (jika ada)
├── README.md               # Dokumentasi project
├── Assets/                 # Folder gambar produk
│   ├── Original.jpg
│   ├── Balado.jpg
│   ├── Bawang.jpg
│   ├── Keju.jpg
│   ├── Jagung.jpg
│   └── Proses_Panen.jpg
└── Video/                  # Folder video
    └── PROSES PEMBUATAN KERIPIK SINGKONG...mp4
```

## 🎯 Fitur JavaScript Lengkap

### 1. Welcome Alert dengan Local Storage
```javascript
// Notifikasi selamat datang yang hanya muncul sekali
localStorage.setItem("welcomeShown", "true");
```

### 2. Cek Kategori Usia (Percabangan)
Fungsi untuk mengkategorikan pelanggan berdasarkan usia:
- **Anak-anak** (< 13 tahun) - Label kuning
- **Remaja** (13-17 tahun) - Label biru
- **Dewasa** (18-60 tahun) - Label hijau
- **Lansia** (> 60 tahun) - Label ungu

### 3. Testimoni Pelanggan (Perulangan)
Menggunakan loop `for` untuk menampilkan array testimoni dari 5 pelanggan:
- Nama pelanggan
- Rating bintang (⭐)
- Produk yang dibeli
- Komentar/review
- Avatar dengan inisial nama

### 4. Kalkulator Belanja (Fungsi)
```javascript
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}
```
Fitur meliputi:
- Dropdown pemilihan produk
- Input jumlah bungkus
- Kalkulasi otomatis dengan format Rupiah
- Tampilan detail pembelian

### 5. Validasi Form Kontak
**Validasi Nomor HP:**
- Hanya menerima input angka
- Panjang 10-13 digit
- Harus dimulai dengan angka 0
- Real-time validation

**Validasi Tanggal:**
- Tidak boleh memilih tanggal masa lampau
- Validasi dengan objek Date JavaScript

**Validasi Field:**
- Semua field required harus diisi
- Email format validation (HTML5)
- File type restriction

### 6. Pop-up Sukses Dinamis
```javascript
function tampilkanPopupSukses(nama) {
    // Animasi fade in dan bounce
    // Menampilkan nama user secara dinamis
}
```

### 7. Feedback System
- Success message (hijau)
- Error message (merah)
- Auto scroll ke feedback
- Animasi slide down

### 8. Clear Form Function
- Konfirmasi sebelum menghapus
- Reset semua field
- Feedback temporary (2 detik)

## 🎨 Desain Responsif

Website fully responsive dengan breakpoint:

| Device | Breakpoint | Fitur |
|--------|-----------|-------|
| Desktop | > 1024px | Layout penuh, 3 kolom grid |
| Tablet | 768px - 1024px | 2 kolom grid |
| Mobile | < 768px | 1 kolom, menu stack |
| Mobile Small | < 480px | Optimized font & spacing |

### Responsive Features:
- **Flexible Grid**: Grid otomatis menyesuaikan jumlah kolom
- **Navigation**: Menu stack vertikal di mobile
- **Forms**: Single column layout di mobile
- **Images**: Auto resize dan maintain aspect ratio
- **Touch Friendly**: Button dan link lebih besar di mobile

## 🎭 Animasi dan Efek

### CSS Animations:
- **fadeIn**: Untuk hasil kategori usia dan kalkulasi
- **slideDown**: Untuk feedback messages
- **popupBounce**: Untuk pop-up sukses
- **iconPulse**: Untuk icon di pop-up

### Hover Effects:
- Card lift effect (translateY)
- Image scale on hover
- Button shadow enhancement
- Color transitions

### Transitions:
- All interactive elements: 0.3s ease
- Smooth color changes
- Transform animations

## 📞 Informasi Kontak

- **Alamat**: Jl. Raya Bulakpelem No. 3, Kelurahan Sragi, Pekalongan, Jawa Tengah 51155
- **Telepon/WhatsApp**: +62 896-4486-9711
- **Email**: chandraq818@gmail.com
- **Jam Operasional**:
  - Senin - Jumat: 08.00 - 17.00 WIB
  - Sabtu: 08.00 - 15.00 WIB
  - Minggu: Tutup

## 🌐 Media Sosial

- **Facebook**: [Keripik Candra](https://www.facebook.com/profile.php?id=100092267325609)
- **Instagram**: [@keripik_candra](https://www.instagram.com/keripik_candra?igsh=MTVsejFvNnMwajB5cw==)
- **WhatsApp**: [Chat Langsung](https://wa.me/6289644869711)

## 🚀 Cara Menjalankan Project

### Opsi 1: Direct Browser
1. Clone atau download repository ini
2. Pastikan semua file berada dalam struktur folder yang benar
3. Buka file `index.html` di browser (Chrome, Firefox, Edge, Safari)

### Opsi 2: Live Server (Recommended untuk Development)
1. Buka project di VS Code
2. Install extension "Live Server"
3. Klik kanan pada `index.html`
4. Pilih "Open with Live Server"
5. Website akan otomatis refresh saat ada perubahan

### Opsi 3: Online
- Akses langsung: [project-umkm-seven.vercel.app](https://project-umkm-seven.vercel.app)

## 📝 Catatan Pengembangan

### Dependencies:
- **Font Awesome 6.4.0** dari CDN Cloudflare - pastikan ada koneksi internet
- Tidak ada external library JavaScript lain (Pure Vanilla JS)

### Browser Compatibility:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Assets:
- Gambar produk (JPG) disimpan di folder `Assets/`
- Video proses pembuatan (MP4) disimpan di folder `Video/`
- Ukuran gambar optimal: 300x200px untuk performa terbaik

### Customization:
Semua konten dapat disesuaikan:
- **Harga produk**: Edit di HTML dan dropdown JavaScript
- **Testimoni**: Edit array `testimoniPelanggan` di `script.js`
- **Warna tema**: Edit CSS variables di `style.css`
- **Konten teks**: Langsung edit di file HTML

## 🔧 Fitur yang Dapat Dikembangkan

- [ ] Backend integration (PHP/Node.js)
- [ ] Database untuk menyimpan form submission
- [ ] Shopping cart system
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Email notification
- [ ] Multi-language support
- [ ] Product search & filter
- [ ] Customer authentication
- [ ] Order tracking system

## 👨‍💻 Developer

Project ini dikembangkan sebagai keperluan tugas akhir Mata Kuliah **Pemrograman WEB-I**

### Learning Outcomes:
✅ HTML5 semantic structure  
✅ CSS3 modern styling & animations  
✅ JavaScript DOM manipulation  
✅ Form validation  
✅ Responsive web design  
✅ Local Storage usage  
✅ Event handling  
✅ Conditional statements (if-else)  
✅ Loops (for loop)  
✅ Functions  
✅ Arrays and Objects  

---

- Form kontak dengan validasi lengkap
- Responsive design untuk semua device
- Pop-up dan feedback system
