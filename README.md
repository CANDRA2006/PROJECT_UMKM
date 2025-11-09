# 🍠 Keripik Singkong Candra

Website UMKM modern untuk mempromosikan keripik singkong premium dengan 5 varian rasa. Dibangun menggunakan HTML5, CSS3, dan JavaScript murni dengan fitur interaktif dan desain responsif.

**🌐 Live Demo:** [project-umkm-seven.vercel.app] [(https://vercel.com/candra2006s-projects/keripik-singkong-candra/7n4qjCxR5GYeVPV78YMPzYFk83e2)](https://keripik-singkong-candra.vercel.app/)

## ⚡ Fitur Unggulan

### 🎯 Interaktif & Dinamis
- **Cek Kategori Usia** - Otomatis kategorikan pelanggan (Anak/Remaja/Dewasa/Lansia) dengan tampilan warna berbeda
- **Kalkulator Belanja** - Hitung total pembelian real-time dengan format Rupiah
- **Testimoni Dinamis** - Tampilkan 5 review pelanggan dengan rating bintang otomatis
- **Form Validasi** - Validasi nomor HP, email, dan tanggal secara real-time
- **Pop-up Sukses** - Notifikasi menarik dengan animasi bounce saat form berhasil dikirim

### 📱 Halaman Lengkap
| Halaman | Fitur Utama |
|---------|-------------|
| **Beranda** | Hero section, produk unggulan, info kontak + media sosial |
| **Tentang** | Sejarah perusahaan, filosofi, dan komitmen kualitas |
| **Produk** | Katalog + tabel harga, video proses pembuatan, 3 fitur JS interaktif |
| **Galeri** | 6 card produk dengan hover effect dan deskripsi |
| **Kontak** | Form lengkap (9 field) dengan validasi ketat dan feedback system |

## 🛠️ Tech Stack

```
Frontend: HTML5, CSS3 (Flexbox/Grid, Animations), Vanilla JavaScript
Icons: Font Awesome 6.4.0
Design: Gradient themes, smooth transitions, responsive breakpoints
Storage: LocalStorage untuk welcome notification
```

## 🍠 Produk & Harga

| Varian | Harga |
|--------|-------|
| Original | Rp 15.000 |
| Balado | Rp 16.000 |
| Bawang | Rp 17.000 |
| Keju | Rp 18.000 |
| Jagung | Rp 18.000 |

## 💻 Konsep Pemrograman yang Diterapkan

### JavaScript Features
```javascript
// 1. PERCABANGAN - Cek kategori usia
if (umur < 13) kategori = 'Anak-anak';
else if (umur <= 17) kategori = 'Remaja';
else if (umur <= 60) kategori = 'Dewasa';
else kategori = 'Lansia';

// 2. PERULANGAN - Tampilkan testimoni
for (var i = 0; i < testimoniPelanggan.length; i++) {
    // Generate card testimoni otomatis
}

// 3. FUNGSI - Kalkulator belanja
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

// 4. VALIDASI FORM
- Nomor HP: hanya angka, 10-13 digit, dimulai 0
- Tanggal: tidak boleh masa lampau
- Email: format valid dengan HTML5

// 5. LOCAL STORAGE
localStorage.setItem("welcomeShown", "true"); // Alert hanya sekali

// 6. DOM MANIPULATION
- Dynamic content generation
- Event listeners (onclick, onsubmit, keypress)
- Style manipulation untuk feedback
```

## 📱 Responsive Design

| Device | Lebar | Layout |
|--------|-------|--------|
| Desktop | >1024px | 3 kolom grid |
| Tablet | 768-1024px | 2 kolom grid |
| Mobile | <768px | 1 kolom, menu stack |

**Fitur:** Auto-resize images, flexible grid, touch-friendly buttons, optimized font sizes

## 🚀 Cara Menjalankan

```bash
# 1. Clone repository
git clone <repository-url>

# 2. Buka dengan browser
# Langsung double-click index.html

# 3. Atau gunakan Live Server (VS Code)
# Klik kanan index.html → Open with Live Server
```

## 📂 Struktur File

```
CANDRA/
├── *.html          # 5 halaman (index, tentang, produk, galeri, kontak)
├── style.css       # Styling global
├── script.js       # JavaScript interaktif
├── Assets/         # 6 gambar produk (.jpg)
└── Video/          # 1 video proses pembuatan (.mp4)
```

## 📞 Kontak & Media Sosial

**📍 Alamat:** Jl. Raya Bulakpelem No. 3, Sragi, Pekalongan, Jawa Tengah 51155  
**📱 WhatsApp:** [+62 896-4486-9711](https://wa.me/6289644869711)  
**📧 Email:** chandraq818@gmail.com  
**🕒 Operasional:** Senin-Jumat (08.00-17.00), Sabtu (08.00-15.00), Minggu Tutup

**Social Media:**  
[Facebook](https://www.facebook.com/profile.php?id=100092267325609) • [Instagram](https://www.instagram.com/keripik_candra) • [WhatsApp Business](https://wa.me/6289644869711)

---

## 🎓 Learning Outcomes

Project ini mencakup konsep pemrograman web:
- ✅ HTML5 semantic & forms
- ✅ CSS3 responsive & animations  
- ✅ JavaScript: DOM, Events, Functions, Arrays, Loops, Conditionals
- ✅ Form validation & LocalStorage
- ✅ User experience & feedback system

---

**📝 Developed for:** Tugas Akhir Pemrograman WEB-I  
