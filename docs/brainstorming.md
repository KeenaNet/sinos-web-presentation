# SINOS — Brainstorming & PPTX Discovery

| Field | Value |
|-------|--------|
| **Version** | 1.1.0 |
| **Status** | Discovery / creative reference |
| **Source** | PPTX `PSS Ahmad Muhidin,Zian Kaizen MRP SINOS-editable.pptx` (26 slide) |
| **Downstream** | [PRD.md](PRD.md), [design-system.md](design-system.md) |
| **Index** | [docs/README.md](docs/README.md) |

## Executive note

Dokumen ini mencatat audit deck PowerPoint, gap narasi/visual, dan ide kreatif untuk web presentation SINOS. **Kebutuhan produk, user stories, FR, dan data config** ada di [PRD.md](PRD.md). **Token UI dan komponen** ada di [design-system.md](design-system.md). Angka finansial dan KPI resmi: [docs/README.md](docs/README.md#glossary).

---

# 1. Ringkasan Project SINOS

**SINOS** di presentasi ini bukan sekadar ide improvement warehouse, tetapi sudah diposisikan sebagai sistem operasional berbasis automation untuk:

- Monitoring Pending GI.
- Monitoring MRP.
- Notifikasi WhatsApp otomatis.
- Email summary terjadwal.
- Database terpusat via Supabase/PostgreSQL.
- Chatbot SSKA untuk pencarian stok/lokasi sparepart.

**Tujuan utama presentasi:**

Meyakinkan audiens bahwa SINOS dapat mengurangi pekerjaan manual, mempercepat eskalasi stok kritikal, menurunkan risiko stock out, menurunkan downtime, dan mempercepat pencarian sparepart.

**Audiens yang dituju:**

- Management.
- Tim warehouse.
- Tim technic/maintenance.
- Planner/MRP.
- Mentor/promotor Kaizen.
- Stakeholder yang menilai kelayakan improvement dari sisi biaya, benefit, dan sustainability.

---

# 2. Identifikasi Isi Presentasi yang Sudah Ada

Struktur isi deck saat ini cukup lengkap. Poin utamanya:

## Slide 1 — Cover

Pesan sudah jelas: **Menurunkan Risiko Stock Out & Downtime Sparepart dengan SINOS**. Fokus keputusan juga kuat: pencarian part cepat, downtime turun, kontrol stok jelas.

**Catatan:** cover sudah bagus secara narasi, tetapi bisa dibuat lebih kuat dengan visual mockup SINOS atau dashboard kecil agar tidak terlihat hanya sebagai tema improvement.

## Slide 2 — Team & Governance

Menjelaskan peran Ahmad Muhidin, Zian Rhafi, mentor, dan promotor.

**Kuat:** governance jelas.
**Perlu diperbaiki:** tambahkan satu kalimat bahwa project ini lintas fungsi antara warehouse, technic, dan IT/automation.

## Slide 3 — Timeline Project SINOS

Slide timeline sudah ada secara visual, tetapi hasil ekstraksi teks menunjukkan kontennya kemungkinan banyak berupa image/shape, bukan teks murni.

**Risiko:** jika dikembangkan ke web presentation, isi timeline sebaiknya dibuat ulang sebagai data terstruktur agar bisa dianimasikan dan diklik.

## Slide 4 — Current Status

Sangat kuat. Slide ini menjelaskan kondisi saat ini, perbaikan utama, dan target kondisi baru.

Isi penting:

- Rekap manual 90–120 menit/hari.
- Tidak ada notifikasi otomatis.
- Pencarian sparepart manual.
- Target info kurang dari 24 jam.
- Stok real-time.
- Data cepat untuk teknisi.

## Slide 5 — Root Cause Analysis

Menggunakan fishbone: Man, Process, Material, Machine, Measurement, Environment.

**Kuat:** akar masalah cukup lengkap.
**Perlu diperjelas:** terlalu padat untuk audiens. Di web presentation, ini ideal dijadikan **interactive fishbone**: user klik kategori untuk melihat root cause.

## Slide 6 — Roadmap Improvement

Menjelaskan 7 aksi inti:

1. Implementasi SINOS berbasis n8n + Supabase.
2. WhatsApp Gateway untuk alert otomatis.
3. Single database Supabase.
4. Notifikasi pending GI pukul 08.00 WIB.
5. Notifikasi MRP pukul 17.00 WIB.
6. SSKA chatbot untuk pencarian sparepart.
7. Filter AI + normalisasi format WhatsApp.

**Kuat:** roadmap sudah actionable.
**Catatan kritis:** PIC banyak ditulis “IT”. Untuk implementasi nyata, perlu RACI lebih jelas: owner data, owner workflow, owner validasi, owner maintenance.

## Slide 7–11 — CAPEX, OPEX, Benefit, Downtime Saving, Net Saving

Ini bagian bisnis/finansial yang kuat.

Data utama:

- CAPEX awal Rp2,375 juta.
- OPEX Rp300 ribu/bulan atau Rp3,6 juta/tahun.
- Benefit bulanan Rp7,903 juta.
- Downtime saving Rp23,22 juta/tahun.
- Net saving tahunan Rp112,08 juta.

**Kuat:** angka dibuat konkret.
**Catatan kritis:** angka saving harus disiapkan sumber/baseline-nya. Management bisa bertanya: “4 kasus stockout × Rp1 juta itu berasal dari data historis atau estimasi?” Kalau tidak ada bukti, bagian ini rawan dianggap terlalu optimistis.

## Slide 12 — Empat Aktivitas Improvement

Empat aktivitas utama:

1. Notifikasi Pending GI.
2. Notifikasi MRP.
3. SSKA Chatbot.
4. Integrasi Data.

Ini salah satu slide paling penting karena menjembatani masalah dan solusi.

**Rekomendasi:** jadikan slide ini sebagai pusat storytelling interaktif.

## Slide 13 — Evaluasi KPI

KPI sudah sangat bagus:

- Waktu rekap turun 80–90%.
- Pending GI >24 jam turun 55–72%.
- Stockout turun 35–60%.
- Expedite turun 25–40%.
- Waktu cari part turun >90%.

**Kuat:** outcome jelas.
**Catatan kritis:** perlu dibedakan mana hasil aktual, mana target pasca-pilot, mana estimasi. Jangan dicampur, karena bisa dipertanyakan saat review Kaizen.

## Slide 14–16 — Evaluasi Query, Email Summary, WhatsApp Alert

Bagian ini bagus karena menunjukkan before-after.

**Kuat:**

- Ada bukti visual chatbot.
- Ada bukti email summary.
- Ada bukti WhatsApp alert.

**Perlu diperbaiki:**

- Screenshot perlu diperbesar.
- Label before/after bisa dibuat lebih visual.
- Tambahkan satu callout angka di setiap slide, misalnya “response <10 detik”.

## Slide 17 — Standardisasi Operasional

Bagian ini penting untuk sustainability.

Isi:

- SOP.
- Work Instruction.
- Form/Record.
- Sustainability.

**Kuat:** menunjukkan sistem tidak hanya dibuat, tetapi juga distandarkan.
**Perlu diperkuat:** tambahkan ownership maintenance: siapa cek workflow error, siapa update database, siapa backup server.

## Slide 18 — User Feedback

Pesan utama: pengguna merasa pencarian lebih cepat, stok/lokasi lebih jelas, koordinasi lebih terarah.

**Catatan:** feedback masih terasa ringkasan. Lebih kuat jika ditambah 2–3 kutipan singkat atau skor survey.

## Slide 19 — Discussion

Closing sudah tepat. Ada arah diskusi dan next step.

**Rekomendasi:** tambahkan CTA lebih tajam:
“Approve pilot extension ke area warehouse prioritas selama 1 bulan.”

## Slide 20–26 — Technical Appendix

Berisi arsitektur workflow, flowchart SINOS, flowchart chatbot, server architecture, workflow update database, workflow chatbot, workflow report planner.

**Kuat:** membuktikan sistemnya nyata dan bukan konsep kosong.
**Masalah:** secara urutan, bagian teknis muncul setelah discussion. Untuk presentasi management, ini boleh jadi appendix. Untuk presentasi teknis, sebaiknya sebagian dimajukan sebelum evaluasi.

---

# 3. Analisis Struktur Presentasi

Struktur saat ini:

**Cover → Team → Timeline → Current Status → RCA → Roadmap → Cost → Benefit → Evaluation → Standardization → Feedback → Discussion → Technical Appendix**

Secara umum sudah logis, tetapi masih ada dua masalah:

## Masalah 1 — Timeline terlalu awal

Timeline muncul sebelum masalah, RCA, dan solusi dijelaskan. Audiens belum tahu “kenapa timeline ini penting”.

**Saran:** pindahkan timeline setelah roadmap atau setelah aktivitas improvement.

## Masalah 2 — Technical architecture terlalu belakang

Slide arsitektur dan workflow muncul setelah discussion. Ini cocok sebagai appendix, tetapi kurang mendukung narasi bila audiens ingin tahu “SINOS ini bekerja bagaimana?”

**Urutan kanonik (disepakati suite v1.1.0):** lihat [docs/README.md — Canonical narrative order](docs/README.md#canonical-narrative-order). Ringkas:

1. Opening (+ Team/Governance)
2. Current Status → 3. RCA → 4. Solution → 5. Four Improvements → 6. Workflow
7. Chatbot Demo → 8. **Evidence** → 9. **KPI** → 10. **ROI** → 11. Roadmap
12. Standardization → 13. User Feedback → 14. Discussion → 15. Technical Appendix

Perbedaan dari saran awal di atas: **Evidence sebelum KPI dan ROI** (bukti operasional dulu, lalu angka dampak dan bisnis). Detail IA dan traceability MVP: PRD §8 dan §0.2.

---

# 4. Analisis Visual & Desain

Gaya visual deck saat ini:

- Corporate-industrial.
- Dominan putih, navy/dark blue, merah/salmon, abu-abu.
- Ada identitas logo perusahaan di kiri atas.
- Banyak layout berbasis card, table, dan dashboard.
- Slide teknis menggunakan screenshot dark mode dari n8n/server.

**Yang sudah kuat:**

- Konsistensi warna cukup baik.
- Layout business case sudah rapi.
- Angka benefit dibuat menonjol.
- Screenshot workflow memperkuat credibility.

**Yang perlu diperbaiki:**

1. **Beberapa slide terlalu padat**, terutama RCA dan tabel finansial.
2. **Screenshot workflow terlalu kecil**, terutama slide 23–26.
3. **Slide 7 memiliki repetisi teks**: “Komponen inti sudah terdefinisi” muncul dua kali.
4. **Slide teknis dark mode berbeda drastis** dengan slide corporate putih, sehingga transisinya terasa kasar.
5. **Timeline slide 3 perlu diperbesar dan dirapikan** jika digunakan untuk presentasi layar besar.

**Rekomendasi visual:**

- Gunakan pola warna:
  - Navy: background teknis/closing.
  - White: business case.
  - Red/salmon: problem/critical alert.
  - Green: improvement/success.
  - Amber/orange: warning/MRP attention.

- Buat sistem ikon konsisten:
  - GI = document/box arrow.
  - MRP = planning/calendar.
  - Stockout = warning triangle.
  - Chatbot = chat bubble.
  - Supabase/PostgreSQL = database cylinder.
  - n8n = workflow nodes.
  - WhatsApp = notification channel.

---

# 5. Brainstorming Konsep Web Presentation

> **Disalurkan ke PRD:** section IDs, user stories, functional requirements, acceptance criteria, dan MVP scope → [PRD.md](PRD.md) §3–4, §8, §15.

Konsep terbaik untuk SINOS:

## **Interactive Kaizen Web Deck: From Manual Monitoring to Real-Time Sparepart Intelligence**

Web presentation tidak perlu menjadi website besar. Lebih tepat dibuat sebagai **slide interaktif berbasis web** dengan mode fullscreen.

## Alur pengalaman pengguna

1. **Opening**
   - Judul SINOS muncul.
   - Background warehouse/sparepart.
   - Tiga fokus: stockout turun, downtime turun, pencarian cepat.

2. **Problem Simulation**
   - User melihat proses manual.
   - Klik bottleneck: rekap manual, tidak ada notifikasi, pencarian part lama.

3. **Root Cause Interactive Fishbone**
   - Fishbone bisa diklik per kategori.
   - Setiap kategori membuka root cause utama.

4. **SINOS Solution Reveal**
   - Menampilkan n8n, Supabase/PostgreSQL, WhatsApp, email, chatbot.

5. **Workflow Journey**
   - Email attachment masuk.
   - Excel dibaca.
   - Data dimapping.
   - Insert ke PostgreSQL.
   - Operational stock dihitung.
   - WhatsApp/email dikirim.

6. **Chatbot Demo**
   - Simulasi user bertanya: “Cari bearing 6205.”
   - Sistem menjawab lokasi, stok, deskripsi, status.

7. **Impact Dashboard**
   - KPI turun secara animatif:
     - Rekap 90–120 menit menjadi 10–20 menit.
     - Pencarian 10–15 menit menjadi <10 detik.
     - Stockout turun 35–60%.

8. **Cost & ROI**
   - CAPEX, OPEX, benefit, net saving divisualkan sebagai kartu finansial.

9. **Standardization & Sustainability**
   - SOP, WI, log, KPI dashboard, Kaizen loop.

10. **Closing / Discussion**

- Next step dan keputusan yang diminta.

---

# 6. Ide Animasi

## Animasi pembuka

**Warehouse blur → SINOS title reveal → 3 impact cards muncul satu per satu.**

Tujuan: langsung membuat audiens paham bahwa SINOS adalah solusi operational improvement, bukan sekadar aplikasi.

## Animasi RCA

**Interactive fishbone expansion.**

- Awalnya hanya tulang utama.
- Saat klik “Process”, muncul root cause terkait rekap manual, filter manual, workflow belum terintegrasi.
- Saat klik “Measurement”, muncul aging Pending GI/MRP belum terpantau.

Tujuan: mengurangi kepadatan slide RCA.

## Animasi workflow

**Node-to-node flow animation.**

Email → Excel Reader → Mapping → PostgreSQL → Operational Stock → WhatsApp/Email.

Tujuan: memperjelas cara kerja SINOS secara teknis tanpa membuat audiens tenggelam di detail n8n.

## Animasi KPI

Gunakan:

- Counter number.
- Progress bar.
- Before-after meter.

Contoh:

- “Waktu cari part: 10–15 menit” lalu turun menjadi “<10 detik”.
- “Improvement >90%” muncul sebagai highlight utama.

## Animasi finansial

Gunakan waterfall chart:

Saving operasional + downtime saving − CAPEX − OPEX = net saving.

Tujuan: membuat net saving Rp112,08 juta lebih mudah dipercaya.

---

# 7. Ide Click Motion & Interaksi

## Interaksi 1 — Problem Card Reveal

Tiga kartu utama:

- Rekap manual.
- Tidak ada notifikasi.
- Pencarian sparepart manual.

Saat diklik, muncul:

- Dampak.
- Root cause.
- Solusi SINOS.

## Interaksi 2 — RCA Fishbone Clickable

Klik kategori:

- Man.
- Process.
- Material.
- Machine.
- Measurement.
- Environment.

Setiap klik membuka root cause dan rekomendasi improvement terkait.

## Interaksi 3 — Roadmap Week-by-Week

Timeline bisa dibuat clickable:

- Week 1–2: n8n + Supabase.
- Week 2: WhatsApp Gateway.
- Week 2–3: single database.
- Week 3: Pending GI & MRP notification.
- Week 4: SSKA chatbot.
- Week 4+: AI filter & WhatsApp normalization.

## Interaksi 4 — Simulasi Chatbot SSKA

User klik contoh pertanyaan:

- “Cek stok bearing.”
- “Cari lokasi part.”
- “Material critical hari ini.”

Lalu muncul jawaban chatbot terformat.

## Interaksi 5 — Before/After Slider

Untuk slide evaluasi:

- Sebelum: manual, file rekap, no reminder.
- Sesudah: chatbot, email summary, WhatsApp alert.

## Interaksi 6 — Architecture Toggle

Mode:

- **Management View:** sumber data → SINOS → notifikasi → benefit.
- **Technical View:** email attachment → n8n → mapping → PostgreSQL → AI router → WhatsApp.

Ini penting supaya deck bisa dipakai untuk dua audiens berbeda.

---

# 8. Ide Sound Effect & Audio

Gunakan sangat minimal.

Rekomendasi:

- **Soft click:** saat membuka card/detail.
- **Subtle whoosh:** saat pindah section besar.
- **Light notification tone:** saat WhatsApp alert muncul.
- **Low digital pulse:** saat KPI improvement reveal.
- **Clean closing chime:** saat masuk slide discussion.

Hindari:

- Alarm keras.
- Suara WhatsApp terlalu literal.
- Musik latar panjang.
- Efek game.

Untuk presentasi Kaizen, audio harus memperkuat perhatian, bukan menjadi gimmick.

---

# 9. Elemen Desain Pendukung

## Elemen yang cocok

### 1. Dashboard mockup SINOS

Tampilkan:

- Total critical item.
- Pending GI >24 jam.
- Stockout risk.
- Last update.
- Alert sent today.

### 2. WhatsApp message card

Gunakan format bubble WhatsApp untuk:

- Pending GI alert.
- MRP critical alert.
- Jawaban chatbot SSKA.

### 3. Database hub visual

Supabase/PostgreSQL sebagai pusat, terhubung ke:

- SAP/Excel/email.
- n8n.
- WhatsApp.
- Email.
- Chatbot.
- KPI dashboard.

### 4. KPI impact meter

Gunakan visual:

- Before.
- After.
- Improvement percentage.

### 5. Mini workflow animation

Node kecil bergerak dari kiri ke kanan:
Input → Process → Database → Alert → Action.

### 6. Risk heatmap

Untuk material critical:

- Safe.
- Warning.
- Critical.

Ini cocok untuk menjelaskan prioritas MRP dan operational stock.

---

# 10. Rekomendasi Storytelling

Narasi SINOS sebaiknya diperkuat menjadi:

> “Masalah sparepart sering terlihat sederhana: cari barang, cek stok, follow-up. Tetapi ketika proses itu masih manual, dampaknya bisa melebar menjadi stock out, expedite cost, downtime, dan keterlambatan tindakan MRP. SINOS mengubah proses tersebut menjadi sistem monitoring dan notifikasi real-time berbasis n8n, Supabase, WhatsApp, email summary, dan chatbot SSKA. Hasilnya: data lebih cepat terlihat, tindakan lebih cepat dilakukan, dan risiko operasional bisa ditekan.”

## Alur cerita yang direkomendasikan

1. **Masalah:** data tersebar, monitoring manual, follow-up reaktif.
2. **Dampak:** stockout, expedite, downtime, waktu admin dan teknisi terbuang.
3. **Akar masalah:** tidak ada alert, data tidak terpusat, MRP belum jadi action list.
4. **Solusi:** SINOS sebagai automation layer.
5. **Cara kerja:** email/SAP/Excel → n8n → database → WhatsApp/email/chatbot.
6. **Hasil:** KPI improvement dan saving.
7. **Sustainability:** SOP, WI, log, dashboard, Kaizen loop.
8. **Keputusan:** area prioritas, data kritikal, dukungan implementasi.

---

# 11. Rekomendasi Teknologi

> **Disalurkan ke PRD:** NFR performa, browser, offline → [PRD.md](PRD.md) §5. **Token & komponen UI** → [design-system.md](design-system.md).

## Target stack (produk akhir)

### React + Tailwind CSS + Framer Motion

Cocok untuk web presentation modern, responsive, dan animatif.

Fungsi:

- React: struktur komponen slide.
- Tailwind: styling cepat dan konsisten.
- Framer Motion: transisi, card reveal, KPI counter, modal.

### Reveal.js

Cocok jika ingin tetap seperti PowerPoint, tetapi berbasis web.

Fungsi:

- Navigasi slide.
- Keyboard control.
- Fullscreen mode.
- Speaker notes.

### GSAP

Cocok untuk animasi workflow dan timeline kompleks.

Fungsi:

- Node-to-node animation.
- Scroll-based storytelling.
- Sequenced transition.

### Next.js

Cocok jika presentation akan berkembang menjadi demo app SINOS.

Fungsi:

- Routing.
- Deployment mudah.
- Integrasi API/demo dashboard.

### Three.js

Opsional. Hanya gunakan jika ingin visual 3D warehouse/rack. Untuk deck Kaizen, ini bukan prioritas.

**Rekomendasi praktis:**
Gunakan **React + Tailwind + Framer Motion** sebagai target. Jangan mulai dari Three.js karena bisa over-engineering.

## MVP sementara (as-built)

Implementasi saat ini: **[web-presentation/](web-presentation/)** — HTML, CSS, dan JavaScript vanilla. Memenuhi sebagian besar Must Have PRD (RCA, workflow, chatbot, KPI, ROI, theme, fullscreen). Migrasi ke React direncanakan; lihat PRD OQ-11.

---

# 12. Peluang Pengembangan

Prioritas build dan defer: **[PRD.md §15 — Recommended MVP Scope](PRD.md#15-recommended-mvp-scope)**.

Ringkasan ide kreatif (bukan prioritas formal):

| Prioritas | Ide |
|-----------|-----|
| Tinggi | Problem-to-solution, RCA clickable, workflow animation, chatbot demo, KPI dashboard, waterfall ROI |
| Sedang | Speaker mode, mini nav, export PDF, QR demo, responsive projector |
| Opsional | Sound effect, 3D warehouse, background motion |

Dark/light mode: **Must Have** di MVP (sudah ada); detail token → design-system §19.

---

# 13. Checklist Validasi

Acceptance formal web deck: **[PRD.md §11](PRD.md#11-acceptance-criteria-by-main-feature)**. Checklist di bawah untuk validasi **PPTX** vs **web deck** sebelum presentasi.

## Checklist PPTX (deck sumber)

## Konten PPTX

- [ ] SINOS dijelaskan sebagai sistem automation, bukan hanya nama project.
- [ ] Baseline dan after condition dibedakan jelas.
- [ ] Angka saving punya sumber atau asumsi eksplisit.
- [ ] KPI aktual, target, dan estimasi tidak tercampur.
- [ ] RCA terhubung langsung ke improvement.
- [ ] Roadmap punya PIC yang jelas.
- [ ] Sustainability mencakup owner maintenance.

## Visual PPTX

- [ ] Screenshot workflow cukup besar dan terbaca.
- [ ] Slide teknis tidak terlalu gelap dibanding slide lain.
- [ ] Warna critical/warning/safe konsisten.
- [ ] Tabel finansial tidak terlalu padat.
- [ ] Timeline mudah dibaca dari jarak projector.
- [ ] Repetisi teks di slide CAPEX diperbaiki.

## Checklist Web deck (MVP / target)

## Konten web

- [ ] Urutan section mengikuti [canonical narrative order](docs/README.md#canonical-narrative-order).
- [ ] Angka finansial mengikuti [financial metrics glossary](docs/README.md#financial-metrics-glossary).

## Interaksi web

- [ ] Interaksi membantu pemahaman, bukan sekadar efek.
- [ ] Semua tombol punya fungsi jelas.
- [ ] Bisa dipresentasikan tanpa internet.
- [ ] Bisa dinavigasi dengan keyboard.
- [ ] Ada fallback jika audio dimatikan.
- [ ] Performa tetap ringan.

## Teknis web

- [ ] Data dummy tidak mengandung informasi sensitif.
- [ ] Screenshot WhatsApp/email disensor bila perlu.
- [ ] Asset gambar dikompresi.
- [ ] Web bisa fullscreen.
- [ ] Ada versi PDF/static backup.

---

# 14. Open Items dari PPTX

Sinkron dengan [PRD.md §14 — Open Questions](PRD.md#14-open-questions).

| Item | Risiko | Tindakan |
|------|--------|----------|
| Baseline saving (stockout × Rp1 juta, dll.) | Management mempertanyakan sumber | Dokumentasikan asumsi; label `estimate` |
| KPI evaluasi: aktual vs target vs estimasi | Kredibilitas turun jika tercampur | Isi `sourceLabel` di config KPI |
| PIC roadmap banyak “IT” | Implementasi tidak jelas | Perketat RACI (contoh: Warehouse, Planner, IT) — lihat MVP `timeline` di `app.js` |
| User Feedback slide ringkas | Kurang persuasif | Tambah kutipan/skor; section PRD #13 — Planned di MVP |
| Screenshot sensitif | Compliance | Sensor nomor WA/material di Assets |

---

# 15. Kesimpulan Brainstorming

Deck SINOS sudah kuat dari sisi **problem, solusi, business case, evaluasi, dan bukti teknis**. Nilai utamanya ada pada kombinasi:

1. **n8n automation.**
2. **Supabase/PostgreSQL sebagai single source.**
3. **WhatsApp alert.**
4. **Email summary.**
5. **SSKA chatbot.**
6. **KPI improvement dan net saving.**

Pengembangan terbaik bukan membuat presentasi menjadi “ramai”, tetapi membuatnya menjadi **interactive operational story**: audiens melihat masalah manual, memahami akar masalah, lalu melihat SINOS bekerja dari data masuk sampai alert dikirim.

**Next dokumentasi:** setelah perubahan konten, perbarui [docs/README.md](docs/README.md) glossary jika angka berubah, lalu PRD traceability §0.2.

Catatan kritis: perkuat label **aktual / target / estimasi** pada KPI dan saving sebelum presentasi ke management ([docs/README.md — KPI glossary](docs/README.md#kpi-metrics-glossary)).
