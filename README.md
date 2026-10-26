# Cekpremi Affiliate — prototipe landing page

HTML/CSS responsif dengan JavaScript ringan untuk menu seluler, etalase game, FAQ, dan dialog informasi. Alternatif A menempatkan game tepat setelah hero, disusul alur aktivitas affiliate dan reward. Semua artwork, ilustrasi, ikon, dan style tersimpan lokal; tidak ada ketergantungan CDN saat membuka halaman, font eksternal, framework, atau build step.

## Membuka

Buka `index.html` langsung di browser, atau jalankan server dari direktori ini:

```powershell
python -m http.server 8766 --bind 127.0.0.1
```

Kemudian buka http://127.0.0.1:8766/.

## File

- `index.html`: struktur halaman dan copy berbahasa Indonesia.
- `styles.css`: warna, layout, tampilan mobile/tablet/desktop, fokus keyboard, dan print styles.
- `campaign.css`: lapisan visual terbaru—warna brand oranye/navy, tipografi Montserrat, komposisi hero, ruang game, ilustrasi aktivitas, penawaran, dan CTA mobile. Mulai dari file ini untuk polishing visual berikutnya.
- `script.js`: interaksi lokal, dialog native, tabs game/reward yang dapat digunakan lewat keyboard, dan preview animasi yang dimulai/dihentikan oleh pengguna.
- `assets/affiliate-illustration.svg`: ilustrasi vektor dari versi pertama, disimpan sebagai referensi; sudah tidak dipakai pada hero terbaru.
- `assets/brand/`: logo dan foto kampanye yang diambil dari halaman publik Cekpremi.
- `assets/games/`: artwork tujuh game dan preview tiga game dari halaman publik Cekpremi. Preview tidak diputar otomatis.
- `assets/fonts/`: Montserrat variable lokal, sumber unduhan, dan lisensi SIL Open Font License.
- `assets/favicon.svg`: ikon prototipe.

## Keputusan desain

1. Hero menyampaikan identitas program dan mengarahkan pengguna ke etalase game. Tiga game unggulan memiliki artwork asli, informasi voucher, detail, dan akses ke katalog demo resmi.
2. Reward Points, voucher game, dan penghasilan dijelaskan sebagai hal berbeda.
3. Tidak menggunakan angka penghasilan maksimum, testimoni, counter uang, atau badge regulator buatan.
4. Section “Mulai aktivitasmu. Pantau reward-mu.” menjelaskan hubungan aktivitas affiliate → reward sesuai syarat → penggunaan voucher, poin, atau penghasilan. Ini menggantikan fungsi section “Makin Cepat Mulai, Makin Cepat Untung” tanpa janji penghasilan otomatis.
5. Informasi penyelenggara, privasi, serta bantuan ditempatkan sebagai bagian pengalaman.
6. CTA pendaftaran membuka penjelasan lokal sebelum pengguna memilih tautan resmi Cekpremi. Tidak ada formulir yang mengumpulkan atau mengirim data.

## Penyempurnaan scope acquisition

Scope terbaru adalah landing page visit → keputusan register, dengan dua ide: (1) memperjelas proposisi program serta akses game, dan (2) memperjelas manfaat serta dasar kepercayaan. Tahap dashboard, formulir, ekonomi game, serta transaksi tidak didesain ulang.

- Hero memprioritaskan CTA Daftar affiliate, dengan Jelajahi game sebagai pilihan eksplorasi. Etalase game tetap tepat setelah hero.
- Ringkasan program statis menjelaskan identitas, fungsi reward, serta perbedaan demo dan member.
- Kartu Bonus sambutan dan Bonus mingguan menggantikan ketergantungan pada rotasi banner untuk menemukan informasi penawaran.
- Dua panel detail menyebut klaim sumber sebagai konteks dan menunjukkan ketentuan yang perlu diperiksa. Dasar persentase, batas, periode, formula, dan kelayakan tidak diisi dengan angka/asumsi buatan.
- Informasi penyelenggara, privasi, bantuan, dan alur program menjadi bahan yang dapat ditinjau; tidak ada ticker, statistik penghasilan, atau testimoni pengganti yang dikarang.

Pemetaan konten, sumber data 18,3% yang dilaporkan, batas kesimpulan, dan skrip pemeriksaan pemahaman tersedia pada `../fuse-challenge-sesi-04-scope-acquisition.md`. Data tersebut menjadi alasan memilih tahap, bukan bukti penyebab tidak register. Rincian promo perlu dikonfirmasi ke pemilik produk sebelum penggunaan produksi.

## Sumber dan batas penggunaan

Prototipe ini merupakan studi desain, bukan halaman resmi. Hero terbaru menggunakan logo dan foto kampanye asli dari halaman publik Cekpremi; komposisi halaman dan ilustrasi aktivitas dibuat untuk proposal. Wordmark footer tetap berupa representasi teks. Logo, foto, artwork, serta preview game dipakai sebagai referensi studi desain, bukan klaim kepemilikan aset atau endorsement atas proposal.

Copy disusun dari review halaman publik pada percakapan challenge:

- https://www.cekpremi.com/affiliate/home?x=pjdklzX
- https://www.cekpremi.com/affiliate/dashboard/dm/missions/pjdklzX/Public-Page?x=pjdklzX&project=Public-Page
- https://www.cekpremi.com/affiliate/dashboard/dm/games/pjdklzX/Public-Page?x=pjdklzX&project=Public-Page

Ketentuan reward, status, dan nominal minimum penarikan tidak dikarang. Periksa kembali semua copy, peran entitas, serta ketentuan program dengan pemilik produk sebelum penggunaan produksi. Informasi perizinan tidak ditampilkan sebagai badge pengesahan game.

Pengaruh desain terhadap pemahaman, kepercayaan, dan pendaftaran masih hipotesis; belum diuji melalui pengguna atau eksperimen.

## Aset game dan interaksi alternatif A

Sumber aset yang diamati dari elemen gambar halaman asli:

- `mahjong-cover.webp`: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/MahjongFestivalActiveV6.webp
- `garden-cover.webp`: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/GardenOlympusGames.webp
- `immortal-cover.webp`: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/ImmortalAutoGames.webp
- `mahjong-preview.webp`: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/MahjongFestVidNew.webp
- `garden-preview.webp`: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/GardenofOlympusVidnew.webp
- `immortal-preview.webp`: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/ImmortalAutoVidnew.webp

Memilih tab mengganti game unggulan. Tombol Putar/Hentikan preview hanya menampilkan/menghentikan WebP animasi asli; tidak menjalankan game atau menggunakan voucher. Animasi juga berhenti saat area preview keluar layar atau tab tidak aktif. Tombol Coba demo/Lihat detail membuka informasi game sebelum pengguna memilih tautan katalog demo resmi; tautan menuju katalog, bukan deep link game yang belum diverifikasi.

Angka minimum 1 voucher mengikuti katalog demo publik yang ditinjau, disertai pengingat untuk memeriksa ketentuan terbaru. Prototipe tidak mengubah mekanik, reward, atau ekonomi game.

## Verifikasi implementasi

- Server preview lokal mengembalikan HTTP 200.
- JavaScript lolos pemeriksaan sintaks; referensi aset, anchor internal, ID unik, dan SVG diperiksa.
- Layout diperiksa pada lebar viewport 320, 390, 768, 1024, dan 1280 piksel; tidak ditemukan overflow horizontal.
- Menu mobile dibuka, lalu ditutup otomatis ketika tautan section dipilih.
- Panel reward dan tab diuji, termasuk perpindahan tab dengan tombol panah dan penutupan dengan Escape.
- FAQ, dialog pendaftaran, dan kedua panel bonus diuji. Panel bonus dapat ditutup dengan Escape dan muat pada viewport mobile. Tujuan tautan pendaftaran serta sumber penawaran diperiksa tanpa melakukan registrasi.
- Console browser tidak melaporkan error pada rangkaian interaksi tersebut.
- Kontras teks putih pada tombol oranye terbaru adalah 4,70:1. Ini bukan audit aksesibilitas menyeluruh.
- Screenshot terbaru tersedia di `preview/hero.png`, `preview/desktop.png`, `preview/mobile.png`, `preview/games.png`, `preview/offers.png`, `preview/mobile-hero.png`, dan `preview/mobile-games.png`. FAQ pertama terbuka sesuai kondisi awal halaman. Screenshot final diambil dengan preferensi reduced motion agar tidak menangkap transisi gulir.

Preview ini dapat dibuka langsung dari `index.html` setelah server pengujian dihentikan. Seluruh interaksi produk tetap lokal, kecuali tautan yang secara eksplisit membuka situs Cekpremi.

## Pemolesan visual — 26 Oktober 2026

Fokus kembali pada acquisition sesuai arahan pengguna. Versi ini memperkaya presentasi visual dari struktur sebelumnya:

- Hero kampanye dengan foto resmi, komposisi dua artwork game, dan visual voucher. Ilustrasi vektor generik diganti.
- Montserrat lokal mengikuti keluarga font halaman asli; oranye, navy, dan warna hangat memperkuat identitas Cekpremi.
- Ruang game memakai kontras navy, tiga tab unggulan, preview yang dikendalikan pengguna, dan empat pilihan game tambahan. Pilihan tambahan menuju katalog demo, bukan deep link game.
- Alur affiliate diberi ilustrasi link, voucher, dan katalog game yang relevan, bukan dekorasi identik pada setiap kartu.
- Bonus sambutan hingga 100% dan jadwal mingguan Senin mengikuti klaim banner sumber. Keduanya memiliki penanda syarat dan panel detail. Dasar perhitungan, bentuk, batas, dan kelayakan masih perlu dikonfirmasi ke pemilik produk; tidak ada ketentuan baru yang dikarang.
- CTA pendaftaran mobile menetap saat menggulir, tanpa menutupi isi dialog. Ukuran teks utama mobile diperbesar agar tetap terbaca.

Sumber aset tambahan yang diamati pada halaman asli:

- Logo: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/LogoCekpremiV635.webp
- Foto kampanye: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/people_091026.webp
- Gol Jebol: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/GolJebolGames.webp
- Gas Rem: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/GasRemGames.webp
- Stacking King: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/StackingKingGames.webp
- Push Push Meong: https://b2c-id.oss-ap-southeast-5.aliyuncs.com/cekpremi-website/assets/affiliate/PushPushMeongGames.webp
- Font: https://fonts.google.com/specimen/Montserrat ; lisensi tersedia pada `assets/fonts/OFL.txt`.

Pemeriksaan versi ini: viewport 320, 390, 768, 1024, 1280, dan 1440 piksel tanpa overflow horizontal; aset dimuat; pergantian tab game melalui klik dan keyboard, start/stop preview, detail demo, kedua panel bonus, Escape, menu mobile, dan CTA menetap bekerja. Console tidak melaporkan error dalam rangkaian tersebut. Belum ada uji pemahaman pengguna atau bukti dampak pada rasio register.

Backup versi sebelumnya: `../outputs/cekpremi-before-visual-polish.zip`.

## Micro-interactions dan ilustrasi — 26 Oktober 2026

- `refinements.css` menambahkan gerakan melayang pelan pada dua kartu game dan voucher hero. Gerakan berhenti ketika hero keluar viewport atau tab browser tersembunyi, serta mati pada preferensi reduced motion.
- Tombol dan kartu memiliki respons hover/tekan yang ringan. Pergantian game, pembukaan dialog, dan jawaban FAQ memakai transisi pendek.
- Tautan ekstra di bawah artwork hero dihapus. CTA jelajah game di samping tombol utama tetap tersedia.
- Enam ilustrasi baru melengkapi tiga langkah aktivitas, dua penawaran bonus, dan CTA akhir. Sumber PNG transparan, versi WebP, serta prompt disimpan di `assets/illustrations/`. Gambar ini bersifat ilustratif, bukan screenshot UI atau game sebenarnya.
- Ringkasan alur aktivitas memiliki urutan yang lebih mudah dipindai dan catatan ketentuan yang menyatu. Tombol penawaran memenuhi seluruh lebar isi kartu. Footer memakai aset logo yang sama dengan header.
- Pemeriksaan render terisolasi menggunakan Chrome headless, aset proyek lokal, dan koneksi eksternal yang diblokir. Pada lebar 320, 390, 768, 1024, serta 1440 px tidak ada overflow halaman atau gambar rusak. Teks/font dan ikon eksternal dapat berbeda dari browser dengan koneksi penuh. Tab game, kedua dialog bonus, CTA daftar, dan reduced motion diperiksa. Hasil serta screenshot tersimpan di `../outputs/landing-refinements-review/`.
- Belum ada deployment atau pembaruan desain Figma dalam perubahan HTML ini.
