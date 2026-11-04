# ASEVA AQUATICS — PRD & System Design Website

Versi 1.2 · 3 November 2026 · Stack: Next.js di Netlify (Tanpa Database) · Fokus utama: Web, Konversi WhatsApp & Dominasi SEO Lokal (Bandung, Jawa Barat & Jabodetabek)

## 1. Ringkasan Eksekutif

**ASEVA AQUATICS** adalah brand premium yang menjual arwana super red dan membuat aquarium custom kelas atas. Website ini bukan toko online biasa. Fungsinya adalah **etalase kelas atas, mesin akuisisi SEO, sekaligus penyaring konsultasi**: membangun kepercayaan, mendominasi pencarian Google untuk pasar kelas atas, memamerkan karya, lalu mengarahkan calon klien ke percakapan pribadi (WhatsApp atau jadwal konsultasi).

Keputusan produk utama:

* **Fokus Web & Tanpa Database (Database-less Architecture).** Pada tahap ini, sistem dibuat ringan, cepat, dan bebas biaya perawatan database. Penyimpanan data formulir ditangani langsung melalui **Netlify Forms**, notifikasi **Email**, pencatatan otomatis ke **Google Sheets**, dan penerusan langsung ke **WhatsApp**.

* **Inquiry-first, bukan checkout-first.** Arwana super red dan aquarium custom adalah produk bernilai tinggi yang butuh kepercayaan, verifikasi, dan sentuhan personal. Tidak ada keranjang belanja di MVP.

* **SEO-Driven Architecture.** Seluruh struktur halaman, kecepatan muat di Netlify CDN, dan arsitektur informasi dirancang sejak hari pertama untuk memenangkan kata kunci bernilai tinggi di Bandung, Jabodetabek, dan Jawa Barat.

* **Dua lini bisnis, satu brand.** Lini *Arwana* (koleksi ikan, tiap ekor unik) dan lini *Aquarium Custom* (design, build, maintenance).

* **Mobile-first.** Mayoritas calon klien di Indonesia membuka dari ponsel dan terbiasa menutup transaksi lewat WhatsApp.

* **Kesan mahal lewat pengekangan.** Ruang kosong luas, fotografi sinematik, tipografi serif elegan, animasi pelan. Tidak ada banner diskon, tidak ada kesan pasar.

## 2. Analisis Referensi

Saya meninjau kelima referensi Anda. Catatan: halaman Kindai hanya terbaca sebagian (konten dimuat dinamis), jadi analisisnya bersumber dari metadata dan deskripsinya.

| Referensi | Yang layak diadopsi | Yang dihindari | 
| ----- | ----- | ----- | 
| **Aquarium Architecture** (UK/NYC) | Positioning "ultimate interior luxury", alur layanan lengkap (konsultasi, desain, konstruksi, project management, maintenance), studi kasus, liputan media, kolaborasi dengan arsitek dan desainer interior | Struktur situs terasa lama dan teks-berat | 
| **Kindai** (Dubai) | Klaim bukti sosial berbasis angka ("300+ proyek"), cakupan layanan end-to-end (desain, build, maintenance, life support), CTA tunggal "Request a consultation", tema gelap navy | Informasi tidak bisa diverifikasi penuh dari hasil baca saya | 
| **aQuatic Style** (Singapura) | Katalog produk jelas, sertifikasi dan garansi sebagai pembangun kepercayaan, galeri, testimoni, profil tim | Kesan template dan komersial: harga ritel, tombol "Buy now", slider berat. Terlalu "toko" untuk positioning ASEVA | 
| **CaVenza** (Italia) | **Referensi terbaik untuk nuansa.** Form konsultasi dengan **rentang budget**, proses 4 langkah (Visi, Perancangan, Pembuatan, Pemasangan), halaman material (kaca, batu, kayu, inox), janji respons dalam 48 jam, narasi sains ("bukan estetika, ini biologi"), tawaran eksklusif "hanya undangan" | Multi-bahasa 5 bahasa tidak perlu di tahap awal | 
| **Indo Akuarium** (Indonesia) | Kredibilitas lokal: cerita pendiri, tahun pengalaman, proyek ikonik, blog berbahasa Indonesia, kontak WhatsApp langsung | Fokus proyek raksasa (landmark), ASEVA lebih intim dan residensial | 

**Kesimpulan arah:** gabungkan **kemewahan sunyi ala CaVenza**, **struktur layanan ala Aquarium Architecture**, **bukti sosial ala Kindai**, dan **kehangatan lokal ala Indo Akuarium**. Hindari gaya katalog ritel ala aQuatic Style.

## 3. Tujuan Bisnis dan KPI

**Tujuan utama**

1. Menghasilkan lead konsultasi berkualitas untuk aquarium custom dan pembelian arwana.

2. Membangun citra brand premium yang berbeda dari penjual arwana dan toko aquarium biasa.

3. Menjadi hasil teratas pencarian organik (SEO) di Bandung, Jawa Barat, dan Jabodetabek untuk kata kunci arwana super red dan aquarium custom.

4. Menyediakan portofolio digital berkecepatan tinggi yang bisa dikirim ke klien saat negosiasi.

**KPI (target 3 sampai 6 bulan setelah peluncuran)**

| Metrik | Target awal | 
| ----- | ----- | 
| Klik WhatsApp dan submit form konsultasi per bulan | 40 sampai 80 | 
| Lead berkualitas (budget sesuai) | minimal 30% dari total lead | 
| Waktu respons ke lead | di bawah 2 jam jam kerja | 
| LCP halaman utama (4G mobile via Netlify CDN) | di bawah 2,0 detik | 
| Skor Lighthouse mobile (Performance, SEO, Accessibility) | 95 ke atas (SEO wajib 100) | 
| Posisi untuk "aquarium custom Bandung" & "arwana super red Bandung" | Halaman 1 (Top 5) dalam 3–6 bulan | 
| Pertumbuhan impresi organik (Google Search Console) | Naik >25% dari bulan ke bulan | 

## 4. Target Pengguna

Target Anda: orang kaya, penghobi, dan pengusaha. Saya pecah menjadi tiga persona.

**Persona A: Kolektor Arwana (penghobi serius)** Pria 35 sampai 60 tahun, paham grade warna, bentuk, dan *lineage*. Skeptis terhadap penjual baru. Butuh bukti: sertifikat, video ikan berenang, foto warna di cahaya alami, riwayat perawatan. Mengejar *kepercayaan dan keaslian*.

**Persona B: Pemilik Rumah Premium** Pemilik rumah atau villa di Bandung, Jakarta (Jabodetabek), atau kota besar Jawa Barat yang ingin aquarium sebagai elemen interior utama. Mengejar *estetika dan prestise*, bekerja bersama arsitek atau desainer interior. Sensitif terhadap kerumitan dan risiko kebocoran.

**Persona C: Pengusaha (hospitality dan komersial)** Pemilik restoran, hotel, kantor, atau showroom yang memakai aquarium sebagai daya tarik dan penanda brand. Mengejar *dampak visual, keandalan, dan kontrak perawatan*.

## 5. Ruang Lingkup

**MVP (Fase 1 — Fokus Web, SEO & Tanpa Database)**

* Website marketing statis/hibrida super cepat di **Netlify** (bahasa Indonesia)

* Katalog arwana dengan halaman detail per ekor (dikelola via Headless CMS gratis atau file konten tanpa perlu database rumit)

* Halaman layanan aquarium custom, portofolio, proses, material

* Halaman pendaratan SEO lokal (*Local Landing Pages*) untuk Bandung, Jabodetabek, dan Jawa Barat

* Form konsultasi dengan rentang budget (menggunakan **Netlify Forms** + notifikasi Email + meneruskan pesan ke WhatsApp)

* Jurnal dan pusat edukasi (fondasi utama *Topical Authority* SEO)

* Optimasi SEO teknis menyeluruh (Schema.org JSON-LD, Sitemap otomatis, Meta Open Graph untuk pratinjau WhatsApp)

**Fase 2 (Saat Bisnis Butuh Sistem Transaksional)**

* Penambahan database untuk manajemen lead internal (CRM sederhana) dan riwayat perawatan klien

* Versi bahasa Inggris

* Booking jadwal survei lokasi (kalender interaktif)

* Reservasi ikan dengan deposit online (Midtrans atau Xendit)

* Paket kontrak maintenance berlangganan

**Di luar cakupan (sekarang)**

* Database penyimpan transaksi atau akun pengguna (login/register)

* Pengiriman atau instalasi di luar wilayah Jawa Barat & Jabodetabek, serta ekspor

* Keranjang belanja dan checkout penuh

* Aplikasi mobile native

## 6. Arsitektur Informasi (Sitemap ramah SEO)

Struktur URL dirancang datar (*flat architecture*) dan kaya kata kunci agar mudah dirayapi Googlebot:

* `/` — **Beranda** (Fokus positioning brand, ringkasan layanan, pengantar arwana & aquarium custom)

* `/arwana` — **Koleksi Arwana Super Red** (Daftar dan filter)

  * `/arwana/[slug-kode-ikan]` — Detail ikan per ekor (tetap hidup meski sudah terjual untuk nilai SEO dan bukti sosial)

  * `/panduan-arwana-super-red` — Halaman pilar (*Pillar Page*) edukasi & anatomi kualitas arwana

* `/aquarium-custom` — **Jasa Pembuatan Aquarium Custom** (Desain, pembuatan, instalasi)

  * `/aquarium-custom/proses` — Proses kerja 4 langkah

  * `/aquarium-custom/material-teknologi` — Spesifikasi kaca ultra-clear, filtrasi life-support, kabinet

* `/perawatan-aquarium` — **Jasa Maintenance & Perawatan Aquarium**

* `/portofolio` — **Galeri Proyek & Studi Kasus**

  * `/portofolio/[slug-proyek]` — Detail studi kasus (dilengkapi kata kunci lokasi proyek, misal: *Rumah Klasik di Dago, Bandung*)

* `/area-layanan` — **Halaman SEO Lokal Terdedikasi (Zona 1 & Zona 2)**

  * `/area-layanan/bandung` (Zona 1 — Prioritas utama)

  * `/area-layanan/jakarta-jabodetabek` (Zona 2)

  * `/area-layanan/jawa-barat` (Zona 2 — Kota besar Jawa Barat lainnya)

* `/jurnal` — **Artikel & Edukasi SEO** (`/jurnal/[slug-artikel]`)

* `/tentang` — **Tentang ASEVA & Legalitas Satwa**

* `/konsultasi` — **Formulir Konsultasi & Janji Temu**

* `/legal` — Kebijakan Privasi, Syarat Ketentuan, Kebijakan Garansi DOA (*Dead on Arrival*)

Navigasi utama dibatasi 6 item: **Arwana, Aquarium Custom, Portofolio, Jurnal, Tentang, Konsultasi** (tombol menonjol). Halaman Area Layanan diletakkan di *Footer* agar memperkuat sinyal SEO lokal di seluruh situs tanpa memenuhi menu atas.

## 7. Kebutuhan Fungsional

### 7.1 Beranda

1. **Hero sinematik**: video loop pendek (arwana berenang di aquarium premium) atau foto besar, tagline singkat yang mengandung proposisi nilai, satu CTA "Jadwalkan Konsultasi". Wajib ada *poster image* teroptimasi (WebP/AVIF) agar skor LCP SEO tidak terganggu.

2. **Dua pintu masuk** berdampingan: Koleksi Arwana Super Red dan Desain Aquarium Custom.

3. **Pernyataan filosofi** satu paragraf (ekosistem hidup sebagai karya seni interior).

4. **Proyek pilihan** (3 sampai 4 karya terbaik, geser horizontal).

5. **Proses 4 langkah**: Visi, Perancangan, Pembuatan, Pemasangan.

6. **Bukti sosial**: jumlah proyek, tahun pengalaman, testimoni, jaminan sertifikasi resmi.

7. **Koleksi arwana pilihan** (4 ekor unggulan).

8. **FAQ Singkat (Accordion)**: menjawab 4–5 pertanyaan paling sering dicari di Google tentang harga aquarium custom dan legalitas arwana di Bandung & Jabodetabek.

9. **CTA penutup** dan cuplikan form konsultasi.

### 7.2 Koleksi Arwana

* Kartu ikan: foto utama, kode unik (contoh: ASV-0042), ukuran, grade, status (Tersedia, Dipesan, Terjual).

* Filter instan di sisi klien (tanpa reload halaman): ukuran (cm), grade warna, status.

* Ikan terjual tetap ditampilkan sebagai *arsip* (membangun bukti sosial, kredibilitas, dan menjaga halaman tetap terindeks Google).

* **Detail ikan**: galeri foto, video berenang, spesifikasi (ukuran, usia, warna, bentuk sirip dan kepala), **sertifikat dan nomor microchip**, kondisi kesehatan, status harga ("Hubungi untuk harga"), tombol "Tanya via WhatsApp" dengan pesan otomatis berisi kode dan tautan halaman ikan.

### 7.3 Aquarium Custom

* Halaman layanan: Desain, Pembuatan, Instalasi, Perawatan, dengan ilustrasi proses dan material (kaca *low-iron / ultra-clear*, rangka baja tahan karat, sistem filtrasi tersembunyi, pencahayaan spektrum khusus).

* Jenis proyek: aquarium dinding (*built-in*), partisi ruangan dua sisi, aquarium pilar/kolom, ikon lobi komersial.

* Halaman **Material dan Teknologi** untuk menjustifikasi harga premium sekaligus menangkap kata kunci pencarian teknis dari arsitek dan kontraktor interior.

* Garansi kebocoran dan layanan purna jual dijelaskan terbuka.

### 7.4 Portofolio

* Grid galeri dengan filter: Residensial, Komersial, Arwana, Ukuran.

* Studi kasus: konteks klien (boleh anonim, misal: *Kediaman Pribadi di Setiabudi, Bandung*), tantangan arsitektural, solusi teknis ASEVA, spesifikasi dimensi & filtrasi, foto detail, video.

### 7.5 Konsultasi dan Lead Capture (Tanpa Database)

Field form:

| Field | Catatan | 
| ----- | ----- | 
| Nama lengkap | wajib | 
| Nomor WhatsApp | wajib, validasi format Indonesia | 
| Email | opsional | 
| Kota / Wilayah | pilihan: Bandung Raya (Zona 1), Jabodetabek (Zona 2), Jawa Barat lainnya (Zona 2), Luar Area Layanan | 
| Minat | Arwana Super Red, Aquarium Custom, Perawatan, Kolaborasi Arsitek/Interior | 
| Rentang budget | pilihan rentang investasi | 
| Cerita singkat | teks bebas (ukuran ruangan, konsep yang diinginkan) | 
| Persetujuan privasi | wajib | 

**Alur setelah submit (Zero-Database Flow):**

1. Form ditangkap oleh **Netlify Forms** (dilengkapi proteksi spam *honeypot* dan Cloudflare Turnstile).

2. Data secara otomatis dikirim ke **Email pemilik** (via Resend / notifikasi bawaan Netlify) dan dicatat otomatis sebagai baris baru di **Google Sheets** (via webhook) agar Anda tetap memiliki rekap data rapi seperti menggunakan database.

3. Layar menampilkan pesan sukses "Terima kasih. Tim kurator kami akan menghubungi Anda", disertai tombol langsung **"Lanjutkan Percakapan di WhatsApp Sekarang"** yang otomatis membuka WhatsApp pemilik dengan draf pesan berisi ringkasan isi form barusan.

Tombol WhatsApp mengambang (*floating button*) tersedia di sudut kanan bawah semua halaman, dengan teks awal kontekstual sesuai halaman yang sedang dibuka pengunjung.

### 7.6 Jurnal (Mesin Akuisisi SEO)

Pusat artikel edukasi mendalam (anatomi arwana super red, panduan ruang dan beban lantai untuk aquarium besar, estimasi investasi aquarium custom, manajemen parameter air). Setiap artikel wajib memiliki komponen pengait (*embedded CTA*) menuju halaman koleksi ikan atau form konsultasi.

### 7.7 Daftar Kebutuhan Ringkas

| ID | Kebutuhan | Prioritas | 
| ----- | ----- | ----- | 
| FR-01 | Katalog arwana dengan filter instan dan penanda status | Wajib | 
| FR-02 | Halaman detail ikan dengan galeri, video, info microchip & sertifikat | Wajib | 
| FR-03 | Portofolio dan halaman studi kasus mendalam | Wajib | 
| FR-04 | Form konsultasi via Netlify Forms + Email + Google Sheets + WhatsApp | Wajib | 
| FR-05 | WhatsApp CTA kontekstual (pesan otomatis mengenali halaman aktif) | Wajib | 
| FR-06 | CMS ringan (Sanity) untuk mengelola ikan, proyek, dan artikel | Wajib | 
| FR-07 | Paket lengkap SEO Teknis, Schema JSON-LD, & Halaman Area Layanan (Zona 1 & 2) | Wajib | 
| FR-08 | Pelacakan konversi (GA4, Google Search Console, Meta Pixel) | Wajib | 
| FR-09 | Mode "Harga Hubungi Kami" sebagai standar tampilan | Wajib | 
| FR-10 | Halaman Panduan Pilar (Pillar Page) Arwana & Aquarium Custom | Sebaiknya | 
| FR-11 | Versi bahasa Inggris | Fase 2 | 
| FR-12 | Database kustom & reservasi deposit online | Fase 2 | 

## 8. Arahan Desain dan Brand

**Karakter:** tenang, percaya diri, berkelas. Mewah tanpa pamer.

**Palet warna**

* Latar utama: hitam kebiruan sangat gelap (`#0A0F14`) seperti kedalaman air.

* Permukaan sekunder: abu arang (`#12181F`).

* Aksen utama: emas champagne (`#C9A96E`) untuk garis, tombol, dan detail.

* Aksen sekunder: merah arwana yang sangat terbatas (`#A8322D`), hanya sebagai sentuhan.

* Teks: putih gading (`#F2EDE4`) dan abu hangat.

* Mode pembaca nyaman (kontras terkalibrasi) pada halaman artikel Jurnal agar pengunjung betah membaca lama (*dwell time* tinggi bagus untuk SEO).

**Tipografi:** judul memakai serif elegan (*Cormorant Garamond* atau *Playfair Display*), isi memakai sans-serif bersih (*Manrope* atau *Inter*). Judul besar, jarak antarhuruf lega, banyak ruang kosong.

**Fotografi dan video:** ini 70% dari kesan mahal. Rekomendasi: sesi foto profesional dengan pencahayaan sinematik, latar gelap, ikan sebagai tokoh utama. Siapkan foto detail sisik dan sirip, video 10 sampai 20 detik tanpa suara, dan foto proyek jadi dalam interior asli. **Jangan pakai foto stok murahan.**

**Nada tulisan:** bahasa Indonesia yang halus dan percaya diri. Hindari kata seperti "murah", "promo", "diskon", "obral". Pakai kata seperti "karya", "koleksi", "dirancang khusus", "pendampingan", "investasi ruang".

## 9. Kebutuhan Non-Fungsional

* **Performa (Krusial untuk Peringkat Google):** LCP di bawah 2,0 dtk, CLS di bawah 0,05, INP di bawah 150 ms pada 4G mobile. Semua halaman utama dirender statis (SSG/ISR) di Edge CDN Netlify.

* **Responsif:** prioritas layar 360 sampai 430 px, lalu tablet dan desktop.

* **Aksesibilitas:** target WCAG 2.2 AA (kontras teks emas di atas latar gelap diuji ketat, semua gambar wajib memiliki `alt text` deskriptif untuk SEO gambar).

* **Keamanan:** HTTPS otomatis dari Netlify, header keamanan ketat di `netlify.toml`, proteksi spam Cloudflare Turnstile + Netlify Honeypot pada form.

* **Privasi:** sesuai UU PDP No. 27/2022: persetujuan eksplisit pada form konsultasi dan penjelasan penggunaan data.

## 10. Strategi SEO Mendalam (Fokus Utama)

Karena website ini bertumpu pada penemuan organik oleh klien berdaya beli tinggi, arsitektur SEO tidak boleh hanya berupa tambahan di akhir, melainkan fondasi utama pembuatan halaman.

### 10.1 Pemetaan Kata Kunci & Maksud Pencarian (Keyword Intent Mapping)

Kita membagi target kata kunci ke dalam 4 kategori dan memetakannya ke halaman spesifik agar tidak terjadi kanibalisasi halaman:

| Kategori Intent | Contoh Kata Kunci Target | Halaman Tujuan (Target URL) | 
| ----- | ----- | ----- | 
| **Transaksional / Layanan Utama (High-Intent)** | jasa pembuatan aquarium custom, kontraktor aquarium mewah, bikin aquarium besar rumah, pembuatan aquarium dinding | `/aquarium-custom` | 
| **Transaksional Koleksi Ikan** | jual arwana super red bersertifikat, kolektor arwana super red indonesia, harga arwana super red kualitas kontes | `/arwana` | 
| **Lokal Zona 1: Bandung (Prioritas 1)** | aquarium custom bandung, jasa pembuatan aquarium bandung, jual arwana super red bandung, jasa kuras dan perawatan aquarium bandung | `/area-layanan/bandung` & `/perawatan-aquarium` | 
| **Lokal Zona 2: Jabodetabek & Jawa Barat** | pembuatan aquarium custom jakarta, spesialis aquarium rumah mewah jabodetabek, jasa pembuatan aquarium besar jawa barat | `/area-layanan/jakarta-jabodetabek` & `/area-layanan/jawa-barat` | 
| **Komersial & B2B (Arsitek/Interior)** | spesifikasi kaca aquarium besar, sistem filtrasi sump tank tersembunyi, kolaborasi desain aquarium interior | `/aquarium-custom/material-teknologi` | 
| **Informasional (Edukasi & Otoritas)** | ciri arwana super red kualitas tinggi, berapa biaya membuat aquarium dinding, ketebalan kaca untuk aquarium 2 meter | `/jurnal/[slug]` & `/panduan-arwana-super-red` | 

### 10.2 Dominasi SEO Lokal (Zona 1 Bandung & Zona 2 Jabodetabek/Jawa Barat)

1. **Optimasi Google Business Profile (GBP) Bandung:**

   * Buat profil bisnis terverifikasi di Bandung dengan kategori utama *Aquarium Shop* dan kategori tambahan *Interior Designer* / *Pet Store*.

   * Karena sistem Anda berbasis janji temu (tanpa *showroom* ritel bebas), atur GBP sebagai *Service Area Business* (melayani Bandung Raya, Jabodetabek, dan Jawa Barat) atau tampilkan lokasi studio dengan catatan jelas "Kunjungan dengan Janji Temu".

   * Unggah foto proyek resolusi tinggi secara rutin dan kumpulkan ulasan asli dari klien pertama yang menyebutkan kata kunci (misalnya: *"Pembuatan aquarium custom untuk ruang tamu saya di Bandung sangat rapi..."*).

2. **Halaman Area Layanan Terdedikasi (*Local Landing Pages*):**

   * Jangan membuat halaman duplikat yang hanya mengganti nama kota.

   * Halaman `/area-layanan/bandung` (Zona 1) membahas konteks lokal: gaya arsitektur rumah di Bandung Utara/Dago/Setiabudi/Kota Baru Parahyangan, suhu udara Bandung yang dingin dan pengaruhnya pada pemanas (*heater*) air arwana, serta kecepatan respons tim inti ASEVA di Bandung.

   * Halaman `/area-layanan/jakarta-jabodetabek` dan `/area-layanan/jawa-barat` (Zona 2) membahas prosedur pengiriman aman beroksigen via tol Cipularang, survei lokasi terjadwal, dan standar instalasi untuk rumah/kantor di Jakarta Selatan, PIK, BSD, Pondok Indah, Bogor, hingga Cirebon.

### 10.3 Strategi *Topical Authority* & Klaster Konten

Google memberi peringkat tinggi pada situs yang dianggap sebagai **pakar menyeluruh** di bidangnya. Kita membangun dua klaster konten (*Topic Clusters*):

* **Klaster 1: Kemewahan & Teknik Aquarium Custom**

  * *Halaman Pilar:* `/aquarium-custom`

  * *Artikel Pendukung (Jurnal) yang saling menaut (Internal Link) ke Halaman Pilar:*

    1. *Kaca Tempered vs Laminated vs Low-Iron (Crystal Clear): Mana yang Tepat untuk Aquarium Besar?*

    2. *Panduan Arsitek: Merancang Struktur Beban Lantai dan Jalur Pipa untuk Aquarium Built-In.*

    3. *Mengapa Aquarium Mewah Tidak Pernah Terlihat Kabel dan Pipanya? Mengenal Sistem Life-Support Tersembunyi.*

    4. *Estimasi Biaya Pembuatan Aquarium Custom Kelas Atas di Tahun 2026.*

* **Klaster 2: Kurasi & Pemeliharaan Arwana Super Red**

  * *Halaman Pilar:* `/panduan-arwana-super-red` & `/arwana`

  * *Artikel Pendukung (Jurnal):*

    1. *Anatomi Arwana Super Red Kelas Kolektor: Genetik, Anatomi Sendok, dan Perkembangan Ring Warna.*

    2. *Memahami Dokumen Legalitas Arwana: Sertifikat Captive-Bred, CITES, dan Pembacaan Microchip.*

    3. *Seni Tanning dan Pencahayaan: Memunculkan Warna Merah Darah Tanpa Membuat Ikan Stres.*

    4. *Parameter Air Ideal untuk Arwana Super Red di Dataran Tinggi seperti Bandung.*

### 10.4 SEO On-Page & Struktur Semantik

* **Hirarki Heading Ketat:** Setiap halaman wajib memiliki tepat satu `<h1>` yang mengandung kata kunci utama sekaligus terdengar elegan (contoh di halaman layanan: `<h1>Desain & Pembuatan Aquarium Custom Kelas Atas</h1>`), diikuti oleh `<h2>` dan `<h3>` yang terstruktur rapi.

* **Optimasi Gambar (Image SEO):**

  * Penamaan file sebelum diunggah harus deskriptif, contoh: `arwana-super-red-kapuas-hulu-45cm-aseva.jpg`, bukan `IMG_8821.jpg`.

  * Setiap gambar wajib memiliki atribut `alt` yang menjelaskan isi foto secara alami.

  * Kompresi otomatis ke format modern (AVIF/WebP) menggunakan pipeline gambar Next.js dan Sanity CDN.

* **Katalog Ikan Terjual Tetap Hidup (Permanent URLs):**

  * Ketika ikan berkode `ASV-0012` terjual, **jangan hapus halamannya** (menghindari *404 Not Found* dan hilangnya nilai SEO). Ubah statusnya menjadi "Terjual (Arsip Koleksi)" dan tampilkan rekomendasi 3 ikan lain yang masih tersedia di bawahnya.

### 10.5 SEO Teknis Khusus Next.js di Netlify

1. **Pre-rendering Statis Penuh (SSG & ISR):** Seluruh halaman utama, detail ikan, portofolio, dan artikel jurnal di-generate menjadi HTML statis saat proses *build* atau melalui *Incremental Static Regeneration* (ISR) di Netlify. Saat Googlebot mengunjungi situs, HTML langsung tersedia dalam hitungan milidetik tanpa menunggu proses database.

2. **Metadata Dinamis & Open Graph (WhatsApp Preview):**

   * Karena calon klien sering membagikan tautan ikan atau portofolio lewat WhatsApp ke pasangan atau desainer interior mereka, setiap halaman wajib menghasilkan *Open Graph Image* (`og:image` ukuran 1200x630 px), judul, dan deskripsi yang rapi saat tautan ditempel di chat WhatsApp.

3. **Sitemap XML & Robots.txt Otomatis:**

   * Menggunakan fitur bawaan App Router Next.js (`app/sitemap.ts` dan `app/robots.ts`), peta situs diperbarui otomatis setiap kali ada ikan, proyek, atau artikel baru yang diterbitkan di CMS.

4. **Canonical URL & Pengalihan (Redirects):**

   * Konfigurasi di `netlify.toml` memastikan pemaksaan satu versi domain (misal: selalu `https://asevaaquatics.com` tanpa `www` dan tanpa *trailing slash* ganda) agar kekuatan SEO tidak terpecah.

### 10.6 Implementasi Data Terstruktur (Schema.org JSON-LD)

Website menyuntikkan skrip JSON-LD tersembunyi di setiap halaman agar Google memahami konteks bisnis dan memunculkan *Rich Snippets* di hasil pencarian:

* **`LocalBusiness` / `HomeAndConstructionBusiness`**: Dipasang di Beranda dan halaman Area Layanan (memuat nama ASEVA AQUATICS, koordinat area Bandung, cakupan layanan Zona 1 Bandung Raya serta Zona 2 Jabodetabek & Jawa Barat, jam operasional janji temu, rentang harga `$$$$`).

* **`Service`**: Dipasang di halaman `/aquarium-custom` dan `/perawatan-aquarium` untuk menjelaskan jenis layanan desain, konstruksi, dan maintenance.

* **`Product`**: Dipasang di setiap halaman `/arwana/[slug]`, memuat nama ikan, SKU (kode ikan), nomor identifikasi microchip, status ketersediaan (`InStock` atau `SoldOut`), dan merek/penangkar.

* **`FAQPage`**: Dipasang pada bagian tanya-jawab di halaman Layanan dan Area Layanan agar pertanyaan & jawaban bisa tampil langsung di halaman hasil pencarian Google.

* **`Article` & `BreadcrumbList`**: Dipasang di seluruh halaman Jurnal dan navigasi dalam situs.

## 11. Kepatuhan dan Legal (Penting untuk Arwana)

Arwana (*Scleropages formosus*) termasuk satwa yang dilindungi dan diatur perdagangannya (terdaftar di CITES Appendix I, dan di Indonesia termasuk satwa dilindungi). Perdagangan yang sah hanya untuk **hasil penangkaran (captive-bred) dari penangkar berizin**, dan pengangkutan antarwilayah memerlukan **dokumen resmi** (misalnya surat angkut dari BKSDA). **Mohon verifikasi persyaratan terkini langsung dengan BKSDA setempat dan penangkar mitra Anda.**

Implikasi untuk website dan SEO:

* Setiap ikan memuat **asal-usul dan dokumen** (sertifikat penangkaran, microchip) sebagai nilai jual sekaligus bukti kredibilitas di mata Google (prinsip *E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness*).

* Halaman khusus penjelasan "Standar Legalitas & Keaslian ASEVA".

* Kebijakan garansi hidup (*DOA - Dead on Arrival*) ditulis transparan.

## 12. System Design (Arsitektur Netlify Tanpa Database)

### 12.1 Pilihan Teknologi

Arsitektur ini dipangkas agar **sangat ringan, bebas perawatan database, murah, dan memiliki performa SEO maksimal** di atas infrastruktur Netlify.

| Lapisan | Pilihan | Alasan | 
| ----- | ----- | ----- | 
| Hosting & Edge Network | **Netlify** (dengan `@netlify/plugin-nextjs`) | CDN global super cepat, fitur Netlify Forms bawaan, deploy otomatis dari GitHub, konfigurasi mudah lewat `netlify.toml` | 
| Framework | **Next.js (App Router)** + TypeScript | Menghasilkan halaman statis (SSG/ISR) yang sangat disukai mesin pencari Google, manajemen metadata & JSON-LD terbaik | 
| Styling | **Tailwind CSS** + design token kustom | Ukuran file CSS sangat kecil, tidak membebani waktu muat halaman | 
| Animasi | **Framer Motion** (LazyMotion) | Gerak halus berkelas yang dimuat secara *lazy* agar tidak menghambat skor Lighthouse | 
| Komponen | Radix UI (primitif aksesibel) | Struktur HTML semantik dan aksesibel (bagus untuk SEO) | 
| CMS (Manajemen Konten) | **Sanity.io** (Paket Gratis) | Tempat Anda mengunggah foto ikan, portofolio, dan menulis artikel SEO dari browser tanpa perlu database sendiri | 
| Penanganan Form (Tanpa DB) | **Netlify Forms** + **Google Sheets Webhook** | Menangkap seluruh data form konsultasi tanpa perlu menyewa dan merawat server database PostgreSQL | 
| Notifikasi Email | **Resend** (atau Email Notifikasi Netlify) | Mengirim rincian lead langsung ke kotak masuk email pemilik detik itu juga | 
| Anti Spam | **Netlify Honeypot** + **Cloudflare Turnstile** | Mencegah bot spam mengisi form konsultasi secara gratis dan tanpa captcha yang mengganggu | 
| Analitik & SEO | **Google Search Console** + **GA4** + **Meta Pixel** | Memantau kata kunci pencarian yang masuk, posisi peringkat Google, dan konversi klik WhatsApp | 

### 12.2 Arsitektur Tingkat Tinggi (Database-less)

```
Pengunjung & Googlebot (Mobile / Desktop)
        |
   Cloudflare DNS
        |
   Netlify Global Edge CDN (Cache Halaman Statis & Gambar)
        |
  +-----+-----------------------------------------+
  | Next.js App di Netlify                        |
  |  - Halaman Statis / ISR (SSG untuk SEO Cepat) |
  |  - Sitemap.xml & Schema JSON-LD Otomatis      |
  |  - Form Konsultasi (Netlify Forms Handler)    |
  +-----+-------------------------+---------------+
        |                         |
   Sanity Content Lake       Netlify Forms Engine
   (Katalog Ikan, Proyek,         |
    & Artikel Jurnal)             +--> 1. Simpan di Dashboard Netlify Forms
                                  +--> 2. Kirim Email Instan ke Pemilik (Resend)
                                  +--> 3. Catat Baris Baru di Google Sheets
                                  +--> 4. Redirect Klien ke Chat WhatsApp

```

### 12.3 Strategi Rendering di Netlify

| Halaman | Strategi | Alasan SEO & Performa | 
| ----- | ----- | ----- | 
| Beranda, Tentang, Layanan, Area Layanan | **SSG (Static Site Generation)** | File HTML siap saji di CDN Netlify; waktu respons (*TTFB*) di bawah 100 ms | 
| Daftar dan detail arwana | **ISR (On-Demand Revalidation via Netlify Webhook)** | Halaman statis cepat, namun otomatis diperbarui di Netlify saat Anda menambah ikan atau mengubah status menjadi "Terjual" di CMS | 
| Portofolio & Jurnal | **ISR / SSG** | Konten artikel langsung terindeks dengan cepat oleh Googlebot | 
| Konsultasi (Form) | **Static Form + Netlify Forms Endpoint** | Form dimuat instan dan pengiriman diproses langsung oleh infrastruktur tepi (*edge*) Netlify | 

### 12.4 Model Konten (Tanpa Database Transaksional)

Seluruh konten website disimpan di **Sanity CMS** (Anda mendapatkan dasbor admin rapi tanpa perlu mengatur database):

* `fish` — kode unik, nama, slug, ukuran (cm), usia, grade warna, bentuk, galeri foto (beserta `alt text` SEO), video, nomor microchip, dokumen sertifikat, status (`available`, `reserved`, `sold`), catatan kurator, meta title & meta description kustom.

* `project` — judul, slug, kategori (residensial/komersial), kota lokasi (Bandung, Jakarta, dll. untuk sinyal SEO lokal), tahun, dimensi, cerita studi kasus, galeri foto, spesifikasi teknis, tampil di beranda (boolean).

* `locationPage` — nama kota/area (Bandung, Jabodetabek, Jawa Barat), judul SEO lokal, pengantar khusus wilayah tersebut, daftar proyek di area tersebut, FAQ khusus wilayah tersebut.

* `article` — judul, slug, isi artikel (Portable Text dengan dukungan tabel & CTA sisipan), penulis, kategori klaster SEO, kata kunci fokus, meta title & description.

* `testimonial` — nama/inisial klien, kota, peran, kutipan, proyek terkait.

* `siteSettings` — nomor WhatsApp utama, jam operasional janji temu, tautan media sosial, template pesan WhatsApp per halaman.

**Penyimpanan Data Lead (Pengganti Database):**
Setiap kali calon klien mengisi form konsultasi, data tersimpan secara otomatis di dua tempat yang mudah Anda buka dari ponsel maupun laptop:

1. **Tab "Forms" di Dasbor Netlify** (bisa diunduh sebagai CSV kapan saja).

2. **File Google Sheets Pribadi Anda** (kolom otomatis terisi: *Tanggal, Nama, No. WhatsApp, Kota, Minat, Rentang Budget, Pesan, Halaman Asal*).

### 12.5 Alur Lead Konsultasi

1. Pengunjung mengisi form di halaman `/konsultasi` atau mengetuk tombol WhatsApp.

2. Netlify memeriksa *honeypot field* dan token Cloudflare Turnstile untuk memblokir bot spam.

3. Netlify menyimpan data form, memicu pengiriman email notifikasi ke Anda, dan menambahkan baris baru ke Google Sheets Anda.

4. Halaman menampilkan pesan konfirmasi elegan dan menawarkan tombol **"Buka WhatsApp Sekarang"** yang sudah terisi teks otomatis:

   > *"Halo ASEVA AQUATICS, saya \[Nama\] dari \[Kota\]. Saya baru saja mengisi form konsultasi mengenai \[Minat\] dengan estimasi budget \[Budget\]. Mohon informasi jadwal diskusi lebih lanjut."*

5. Event konversi `generate_lead` dikirim ke Google Analytics 4 (GA4) dan Meta Pixel.

### 12.6 Rute dan Endpoint

| Rute | Fungsi & Fokus SEO | 
| ----- | ----- | 
| `/` | Beranda (Brand Positioning & Keyword Utama) | 
| `/arwana`, `/arwana/[slug]` | Katalog dan detail ikan (Product Schema) | 
| `/panduan-arwana-super-red` | Halaman Pilar Edukasi Arwana | 
| `/aquarium-custom` | Halaman Pilar Layanan Pembuatan Aquarium | 
| `/aquarium-custom/proses`, `/aquarium-custom/material-teknologi` | Pendalaman Layanan & Spesifikasi Arsitektural | 
| `/perawatan-aquarium` | Layanan Maintenance | 
| `/portofolio`, `/portofolio/[slug]` | Studi Kasus Proyek | 
| `/area-layanan/[kota]` | Halaman Pendaratan SEO Lokal (Bandung, Jabodetabek, Jawa Barat) | 
| `/jurnal`, `/jurnal/[slug]` | Artikel Edukasi & Klaster Konten SEO | 
| `/tentang`, `/konsultasi` | Profil, Legalitas, dan Form Konsultasi | 
| `/sitemap.xml`, `/robots.txt` | Peta situs dan instruksi perayapan Googlebot | 
| `/api/revalidate` | Webhook dari Sanity ke Netlify untuk memperbarui cache halaman | 

### 12.7 Struktur Proyek & Konfigurasi Netlify

```
/app
  (marketing)/page.tsx, arwana/, aquarium-custom/, area-layanan/, jurnal/, ...
  sitemap.ts
  robots.ts
  api/revalidate/route.ts
/components   ui/, sections/, seo/ (JsonLd.tsx, Breadcrumbs.tsx)
/lib          sanity/, seo-config.ts, whatsapp.ts, analytics.ts
/sanity       schemas/ (fish, project, article, locationPage)
/public       fonts/, images/, __forms.html (definisi statis untuk Netlify Forms)
netlify.toml  (Konfigurasi build, header keamanan, caching, dan redirects)

```

Catatan penting untuk **Next.js App Router di Netlify**: file statis `/public/__forms.html` disertakan agar sistem pendeteksi Netlify Forms dapat mengenali seluruh kolom formulir pada saat proses *build*.

### 12.8 Keamanan & Performa di Netlify

* **Konfigurasi `netlify.toml`:** Mengatur header keamanan (`Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) dan aturan *cache* aset statis selama 1 tahun.

* **Gambar & Video:** Gambar dioptimalkan menggunakan Sanity CDN + Next.js Image Optimization di Netlify. Video hero dikompresi ketat (< 3 MB, tanpa trek audio) dan hanya dimuat setelah gambar poster utama tampil sempurna.

* **Font Lokal:** Menggunakan `next/font` agar file font di-host langsung di server Netlify (menghindari permintaan tambahan ke server luar dan menjaga CLS tetap `0`).

### 12.9 Lingkungan, Deployment, dan Biaya Operasional

* **Deployment:** Setiap kali kode diperbarui di GitHub, Netlify otomatis menjalankan proses *build* dan menayangkan *Deploy Preview* (tautan uji coba) sebelum masuk ke domain utama.

* **Biaya Bulanan Sangat Hemat:**

  * **Netlify:** Paket *Starter (Gratis)* sudah mencakup hosting CDN global, HTTPS otomatis, dan 100 submit Netlify Forms per bulan (cukup untuk target awal 40–80 lead berkualitas). Jika trafik meningkat pesat, bisa naik ke paket *Personal/Pro*.

  * **Sanity CMS:** Paket *Free Forever* sangat mencukupi (hingga 10.000 dokumen dan ratusan ribu permintaan API CDN).

  * **Database:** **Rp 0** (tidak menggunakan database).

  * **Domain (.com / .id):** Biaya langganan tahunan standar.

## 13. Logistik dan Cakupan Wilayah

* **Zona 1 (Prioritas Utama):** Bandung Raya — survei lokasi, pengiriman, instalasi, dan perawatan langsung oleh tim inti ASEVA.

* **Zona 2:** Jabodetabek dan kota besar Jawa Barat.

* Di form konsultasi, pilihan kota di luar Zona 1 dan Zona 2 tetap diterima dengan pemberitahuan sopan bahwa jangkauan layanan dan instalasi saat ini difokuskan untuk wilayah Bandung Raya, Jabodetabek, dan Jawa Barat.

## 14. Roadmap Pengerjaan (Lebih Cepat Tanpa Database)

Karena kita menghilangkan pembuatan database dan sistem manajemen lead internal yang rumit, waktu pengembangan teknis menjadi lebih singkat dan bisa dialokasikan untuk menyempurnakan tampilan visual serta konten SEO.

| Fase | Durasi (Perkiraan) | Isi Pekerjaan | 
| ----- | ----- | ----- | 
| **0. Discovery & Riset SEO** | 1 minggu | Finalisasi brand, struktur kata kunci lokal Bandung & Jabodetabek, rentang budget, daftar ikan dan proyek | 
| **1. Desain UI/UX** | 2 minggu | Moodboard, desain Beranda, Katalog Ikan, Layanan, dan template halaman SEO Lokal | 
| **2. Produksi Konten & Foto** | Paralel, 3 minggu | Sesi foto/video arwana & proyek, penulisan copy halaman utama, 3 halaman area layanan (Zona 1 & 2), dan 5 artikel jurnal perdana | 
| **3. Pengembangan Web & Netlify** | 3 minggu | Setup Next.js + Sanity, pembuatan seluruh halaman, integrasi Netlify Forms + WhatsApp, pemasangan Schema JSON-LD | 
| **4. Audit SEO & Peluncuran** | 1 minggu | Uji Lighthouse (target SEO 100), pendaftaran Google Search Console & Google Business Profile Bandung, tayangkan di Netlify | 

Total waktu sekitar **7 sampai 9 minggu** (lebih hemat 3–5 minggu dibanding arsitektur dengan database).

## 15. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi | 
| ----- | ----- | ----- | 
| Aset foto dan video kurang berkelas | Kesan mewah gagal terbentuk | Anggarkan sesi foto pencahayaan gelap profesional sebelum peluncuran | 
| Kuota gratis Netlify Forms (100 submit/bulan) penuh oleh spam | Lead asli tidak masuk | Pasang proteksi ganda: *Netlify Honeypot* + *Cloudflare Turnstile* + tombol cadangan langsung ke WhatsApp | 
| Peringkat SEO butuh waktu untuk naik di Google | Lead organik lambat di bulan ke-1 | Optimalkan **Google Business Profile Bandung** sejak hari pertama dan terbitkan 5–6 artikel pilar sekaligus saat peluncuran | 
| Stok ikan di website lupa diperbarui | Klien kecewa saat bertanya | Kemudahan akses dasbor Sanity lewat ponsel agar pemilik bisa mengubah status ikan dalam 1 menit | 

## 16. Keputusan Pemilik dan Dampaknya

| Topik | Keputusan | Dampak pada Sistem | 
| ----- | ----- | ----- | 
| Database | **Belum dibutuhkan saat ini** | Arsitektur dipangkas menjadi *Database-less*; lead ditangani oleh Netlify Forms, Email, Google Sheets, dan WhatsApp | 
| Hosting | **Netlify** | Seluruh pipeline build, CDN, form handling, dan konfigurasi cache disesuaikan khusus untuk ekosistem Netlify | 
| Fokus Utama | **Kualitas Web & SEO** | Penambahan struktur *Topic Clusters*, halaman Area Layanan, Schema.org lengkap, dan target skor SEO Lighthouse 100 | 
| Cakupan Wilayah | **Hanya sampai Zona 2** | Layanan, opsi form, dan target SEO difokuskan pada Zona 1 (Bandung Raya) dan Zona 2 (Jabodetabek & kota besar Jawa Barat) | 
| Harga | Disembunyikan ("Hubungi kami") | Mode harga tersembunyi menjadi standar di seluruh halaman ikan dan layanan | 
| Lokasi | Janji temu, tanpa showroom bebas | Halaman Konsultasi dan Google Business Profile diatur dengan konsep *Private Consultation by Appointment* | 
| Pengelola | Pemilik sendiri | Alur kerja dibuat sesederhana mungkin: notifikasi langsung ke WhatsApp/Email dan rekap otomatis di Google Sheets | 

**Usulan sementara rentang budget pada form konsultasi:**

* Rp 15 juta sampai Rp 50 juta

* Rp 50 juta sampai Rp 150 juta

* Rp 150 juta sampai Rp 500 juta

* Di atas Rp 500 juta

* Belum yakin, ingin berdiskusi terlebih dahulu

## 17. Identitas Brand dan Logo

Arah identitas: **tenang, gelap, dan berkelas**, seperti kedalaman air di malam hari dengan kilau emas.

| Elemen | Spesifikasi | 
| ----- | ----- | 
| Hitam laut (latar utama) | `#0A0F14` | 
| Permukaan sekunder | `#12181F` | 
| Emas champagne (aksen) | `#C9A96E` (versi di latar terang `#9C7F45`) | 
| Putih gading (teks) | `#F2EDE4` | 
| Merah arwana (aksen sangat terbatas) | `#A8322D` | 
| Font judul | Cormorant Garamond atau Playfair Display | 
| Font isi | Manrope atau Inter | 

**Usulan tagline** (pilih satu): *"Karya Hidup dalam Air"*, *"Seni yang Berenang"*, atau *"Aquarium sebagai Karya Ruang"*.

## 18. Langkah Selanjutnya

Dengan arsitektur tanpa database di atas Netlify ini, langkah paling bernilai berikutnya adalah:

1. **Memilih nama domain** (disarankan pendek, mudah dieja, `.com` atau `.id`) dan mendaftarkan **Google Business Profile** untuk wilayah Bandung.

2. **Menyiapkan materi foto/video awal** (minimal 6–8 ekor arwana dan 3 proyek unggulan).

3. **Mulai membangun prototipe kode halaman Beranda dan Katalog di Netlify** agar Anda bisa langsung merasakan tampilan, kecepatan, dan alur konversi WhatsApp-nya di ponsel Anda.