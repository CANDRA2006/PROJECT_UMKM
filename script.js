 // PERCABANGAN - Fungsi cek kategori usia
        function checkAge() {
            const age = parseInt(document.getElementById('ageInput').value);
            const resultDiv = document.getElementById('ageResult');
            
            if (!age || age < 1) {
                alert('Mohon masukkan usia yang valid!');
                return;
            }
            
            let category = '';
            let className = '';
            let icon = '';
            
            if (age < 13) {
                category = 'Anak-anak';
                className = 'anak';
                icon = '👶';
            } else if (age >= 13 && age <= 17) {
                category = 'Remaja';
                className = 'remaja';
                icon = '🧑';
            } else if (age >= 18 && age <= 60) {
                category = 'Dewasa';
                className = 'dewasa';
                icon = '👨';
            } else {
                category = 'Lansia';
                className = 'lansia';
                icon = '👴';
            }
            
            resultDiv.className = `age-result ${className}`;
            resultDiv.innerHTML = `${icon} Kategori Anda: <strong>${category}</strong> (Usia: ${age} tahun)`;
            resultDiv.style.display = 'block';
        }

// PERULANGAN - Menampilkan testimoni
        const testimonials = [
            {
                name: 'Muhammad Sandi Ramadhan',
                rating: 5,
                product: 'Keripik Original',
                text: 'Keripik singkong terenak yang pernah saya coba! Renyah dan tidak terlalu berminyak. Sangat recommended!'
            },
            {
                name: 'Siti Nurhaliza',
                rating: 5,
                product: 'Keripik Balado',
                text: 'Pedasnya pas banget! Keripik balado ini jadi camilan favorit keluarga. Selalu beli setiap minggu.'
            },
            {
                name: 'Ahmad Putra Nur',
                rating: 4,
                product: 'Keripik Keju',
                text: 'Inovasi rasa keju-nya mantap! Anak-anak saya sangat suka. Harga juga terjangkau untuk kualitas premium.'
            },
            {
                name: 'Dewi Lestari',
                rating: 5,
                product: 'Keripik Bawang',
                text: 'Aroma bawangnya menggoda sekali! Teksturnya renyah dan bumbunya meresap sempurna. Top deh!'
            },
            {
                name: 'Cantika Yani',
                rating: 5,
                product: 'Keripik Jagung',
                text: 'Rasa jagungnya unik dan berbeda dari yang lain. Cocok untuk teman nonton film atau nongkrong!'
            }
        ];

// forEach untuk menampilkan testimoni
        function displayTestimonials() {
            const container = document.getElementById('testimonialContainer');
            
            testimonials.forEach((testimonial, index) => {
                const stars = '⭐'.repeat(testimonial.rating);
                const initial = testimonial.name.charAt(0);
                
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.innerHTML = `
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">${initial}</div>
                        <div class="testimonial-info">
                            <h4>${testimonial.name}</h4>
                            <div class="testimonial-rating">${stars}</div>
                            <small style="color: #888;">${testimonial.product}</small>
                        </div>
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
                `;
                
                container.appendChild(card);
            });
        }

// FUNGSI - Menghitung total belanja
        function hitungTotal(harga, jumlah) {
            return harga * jumlah;
        }

        function calculateTotal(event) {
            event.preventDefault();
            
            const harga = parseInt(document.getElementById('productSelect').value);
            const jumlah = parseInt(document.getElementById('quantityInput').value);
            const resultDiv = document.getElementById('calculationResult');
            
            if (!harga || !jumlah) {
                alert('Mohon lengkapi semua field!');
                return;
            }
            
            const total = hitungTotal(harga, jumlah);
            const productName = document.getElementById('productSelect').options[document.getElementById('productSelect').selectedIndex].text;
            
// Format rupiah
            const formattedTotal = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(total);
            
            const formattedHarga = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(harga);
            
            resultDiv.innerHTML = `
                <h3>📋 Detail Pembelian</h3>
                <p style="margin: 0.5rem 0;"><strong>Produk:</strong> ${productName.split(' - ')[0]}</p>
                <p style="margin: 0.5rem 0;"><strong>Harga Satuan:</strong> ${formattedHarga}</p>
                <p style="margin: 0.5rem 0;"><strong>Jumlah:</strong> ${jumlah} bungkus</p>
                <div class="total-price">${formattedTotal}</div>
                <p style="font-size: 0.9rem; opacity: 0.9;">Siap untuk memesan? Hubungi kami via WhatsApp!</p>
            `;
            resultDiv.style.display = 'block';
        }

// Panggil fungsi menampilkan testimoni saat halaman dimuat
        window.onload = function() {
            displayTestimonials();
        };

//untuk enter key pada input usia
        document.getElementById('ageInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkAge();
            }
        });
