// ===== INFORMASI UMKM =====
const namaUMKM = "Kopi Nusantara";
const tahunBerdiri = 2020;
const slogan = "Dari Petani ke Cangkir Anda";

console.log("=== INFORMASI UMKM ===");
console.log("Nama UMKM:", namaUMKM);
console.log("Tahun Berdiri:", tahunBerdiri);
console.log("Slogan:", slogan);
console.log("");

// ===== JUMLAH PRODUK =====
let jumlahProdukAwal = 3;
console.log("=== JUMLAH PRODUK ===");
console.log("Jumlah produk awal:", jumlahProdukAwal);

// Modifikasi jumlah produk dengan operator
jumlahProdukAwal += 2; 
console.log("Setelah menambah 2 produk baru:", jumlahProdukAwal);

jumlahProdukAwal *= 2; 
console.log("Setelah menggandakan stok:", jumlahProdukAwal);

jumlahProdukAwal -= 3; 
console.log("Setelah 3 produk terjual:", jumlahProdukAwal);
console.log("");

// ===== PRODUK BERDASARKAN JENIS =====
let produkArabika = 1;
let produkRobusta = 1;
let produkLiberika = 1;

console.log("=== PRODUK BERDASARKAN JENIS ===");
console.log("Jumlah Arabika Gayo:", produkArabika);
console.log("Jumlah Robusta Temanggung:", produkRobusta);
console.log("Jumlah Liberika Riau:", produkLiberika);
console.log("Total jenis kopi:", produkArabika + produkRobusta + produkLiberika);
console.log("");

// ===== HARGA PRODUK =====
const hargaArabika = 45000;
const hargaRobusta = 38000;
const hargaLiberika = 42000;

console.log("=== HARGA PRODUK (per 250g) ===");
console.log("Arabika Gayo: Rp", hargaArabika.toLocaleString('id-ID'));
console.log("Robusta Temanggung: Rp", hargaRobusta.toLocaleString('id-ID'));
console.log("Liberika Riau: Rp", hargaLiberika.toLocaleString('id-ID'));
console.log("");

// ===== PERHITUNGAN PENJUALAN =====
let totalPenjualan = 0;
let arabikaTerjual = 5;
let robustaTerjual = 8;
let liberikaTerjual = 3;

totalPenjualan = (arabikaTerjual * hargaArabika) + 
                 (robustaTerjual * hargaRobusta) + 
                 (liberikaTerjual * hargaLiberika);

console.log("=== LAPORAN PENJUALAN ===");
console.log("Arabika terjual:", arabikaTerjual, "pack");
console.log("Robusta terjual:", robustaTerjual, "pack");
console.log("Liberika terjual:", liberikaTerjual, "pack");
console.log("Total penjualan: Rp", totalPenjualan.toLocaleString('id-ID'));
console.log("");

// ===== STOK GUDANG =====
let stokArabika = 50;
let stokRobusta = 75;
let stokLiberika = 30;
let totalStok = stokArabika + stokRobusta + stokLiberika;

console.log("=== STOK GUDANG ===");
console.log("Stok Arabika:", stokArabika, "pack");
console.log("Stok Robusta:", stokRobusta, "pack");
console.log("Stok Liberika:", stokLiberika, "pack");
console.log("Total stok:", totalStok, "pack");
console.log("");

// ===== OPERASI STOK =====
console.log("=== OPERASI STOK ===");
stokArabika -= arabikaTerjual;
console.log("Stok Arabika setelah penjualan:", stokArabika, "pack");

stokRobusta -= robustaTerjual;
console.log("Stok Robusta setelah penjualan:", stokRobusta, "pack");

stokLiberika -= liberikaTerjual;
console.log("Stok Liberika setelah penjualan:", stokLiberika, "pack");

let sisaStokTotal = stokArabika + stokRobusta + stokLiberika;
console.log("Sisa total stok:", sisaStokTotal, "pack");
console.log("");

//INFO TAMBAHAN 
const beratProduk = 250; // gram
let jumlahPelanggan = 150;

console.log("=== INFORMASI TAMBAHAN ===");
console.log("Berat per produk:", beratProduk, "gram");
console.log("Jumlah pelanggan:", jumlahPelanggan, "orang");

// Menambah pelanggan baru
jumlahPelanggan += 25;
console.log("Pelanggan setelah promosi:", jumlahPelanggan, "orang");

// Persentase pertumbuhan pelanggan
let pertumbuhanPelanggan = (25 / 150) * 100;
console.log("Pertumbuhan pelanggan:", pertumbuhanPelanggan.toFixed(2) + "%");
console.log("");

console.log("=== Terima kasih telah mengunjungi", namaUMKM, "===");