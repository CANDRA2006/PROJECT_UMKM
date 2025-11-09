// Data UMKM
const namaUMKM = "Keripik Singkong Candra";
const pemilikUMKM = "Bapak Candra";
const tahunBerdiri = 2025;
const lokasiUMKM = "Pekalongan, Jawa Tengah";

// Mengecek apakah user sudah pernah melihat notifikasi
if (!localStorage.getItem("welcomeShown")) {
    alert("🍠 Selamat datang di " + namaUMKM + "!");
    alert("Kami menyediakan keripik singkong premium dengan berbagai varian rasa yang menggugah selera!");

    // Tandai bahwa notifikasi sudah pernah ditampilkan
    localStorage.setItem("welcomeShown", "true");
}

// Mengecek kategori usia
function checkAge() {
    // Ambil nilai usia dari input
    var umur = document.getElementById('ageInput').value;
    var hasilDiv = document.getElementById('ageResult');
    
    // Cek apakah usia valid
    if (umur == "" || umur < 1) {
        alert('Mohon masukkan usia yang valid!');
        return;
    }
    
    // Menyimpan kategori
    var kategori = '';
    var kelasWarna = '';
    var emoji = '';
    
    // Percabangan berdasarkan usia
    if (umur < 13) {
        kategori = 'Anak-anak';
        kelasWarna = 'anak';
        emoji = '👶';
    } else if (umur >= 13 && umur <= 17) {
        kategori = 'Remaja';
        kelasWarna = 'remaja';
        emoji = '🧑';
    } else if (umur >= 18 && umur <= 60) {
        kategori = 'Dewasa';
        kelasWarna = 'dewasa';
        emoji = '👨';
    } else {
        kategori = 'Lansia';
        kelasWarna = 'lansia';
        emoji = '👴';
    }
    
    // Tampilkan hasil
    hasilDiv.className = 'age-result ' + kelasWarna;
    hasilDiv.innerHTML = emoji + ' Kategori Anda: <strong>' + kategori + '</strong> (Usia: ' + umur + ' tahun)';
    hasilDiv.style.display = 'block';
}

// Data testimoni pelanggan
var testimoniPelanggan = [
    {
        nama: 'Muhammad Sandi Ramadhan',
        bintang: 5,
        produk: 'Keripik Original',
        komentar: 'Keripik singkong terenak yang pernah saya coba! Renyah dan tidak terlalu berminyak. Sangat recommended!'
    },
    {
        nama: 'Siti Nurhaliza',
        bintang: 5,
        produk: 'Keripik Balado',
        komentar: 'Pedasnya pas banget! Keripik balado ini jadi camilan favorit keluarga. Selalu beli setiap minggu.'
    },
    {
        nama: 'Ahmad Putra Nur',
        bintang: 4,
        produk: 'Keripik Keju',
        komentar: 'Inovasi rasa keju-nya mantap! Anak-anak saya sangat suka. Harga juga terjangkau untuk kualitas premium.'
    },
    {
        nama: 'Dewi Lestari',
        bintang: 5,
        produk: 'Keripik Bawang',
        komentar: 'Aroma bawangnya menggoda sekali! Teksturnya renyah dan bumbunya meresap sempurna. Top deh!'
    },
    {
        nama: 'Cantika Yani',
        bintang: 5,
        produk: 'Keripik Jagung',
        komentar: 'Rasa jagungnya unik dan berbeda dari yang lain. Cocok untuk teman nonton film atau nongkrong!'
    }
];

// Menampilkan testimoni
function tampilkanTestimoni() {
    // Menampilkan testimoni
    var tempatTestimoni = document.getElementById('testimonialContainer');
    
    // Jika tidak ada tempat, keluar dari fungsi
    if (!tempatTestimoni) {
        return;
    }
    
    // Loop untuk setiap testimoni (PERULANGAN)
    for (var i = 0; i < testimoniPelanggan.length; i++) {
        // Ambil data testimoni
        var testi = testimoniPelanggan[i];
        
        // Buat bintang rating
        var bintang = '';
        for (var j = 0; j < testi.bintang; j++) {
            bintang = bintang + '⭐';
        }
        
        // Ambil huruf pertama nama
        var inisial = testi.nama.charAt(0);
        
        // Buat elemen card untuk testimoni
        var card = document.createElement('div');
        card.className = 'testimonial-card';
        
        // Isi HTML card
        card.innerHTML = 
            '<div class="testimonial-header">' +
                '<div class="testimonial-avatar">' + inisial + '</div>' +
                '<div class="testimonial-info">' +
                    '<h4>' + testi.nama + '</h4>' +
                    '<div class="testimonial-rating">' + bintang + '</div>' +
                    '<small style="color: #888;">' + testi.produk + '</small>' +
                '</div>' +
            '</div>' +
            '<p class="testimonial-text">' + testi.komentar + '</p>';
        
        // Tambahkan card ke container
        tempatTestimoni.appendChild(card);
    }
}
// Menghitung total belanja
function hitungTotal(harga, jumlah) {
    var total = harga * jumlah;
    return total;
}

// Fungsi ketika tombol hitung diklik
function calculateTotal(event) {
    event.preventDefault();
    
    // Ambil nilai dari form
    var harga = document.getElementById('productSelect').value;
    var jumlah = document.getElementById('quantityInput').value;
    var hasilDiv = document.getElementById('calculationResult');
    
    // Cek apakah sudah diisi
    if (harga == "" || jumlah == "") {
        alert('Mohon lengkapi semua field!');
        return;
    }
    
    // Hitung total
    var total = hitungTotal(harga, jumlah);
    
    // Ambil nama produk
    var selectElement = document.getElementById('productSelect');
    var namaProduk = selectElement.options[selectElement.selectedIndex].text;
    
    // Format ke rupiah
    var totalRupiah = 'Rp ' + total.toLocaleString('id-ID');
    var hargaRupiah = 'Rp ' + parseInt(harga).toLocaleString('id-ID');
    
    // Hasil
    hasilDiv.innerHTML = 
        '<h3>📋 Detail Pembelian</h3>' +
        '<p style="margin: 0.5rem 0;"><strong>Produk:</strong> ' + namaProduk.split(' - ')[0] + '</p>' +
        '<p style="margin: 0.5rem 0;"><strong>Harga Satuan:</strong> ' + hargaRupiah + '</p>' +
        '<p style="margin: 0.5rem 0;"><strong>Jumlah:</strong> ' + jumlah + ' bungkus</p>' +
        '<div class="total-price">' + totalRupiah + '</div>' +
        '<p style="font-size: 0.9rem; opacity: 0.9;">Siap untuk memesan? Hubungi kami via WhatsApp!</p>';
    
    hasilDiv.style.display = 'block';
}

// Validasi nomor HP 
function validasiNomorHP() {
    var inputHP = document.getElementById('nomorhp');
    
    // Jika input HP tidak ada, keluar
    if (!inputHP) {
        return;
    }
    
    // Ketika user mengetik
    inputHP.addEventListener('input', function() {
        // Hapus semua karakter selain angka
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

// Menampilkan pop-up sukses
function tampilkanPopupSukses(nama) {
    // Buat layer gelap background
    var overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.id = 'popupOverlay';
    
    // Buat kotak pop-up
    var popup = document.createElement('div');
    popup.className = 'popup-container';
    
    // Isi pop-up
    popup.innerHTML = 
        '<div class="popup-icon">' +
            '<i class="fas fa-check-circle"></i>' +
        '</div>' +
        '<h2 class="popup-title">PESAN BERHASIL DIKIRIM!</h2>' +
        '<p class="popup-message">Terima kasih <strong>' + nama + '</strong>! Pesan Anda telah kami terima.</p>' +
        '<p class="popup-submessage">Tim kami akan segera menghubungi Anda.</p>' +
        '<button class="popup-btn" onclick="tutupPopup()">' +
            '<i class="fas fa-times-circle"></i> Tutup' +
        '</button>';
    
    // Masukkan popup ke overlay
    overlay.appendChild(popup);
    
    // Tambahkan ke halaman
    document.body.appendChild(overlay);
    
    // Tampilkan dengan animasi
    setTimeout(function() {
        overlay.classList.add('show');
    }, 10);
    
}

// Fungsi untuk menutup pop-up
function tutupPopup() {
    var overlay = document.getElementById('popupOverlay');
    
    if (overlay) {
        overlay.classList.remove('show');
        
        // Hapus dari halaman setelah animasi selesai
        setTimeout(function() {
            overlay.remove();
        }, 300);
    }
}

// Fungsi untuk menampilkan pesan feedback
function tampilkanFeedback(tipe, pesan) {
    var feedbackDiv = document.getElementById('feedbackMessage');
    
    // Jika tidak ada, keluar
    if (!feedbackDiv) {
        return;
    }
    
    // Reset class
    feedbackDiv.className = 'feedback-message';
    
    // Tambah class sesuai tipe
    if (tipe == 'success') {
        feedbackDiv.className = 'feedback-message success';
        var icon = 'fa-check-circle';
    } else {
        feedbackDiv.className = 'feedback-message error';
        var icon = 'fa-exclamation-circle';
    }
    
    // Isi pesan
    feedbackDiv.innerHTML = '<i class="fas ' + icon + '"></i> ' + pesan;
    
    // Tampilkan
    feedbackDiv.style.display = 'block';
    
    // Scroll ke feedback
    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Fungsi untuk menyembunyikan feedback
function sembunyikanFeedback() {
    var feedbackDiv = document.getElementById('feedbackMessage');
    
    if (feedbackDiv) {
        feedbackDiv.style.display = 'none';
    }
}

// Fungsi ketika form di-submit
function handleSubmit(event) {
    event.preventDefault();
    
    // Ambil elemen form
    var form = document.getElementById('contactForm');
    
    // Ambil semua nilai dari form
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var nomorHP = document.getElementById('nomorhp').value;
    var tanggal = document.getElementById('tanggal').value;
    var jenisKelamin = document.getElementById('jeniskelamin').value;
    var kategori = document.getElementById('kategori').value;
    var pesan = document.getElementById('pesan').value;
    
    // VALIDASI: Cek apakah semua terisi
    if (nama == "" || email == "" || nomorHP == "" || tanggal == "" || jenisKelamin == "" || kategori == "" || pesan == "") {
        tampilkanFeedback('error', 'Mohon lengkapi semua field yang wajib diisi!');
        return false;
    }
    
    // VALIDASI: Cek panjang nomor HP
    if (nomorHP.length < 10 || nomorHP.length > 13) {
        tampilkanFeedback('error', 'Nomor HP harus antara 10-13 digit!');
        return false;
    }
    
    // VALIDASI: Nomor HP harus dimulai dengan 0
    if (nomorHP.charAt(0) != '0') {
        tampilkanFeedback('error', 'Nomor HP harus dimulai dengan angka 0!');
        return false;
    }
    
    // VALIDASI: Tanggal tidak boleh lampau
    var tanggalPilihan = new Date(tanggal);
    var tanggalSekarang = new Date();
    tanggalSekarang.setHours(0, 0, 0, 0);
    
    if (tanggalPilihan < tanggalSekarang) {
        tampilkanFeedback('error', 'Tanggal pengiriman tidak boleh di masa lampau!');
        return false;
    }
    
    // Jika semua validasi OK, tampilkan pop-up sukses
    tampilkanPopupSukses(nama);
    
    // Tampilkan feedback sukses
    var pesanSukses = 'Terima kasih ' + nama + '! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera melalui ' + email + ' atau ' + nomorHP + '.';
    tampilkanFeedback('success', pesanSukses);
}

// Fungsi untuk menghapus semua isi form
function clearForm() {
    var form = document.getElementById('contactForm');
    
    // Konfirmasi dulu
    var yakin = confirm('Apakah Anda yakin ingin menghapus semua data?');
    
    if (yakin) {
        // Reset form
        form.reset();
        
        // Sembunyikan feedback
        sembunyikanFeedback();
        
        // Tampilkan pesan sukses
        tampilkanFeedback('success', 'Semua data telah dihapus!');
        
        // Sembunyikan pesan setelah 2 detik
        setTimeout(function() {
            sembunyikanFeedback();
        }, 2000);
    }
}

// Fungsi yang dijalankan saat halaman selesai dimuat
window.onload = function() {
    // Tampilkan testimoni
    tampilkanTestimoni();
    
    // Aktifkan validasi nomor HP
    validasiNomorHP();
};

// Fungsi untuk tombol Enter pada input usia
document.addEventListener('DOMContentLoaded', function() {
    var inputUsia = document.getElementById('ageInput');
    
    if (inputUsia) {
        inputUsia.addEventListener('keypress', function(event) {
            // Jika tombol Enter ditekan
            if (event.key === 'Enter') {
                checkAge();
            }
        });
    }
});
