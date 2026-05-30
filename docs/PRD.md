# SINOS Interactive Web Presentation — Product Requirements Document

**Version:** 1.1.0  
**Date:** 29 Mei 2026  
**Documentation suite:** [docs/README.md](docs/README.md)  
**Related:** [brainstorming.md](brainstorming.md) · [design-system.md](design-system.md) · [PSS Ahmad Muhidin,Zian Kaizen MRP SINOS-editable.pptx](PSS Ahmad Muhidin,Zian Kaizen MRP SINOS-editable.pptx)

## Summary

Produk yang akan dibuat adalah **presentasi web interaktif** untuk project **SINOS — Sparepart Inventory Notification & Operational System**. Web presentation ini mengubah deck statis menjadi pengalaman storytelling interaktif: mulai dari masalah stock out, downtime, rekap manual, root cause, solusi SINOS, workflow automation, chatbot SSKA, bukti operasional, KPI, ROI, standardisasi, sampai next step implementasi.

Fokus PRD ini adalah **produk web presentation**, bukan rebuild sistem operasional SINOS/n8n.

**Target stack:** React + Tailwind CSS + Framer Motion  
**Aktif:** React di `src/` · **Legacy:** HTML/CSS/JS di `web-presentation/`

---

# 0. Document Control

| Item                     | Detail                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| Changelog 1.1.0          | Canonical IA, glossary angka, MVP traceability, theme Must Have, `financialMetrics` config |
| Changelog 1.0.0          | PRD awal dari PPTX + brainstorming                                                         |
| Canonical narrative      | [docs/README.md#canonical-narrative-order](docs/README.md#canonical-narrative-order)       |
| Financial / KPI glossary | [docs/README.md](docs/README.md#financial-metrics-glossary)                                |

## 0.1 Implementation Status

| Layer  | Stack                            | Lokasi              | Status                                 |
| ------ | -------------------------------- | ------------------- | -------------------------------------- |
| Target | React + Tailwind + Framer Motion | `src/` (Vite root)  | **Active** — migrasi pasca-UAT vanilla |
| MVP    | HTML + CSS + JavaScript          | `web-presentation/` | **Active** — 13 slide                  |

MVP mencakup: fullscreen, keyboard nav, management/technical toggle, dark/light theme, RCA, workflow, chatbot, KPI, ROI waterfall, evidence, roadmap, standardization, technical appendix, discussion.

## 0.2 MVP Traceability (FR → slide)

| FR     | Section                   | MVP `data-title`         | Status           |
| ------ | ------------------------- | ------------------------ | ---------------- |
| FR-M01 | Fullscreen                | (topbar)                 | Done             |
| FR-M02 | Executive summary         | Opening + Current Status | Done             |
| FR-M03 | RCA                       | RCA                      | Done             |
| FR-M04 | Solution                  | Solution                 | Done             |
| FR-M05 | Workflow                  | Workflow                 | Done             |
| FR-M06 | Chatbot                   | SSKA Demo                | Done             |
| FR-M07 | ROI                       | ROI                      | Done             |
| FR-M08 | Closing                   | Discussion               | Done             |
| FR-M09 | Evidence                  | Evidence                 | Done             |
| FR-M10 | Standardization           | Standardisasi            | Done             |
| FR-M11 | Discussion                | Discussion               | Done             |
| FR-M12 | Keyboard                  | global                   | Done             |
| FR-M13 | Team/Governance           | Opening (presenters)     | Done             |
| FR-M14 | User Feedback             | User Feedback            | **Done** (React) |
| FR-S01 | Management/Technical view | toggle + `data-view`     | Done             |
| FR-S02 | Before/after              | Evidence                 | Done             |
| FR-S03 | Waterfall ROI             | ROI                      | Done             |
| FR-S04 | Roadmap clickable         | Roadmap                  | Done             |
| FR-S05 | Progress nav              | slide counter            | Partial          |
| FR-S06 | Audio toggle              | —                        | Planned          |
| FR-N04 | Theme toggle              | theme button             | Done             |

---

# 1. Overview

## 1.1 Problem Statement

Presentasi SINOS saat ini sudah memiliki konten yang kuat: masalah operasional, RCA, roadmap, biaya, benefit, KPI, evaluasi, workflow, dan arsitektur teknis. Namun, dalam format PowerPoint statis, beberapa bagian berisiko kurang optimal saat dipresentasikan:

- Slide RCA terlalu padat dan sulit dicerna cepat.
- Workflow teknis n8n/Supabase/WhatsApp belum cukup “hidup” secara visual.
- KPI dan saving besar perlu divisualkan lebih meyakinkan.
- Demo chatbot SSKA, WhatsApp alert, dan email summary masih terlihat sebagai bukti statis.
- Presentasi perlu menyesuaikan dua tipe audiens: management dan teknis.

Masalah inti dari SINOS sendiri adalah proses manual yang memperlambat respons warehouse: rekap 90–120 menit/hari, tidak ada notifikasi otomatis, pencarian sparepart manual, data terpisah, dan follow-up yang reaktif. PPTX juga menunjukkan target improvement: notifikasi real-time, stok terkonsolidasi, data cepat untuk teknisi, serta info operasional kurang dari 24 jam.

## 1.2 Proposed Solution

Membangun **web presentation interaktif SINOS** menggunakan **React + Tailwind CSS + Framer Motion** yang menampilkan narasi project secara lebih jelas, visual, dan engaging.

Produk ini akan memiliki slide/section interaktif seperti:

- Problem-to-solution journey.
- Interactive root cause fishbone.
- Animated workflow dari email/SAP/Excel ke n8n, PostgreSQL/Supabase, WhatsApp, email, dan chatbot.
- Demo simulasi chatbot SSKA.
- KPI dashboard dengan animated counter.
- ROI/waterfall visualization.
- Before-after comparison.
- Fullscreen presentation mode.

## 1.3 Target Users

| User                             | Kebutuhan Utama                                                     |
| -------------------------------- | ------------------------------------------------------------------- |
| Presenter Kaizen / Project Owner | Menjelaskan SINOS dengan lebih menarik, runtut, dan meyakinkan      |
| Management                       | Memahami problem, cost, benefit, ROI, dan keputusan yang dibutuhkan |
| Warehouse Team                   | Melihat perubahan proses kerja dari manual ke otomatis              |
| Technic/Maintenance Team         | Memahami manfaat chatbot SSKA dan WhatsApp alert                    |
| Planner/MRP Team                 | Memahami alert MRP, status critical/warning, dan summary harian     |
| IT/Automation Team               | Memahami gambaran workflow dan arsitektur sistem                    |

---

# 2. Goals & Non-Goals

## 2.1 Goals

| ID  | Goal                                                                  | Measurement                                                                                 |
| --- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| G1  | Membuat narasi SINOS lebih mudah dipahami dalam 5–10 menit presentasi | Audiens dapat menjelaskan ulang problem, solusi, dan benefit utama                          |
| G2  | Mengubah slide padat menjadi section interaktif yang lebih ringan     | RCA, workflow, KPI, dan ROI divisualkan secara klik/animasi                                 |
| G3  | Menampilkan cara kerja SINOS secara konkret                           | Ada animasi alur data: Email/SAP/Excel → n8n → Supabase/PostgreSQL → WhatsApp/Email/Chatbot |
| G4  | Menonjolkan impact bisnis dan operasional                             | KPI improvement dan net saving ditampilkan dengan visual dashboard                          |
| G5  | Menyediakan mode presentasi yang siap dipakai di projector            | Fullscreen, keyboard navigation, responsive layout, dan fallback statis                     |

## 2.2 Non-Goals

| Non-Goal                                                                   | Alasan                                                                     |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Membuat sistem SINOS operasional yang terhubung langsung ke n8n production | Scope PRD ini hanya web presentation, bukan sistem backend produksi        |
| Mengirim WhatsApp asli dari web presentation                               | Demo harus aman dan tidak mengirim pesan real                              |
| Mengakses database Supabase production                                     | Gunakan dummy/sanitized data untuk presentasi                              |
| Membuat 3D warehouse kompleks                                              | Risiko over-engineering dan berat untuk presentasi                         |
| Membuat semua fitur PowerPoint editor                                      | Produk ini bukan editor slide, melainkan web deck interaktif               |
| Menggantikan SOP/WI resmi                                                  | Web presentation hanya media komunikasi, bukan dokumen kontrol operasional |
| Migrasi penuh ke React sebelum MVP vanilla stabil                          | Fase 1 memakai `web-presentation/`; React mengikuti setelah UAT MVP        |

---

# 3. User Stories

## 3.1 Must Have

| ID     | User Story                                                                                                                               | Acceptance Criteria                                                                                                                                                |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| US-M01 | Sebagai presenter, saya ingin membuka web presentation dalam mode fullscreen agar presentasi terlihat profesional di projector.          | Ada tombol fullscreen; layout tetap rapi di resolusi 1366×768, 1920×1080, dan 16:9 projector.                                                                      |
| US-M02 | Sebagai management, saya ingin melihat ringkasan problem SINOS dalam 30 detik pertama agar cepat memahami urgensi project.               | Opening menampilkan problem: stock out, downtime, pencarian part lama, rekap manual.                                                                               |
| US-M03 | Sebagai presenter, saya ingin menampilkan RCA secara interaktif agar slide fishbone tidak terlalu padat.                                 | Fishbone memiliki kategori Man, Process, Material, Machine, Measurement, Environment; setiap kategori bisa diklik.                                                 |
| US-M04 | Sebagai audiens, saya ingin melihat alur kerja SINOS dari data masuk sampai notifikasi agar memahami cara sistem bekerja.                | Ada animasi workflow: Email/SAP/Excel → n8n → PostgreSQL/Supabase → WhatsApp/Email/Chatbot.                                                                        |
| US-M05 | Sebagai teknisi, saya ingin melihat simulasi chatbot SSKA agar paham manfaat pencarian sparepart via WhatsApp.                           | Ada demo query sparepart dengan output stok, lokasi/rak, deskripsi, dan status.                                                                                    |
| US-M06 | Sebagai management, saya ingin melihat KPI before-after agar dampak SINOS terlihat terukur.                                              | KPI menampilkan baseline dan target/hasil: waktu rekap, Pending GI, stockout, expedite, waktu cari part.                                                           |
| US-M07 | Sebagai presenter, saya ingin menjelaskan CAPEX, OPEX, benefit, dan net saving dalam visual sederhana agar business case mudah dipahami. | Ada section ROI dengan CAPEX Rp2,375 juta, OPEX Rp3,6 juta/tahun, benefit Rp94,836 juta/tahun, downtime saving Rp23,22 juta/tahun, net saving Rp112,08 juta/tahun. |
| US-M08 | Sebagai stakeholder, saya ingin melihat next step implementasi agar keputusan setelah presentasi jelas.                                  | Closing menampilkan prioritas area, data sparepart kritikal, dukungan operasional, dan implementasi bertahap.                                                      |
| US-M09 | Sebagai audiens, saya ingin melihat siapa pemilik project agar governance Kaizen jelas.                                                  | Opening menampilkan presenter/co-owner (Ahmad Muhidin, Zian Rhafi) dan peran lintas fungsi.                                                                        |

## 3.2 Should Have

| ID     | User Story                                                                                                         | Acceptance Criteria                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| US-S01 | Sebagai presenter, saya ingin memilih Management View atau Technical View agar materi sesuai audiens.              | Toggle view tersedia; Management View fokus KPI/ROI, Technical View fokus workflow/architecture.             |
| US-S02 | Sebagai audiens, saya ingin melihat before-after proses manual vs SINOS agar perubahan proses lebih jelas.         | Ada slider/card comparison untuk Query Sparepart, Email Summary, dan WhatsApp Alert.                         |
| US-S03 | Sebagai presenter, saya ingin timeline roadmap bisa diklik agar setiap fase implementasi dapat dijelaskan singkat. | Timeline menampilkan minggu/fase dan detail deliverable.                                                     |
| US-S04 | Sebagai management, saya ingin melihat waterfall net saving agar perhitungan benefit lebih transparan.             | Visual waterfall menampilkan saving operasional + downtime saving − CAPEX − OPEX.                            |
| US-S05 | Sebagai presenter, saya ingin ada progress indicator agar tahu posisi section saat presentasi.                     | Progress bar atau mini navigation muncul konsisten.                                                          |
| US-S06 | Sebagai pengguna, saya ingin audio effect dapat dimatikan agar tidak mengganggu presentasi formal.                 | Ada mute/unmute toggle; default bisa disetel mute.                                                           |
| US-S07 | Sebagai management, saya ingin melihat validasi pengguna agar improvement terasa di lapangan.                      | Section User Feedback dengan minimal 2 kutipan atau ringkasan survey; placeholder diperbolehkan di MVP awal. |

## 3.3 Nice to Have

| ID     | User Story                                                                                                 | Acceptance Criteria                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| US-N01 | Sebagai presenter, saya ingin export static PDF agar punya backup jika web presentation bermasalah.        | Ada print/export-friendly layout atau route khusus static mode.          |
| US-N02 | Sebagai presenter, saya ingin speaker notes agar alur narasi lebih konsisten.                              | Notes bisa dibuka di panel terpisah atau mode presenter.                 |
| US-N03 | Sebagai audiens, saya ingin scan QR code untuk membuka demo SINOS agar bisa melihat versi mandiri.         | QR code tersedia di closing slide.                                       |
| US-N04 | Sebagai presenter, saya ingin dark/light mode agar tampilan sesuai kondisi ruangan.                        | Toggle theme tersedia dan tidak merusak readability.                     |
| US-N05 | Sebagai teknis, saya ingin melihat mock workflow n8n lebih detail agar bisa menjelaskan bagian automation. | Ada appendix technical workflow dengan zoomable screenshot/mock diagram. |

---

# 4. Requirements

## 4.1 Functional Requirements — Must Have

| ID     | Requirement              | Description                                                           | Acceptance Criteria                                                                                                                     |
| ------ | ------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| FR-M01 | Opening Section          | Menampilkan judul SINOS, subtitle, presenter, dan 3 fokus keputusan.  | Menampilkan: pencarian part cepat, downtime turun, kontrol stok jelas.                                                                  |
| FR-M02 | Executive Summary        | Menjelaskan kondisi manual dan target kondisi baru.                   | Memuat rekap manual 90–120 menit/hari, tidak ada notifikasi otomatis, pencarian sparepart manual, target notifikasi real-time.          |
| FR-M03 | Interactive RCA Fishbone | Menampilkan RCA dari PPTX secara interaktif.                          | Kategori fishbone dapat diklik dan menampilkan root cause terkait.                                                                      |
| FR-M04 | Solution Overview        | Menjelaskan SINOS sebagai automation layer.                           | Memuat n8n, Supabase/PostgreSQL, WhatsApp alert, Email Summary, SSKA Chatbot.                                                           |
| FR-M05 | Animated Workflow        | Menampilkan alur data utama SINOS.                                    | Animasi node-to-node: Email/SAP/Excel → n8n → mapping → PostgreSQL/Supabase → operational stock → WhatsApp/Email.                       |
| FR-M06 | Chatbot SSKA Demo        | Menampilkan simulasi query sparepart.                                 | User memilih contoh pertanyaan; sistem menampilkan jawaban dummy terformat.                                                             |
| FR-M07 | KPI Dashboard            | Menampilkan KPI before-after.                                         | Menampilkan minimal 5 KPI dari PPTX: waktu rekap, Pending GI, stockout, expedite, waktu cari part.                                      |
| FR-M08 | ROI Section              | Menampilkan CAPEX, OPEX, benefit, downtime saving, net saving.        | Semua angka sesuai PPTX dan diberi label “berdasarkan deck SINOS”.                                                                      |
| FR-M09 | Evidence Section         | Menampilkan ringkasan Query Sparepart, Email Summary, WhatsApp Alert. | Ada before-after card untuk masing-masing evidence.                                                                                     |
| FR-M10 | Standardization Section  | Menampilkan SOP, WI, Form/Record, Sustainability.                     | Semua kategori standardisasi muncul dengan ringkas.                                                                                     |
| FR-M11 | Closing / Discussion     | Menampilkan arah diskusi dan next step.                               | Memuat finalisasi feedback, perbaikan data prioritas, implementasi bertahap.                                                            |
| FR-M12 | Keyboard Navigation      | Web deck dapat dikontrol dengan keyboard.                             | Arrow right/left untuk pindah section; Esc keluar modal.                                                                                |
| FR-M13 | Fullscreen Mode          | Web deck mendukung fullscreen.                                        | Tombol fullscreen bekerja di browser modern.                                                                                            |
| FR-M14 | Team / Governance        | Menampilkan ownership project di opening.                             | Nama presenter, departemen, Pelaksana; mentor dan promotor data sesuai dari file PSS Ahmad Muhidin,Zian Kaizen MRP SINOS-editable.pptx. |
| FR-M15 | User Feedback            | Validasi pengguna (Should Have untuk presentasi final).               | Kutipan atau skor ringkas; **Planned** di MVP — lihat §0.2.                                                                             |

## 4.2 Functional Requirements — Should Have

| ID     | Requirement                      | Description                                  | Acceptance Criteria                                                                                        |
| ------ | -------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| FR-S01 | Management/Technical View Toggle | Mengubah kedalaman informasi sesuai audiens. | Management View menyembunyikan detail teknis berlebihan; Technical View menampilkan architecture appendix. |
| FR-S02 | Clickable Roadmap                | Timeline improvement dapat diklik.           | Setiap fase menampilkan root cause, improvement, PIC, target, prioritas.                                   |
| FR-S03 | Waterfall ROI Chart              | Visualisasi net saving.                      | Menampilkan perhitungan: Rp94.836.000 + Rp23.220.164 − Rp2.375.000 − Rp3.600.000 = Rp112.081.164.          |
| FR-S04 | Before/After Slider              | Membandingkan proses manual vs SINOS.        | Slider/card tersedia untuk minimal 3 area: query, email, WhatsApp.                                         |
| FR-S05 | Progress Navigation              | Menampilkan posisi presentasi.               | Progress bar atau dots navigation terlihat di semua section.                                               |
| FR-S06 | Audio Toggle                     | Mengaktifkan/menonaktifkan sound effect.     | Toggle tersedia; default mute untuk presentasi formal.                                                     |

## 4.3 Functional Requirements — Nice to Have

| ID     | Requirement                | Description                     | Acceptance Criteria                                         |
| ------ | -------------------------- | ------------------------------- | ----------------------------------------------------------- |
| FR-N01 | Static Export Mode         | Halaman ramah print/PDF.        | Semua section bisa dibuka dalam layout linear.              |
| FR-N02 | Speaker Notes              | Catatan presenter.              | Notes tidak tampil ke audiens kecuali mode presenter aktif. |
| FR-N03 | QR Code Slide              | QR code menuju demo/web deck.   | QR muncul di closing atau appendix.                         |
| FR-N04 | Theme Toggle               | Dark/light mode.                | Kontras teks tetap memenuhi readability.                    |
| FR-N05 | Zoomable Technical Diagram | Diagram teknis bisa diperbesar. | Screenshot/diagram workflow bisa zoom tanpa pecah.          |

---

# 5. Non-Functional Requirements

| Category             | Requirement                                    | Acceptance Criteria                                                             |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| Performance          | Initial load ringan untuk laptop presentasi    | Target load <3 detik di local/server internal setelah asset ter-cache           |
| Responsiveness       | Optimal untuk layar 16:9                       | Support 1366×768, 1600×900, 1920×1080                                           |
| Accessibility        | Teks harus terbaca dari projector              | Minimum font body 18–20px untuk slide utama; kontras tinggi                     |
| Reliability          | Bisa berjalan offline/local                    | Build static dapat dijalankan dari local server/intranet                        |
| Security             | Tidak memakai data production sensitif         | Semua nomor WA, screenshot, nama material sensitif harus disensor/dummy         |
| Browser Support      | Berjalan di browser modern                     | Chrome, Edge, Firefox versi terbaru                                             |
| Maintainability      | Konten mudah diedit                            | Data slide/KPI/roadmap disimpan sebagai JSON/config object                      |
| Animation Discipline | Animasi tidak mengganggu pemahaman             | Durasi transisi 200–700ms; hindari infinite animation kecuali subtle background |
| Audio Control        | Audio tidak otomatis mengganggu                | Default mute; audio hanya aktif setelah user interaction                        |
| Fallback             | Tetap bisa dipresentasikan tanpa animasi berat | Jika motion reduced aktif, animasi dipersingkat/dimatikan                       |

---

# 6. Success Metrics

## 6.1 Product Success Metrics — Web Presentation

| Metric                                  |                    Baseline |                                                                        Target |
| --------------------------------------- | --------------------------: | ----------------------------------------------------------------------------: |
| Waktu audiens memahami problem utama    | Tidak terukur di PPT statis | Presenter dapat menjelaskan dalam <30 detik lewat opening + executive summary |
| Jumlah slide/section yang terlalu padat |  RCA dan teknis cukup padat |                  RCA, workflow, KPI, ROI menjadi interaktif dan tersegmentasi |
| Kesiapan presentasi projector           |                PPT tersedia |                   Web deck fullscreen + keyboard navigation + fallback static |
| Konsistensi narasi                      |        Bergantung presenter |   Ada flow tetap: Problem → RCA → SINOS → Workflow → Impact → ROI → Next Step |
| Engagement audiens                      |                       Pasif |               Minimal 4 interaksi utama: RCA, workflow, chatbot demo, KPI/ROI |

## 6.2 Business/Operational Metrics yang Harus Ditampilkan

Angka berikut berasal dari presentasi SINOS dan harus divisualkan sebagai **baseline/target/hasil sesuai label final dari stakeholder**:

| KPI                |      Sebelum | Sesudah / Target | Improvement |
| ------------------ | -----------: | ---------------: | ----------: |
| Waktu rekap        | 90–120 menit |      10–20 menit |    ↓ 80–90% |
| Pending GI >24 jam |           18 |              5–8 |    ↓ 55–72% |
| Stockout           |         6–10 |              2–4 |    ↓ 35–60% |
| Expedite           |         8–12 |              4–7 |    ↓ 25–40% |
| Waktu cari part    |  10–15 menit |        <10 detik |      ↓ >90% |

Lihat [docs/README.md — Financial metrics](docs/README.md#financial-metrics-glossary) dan §10.0.

**Catatan validasi:** sebelum presentasi final, semua KPI harus memiliki `sourceLabel`: **actual**, **target**, atau **estimate** (OQ-01).

---

# 7. Dependencies & Assumptions

## 7.1 Product Dependencies

| Dependency             | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| React                  | Struktur komponen web presentation                             |
| Tailwind CSS           | Styling, layout, responsive design                             |
| Framer Motion          | Animasi section, card reveal, KPI counter, workflow transition |
| Browser Fullscreen API | Mode presentasi fullscreen                                     |
| Static asset folder    | Menyimpan logo, screenshot, icon, audio                        |
| JSON/config content    | Menyimpan data slide, KPI, roadmap, RCA                        |
| Optional chart library | Untuk waterfall/ROI chart jika tidak dibuat custom             |

## 7.2 Content Dependencies

| Source Content            | Status                                                   |
| ------------------------- | -------------------------------------------------------- |
| PPTX SINOS existing       | Tersedia                                                 |
| Logo perusahaan/project   | Perlu asset final                                        |
| Screenshot chatbot SSKA   | Ada di PPTX, perlu versi resolusi tinggi/sanitized       |
| Screenshot email summary  | Ada di PPTX, perlu versi resolusi tinggi/sanitized       |
| Screenshot WhatsApp alert | Ada di PPTX, perlu versi sanitized                       |
| Screenshot n8n workflow   | Ada di appendix PPTX, perlu crop/zoom lebih jelas        |
| Data KPI                  | Ada di PPTX, perlu validasi label aktual/target/estimasi |
| Data ROI                  | Ada di PPTX, perlu validasi asumsi saving                |

## 7.3 Assumptions

- Web presentation digunakan untuk pitching Kaizen/internal improvement, bukan publik eksternal.
- Data yang ditampilkan adalah dummy atau sudah disensor.
- Presenter menggunakan laptop dengan browser modern.
- Audiens utama adalah management, warehouse, technic, planner, dan stakeholder improvement.
- Tidak ada koneksi langsung ke n8n, Supabase, WhatsApp Gateway, atau database produksi.
- Web deck akan di-host secara lokal/intranet atau dijalankan dari build static.

---

# 8. Information Architecture

Urutan resmi (suite v1.1.0): [docs/README.md#canonical-narrative-order](docs/README.md#canonical-narrative-order). Alur **Evidence → KPI → ROI → Roadmap** agar bukti operasional mendahului angka dampak dan bisnis.

| #   | Section ID         | Purpose                        | Interaction                       | MVP `data-title`   |
| --- | ------------------ | ------------------------------ | --------------------------------- | ------------------ |
| 1   | opening            | Konteks, urgency, governance   | Title + impact cards + presenters | Opening            |
| 2   | current-status     | Kondisi manual & target        | Card reveal                       | Current Status     |
| 3   | rca                | Akar masalah                   | Clickable fishbone                | RCA                |
| 4   | solution           | SINOS sebagai automation layer | System hub                        | Solution           |
| 5   | improvements       | Empat aktivitas utama          | Interactive cards                 | Improvement        |
| 6   | workflow           | Alur data & notifikasi         | Node animation                    | Workflow           |
| 7   | chatbot            | Value SSKA                     | Simulated chat                    | SSKA Demo          |
| 8   | evidence           | Bukti query, email, WA         | Before-after                      | Evidence           |
| 9   | kpi                | Dampak operasional             | Animated metrics + `sourceLabel`  | KPI                |
| 10  | roi                | Business case                  | Waterfall / cards                 | ROI                |
| 11  | roadmap            | Implementasi 7 aksi            | Clickable timeline                | Roadmap            |
| 12  | standardization    | SOP, WI, sustainability        | Cards                             | Standardisasi      |
| 13  | user-feedback      | Validasi pengguna              | Quotes / survey                   | **Planned**        |
| 14  | discussion         | Keputusan & next step          | CTA                               | Discussion         |
| 15  | technical-appendix | Detail arsitektur              | Technical view only               | Technical Appendix |

---

# 9. UX/UI Requirements

Spesifikasi token, komponen, motion, dan a11y: **[design-system.md](design-system.md)**. MVP mapping: design-system §31.

## 9.1 Visual Direction

| Element         | Requirement                                                               |
| --------------- | ------------------------------------------------------------------------- |
| Style           | Modern industrial, clean, corporate dashboard                             |
| Aspect Ratio    | 16:9 first                                                                |
| Primary Color   | Navy/dark blue                                                            |
| Secondary Color | White/light gray                                                          |
| Alert Color     | Red/salmon untuk critical                                                 |
| Warning Color   | Amber/orange untuk warning                                                |
| Success Color   | Green untuk improvement/safe                                              |
| Typography      | Sans-serif modern, high readability                                       |
| Layout          | Card-based, dashboard-like, low clutter                                   |
| Icons           | Consistent line icons untuk warehouse, database, alert, workflow, chatbot |

## 9.2 Motion Direction

| Motion                 | Usage                         |
| ---------------------- | ----------------------------- |
| Fade/slide reveal      | Section transition            |
| Staggered cards        | Problem, KPI, benefit cards   |
| Node path animation    | Workflow SINOS                |
| Counter animation      | KPI and ROI numbers           |
| Modal/card expansion   | RCA details                   |
| Subtle pulse           | Critical alert indicator      |
| Reduced motion support | Disable or simplify animation |

## 9.3 Audio Direction

| Audio               | Usage                   | Default   |
| ------------------- | ----------------------- | --------- |
| Soft click          | Button/card interaction | Off/muted |
| Subtle whoosh       | Section transition      | Off/muted |
| Light notification  | WhatsApp alert reveal   | Off/muted |
| Clean closing chime | Closing section         | Off/muted |

Audio harus opsional. Untuk forum Kaizen formal, default terbaik adalah **mute**.

---

# 10. Data Model / Content Config

Konten tidak hardcoded penuh di komponen. MVP: edit `web-presentation/app.js`; target React: file di `src/content/` per [design-system.md §26](design-system.md#26-recommended-file-structure).

Angka resmi: [docs/README.md](docs/README.md#financial-metrics-glossary).

## 10.0 Financial Metrics Config

```json
{
  "capexIdr": 2375000,
  "opexMonthlyIdr": 300000,
  "opexAnnualIdr": 3600000,
  "operationalBenefitMonthlyIdr": 7903000,
  "operationalBenefitAnnualIdr": 94836000,
  "downtimeSavingAnnualIdr": 23220164,
  "netSavingAnnualIdr": 112081164,
  "waterfallFormula": "94836000 + 23220164 - 2375000 - 3600000 = 112081164",
  "displayNote": "Angka mengikuti deck SINOS; validasi final — OQ-02"
}
```

## 10.1 Example KPI Config

Field `sourceLabel` wajib: `actual` | `target` | `estimate` (isi setelah OQ-01).

```json
[
  {
    "id": "recap_time",
    "label": "Waktu Rekap",
    "before": "90–120 menit",
    "after": "10–20 menit",
    "improvement": "↓ 80–90%",
    "category": "Kecepatan",
    "sourceLabel": "estimate"
  },
  {
    "id": "pending_gi",
    "label": "Pending GI >24 Jam",
    "before": "18",
    "after": "5–8",
    "improvement": "↓ 55–72%",
    "category": "Reliabilitas",
    "sourceLabel": "estimate"
  },
  {
    "id": "stockout",
    "label": "Stockout",
    "before": "6–10",
    "after": "2–4",
    "improvement": "↓ 35–60%",
    "category": "Reliabilitas",
    "sourceLabel": "estimate"
  },
  {
    "id": "expedite",
    "label": "Expedite",
    "before": "8–12",
    "after": "4–7",
    "improvement": "↓ 25–40%",
    "category": "Biaya",
    "sourceLabel": "estimate"
  },
  {
    "id": "part_search",
    "label": "Waktu Cari Part",
    "before": "10–15 menit",
    "after": "<10 detik",
    "improvement": "↓ >90%",
    "category": "Kecepatan",
    "sourceLabel": "estimate"
  }
]
```

## 10.2 Example Roadmap Config

```json
[
  {
    "id": 1,
    "rootCause": "Rekap manual",
    "improvement": "Implementasi SINOS berbasis n8n + Supabase",
    "pic": "IT",
    "target": "Minggu 1–2",
    "priority": "Tinggi"
  },
  {
    "id": 2,
    "rootCause": "Tidak ada notifikasi",
    "improvement": "WhatsApp Gateway untuk alert otomatis",
    "pic": "IT",
    "target": "Minggu 2",
    "priority": "Tinggi"
  },
  {
    "id": 6,
    "rootCause": "Pencarian lama",
    "improvement": "SSKA chatbot untuk pencarian sparepart",
    "pic": "IT",
    "target": "Minggu 4",
    "priority": "Sedang"
  }
]
```

## 10.3 Example Chatbot Demo Config

```json
[
  {
    "question": "Cari stok bearing 6205",
    "response": {
      "material": "Bearing 6205",
      "description": "Bearing standard motor",
      "stock": "12 pcs",
      "location": "Rack B-03",
      "status": "SAFE",
      "lastUpdate": "Hari ini 08:00"
    }
  },
  {
    "question": "Part critical hari ini apa saja?",
    "response": {
      "summary": "3 item critical, 5 item warning",
      "action": "Prioritaskan follow-up MRP dan pending GI"
    }
  }
]
```

---

# 11. Acceptance Criteria by Main Feature

## 11.1 Interactive RCA

**Given** user berada di section RCA
**When** user klik kategori “Process”
**Then** web menampilkan root cause seperti workflow belum terintegrasi, filter manual, data ditarik/dikirim manual, dan follow-up reaktif.

**Done criteria:**

- Semua kategori fishbone tersedia.
- Tidak ada kategori kosong.
- Detail root cause tidak menutupi seluruh layar tanpa kontrol close.
- Bisa dinavigasi via keyboard atau klik.

## 11.2 Animated Workflow

**Given** user membuka section workflow
**When** presenter menekan next/klik start
**Then** animasi memperlihatkan alur data dari email/SAP/Excel sampai WhatsApp/email report.

**Done criteria:**

- Minimal 6 node workflow tampil.
- Arah alur mudah dipahami.
- Animasi bisa diskip.
- Ada versi reduced motion.

## 11.3 Chatbot Demo

**Given** user membuka section SSKA Chatbot
**When** user memilih contoh query
**Then** muncul simulasi balasan WhatsApp dengan stok, lokasi, deskripsi, dan status.

**Done criteria:**

- Tidak memakai nomor/data production.
- Output terlihat seperti chat bubble.
- Ada minimal 3 contoh query.
- Response muncul <500ms setelah klik.

## 11.4 KPI Dashboard

**Given** user membuka section KPI
**When** section tampil
**Then** angka before-after dan improvement muncul dengan animasi ringan.

**Done criteria:**

- Minimal 5 KPI tampil.
- Angka sesuai PPTX.
- Ada label baseline dan after/target.
- Visual tidak membingungkan antara aktual vs estimasi.

## 11.5 ROI Section

**Given** user membuka section ROI
**When** presenter menampilkan perhitungan
**Then** audiens melihat alur benefit hingga net saving.

**Done criteria:**

- CAPEX Rp2,375 juta tampil.
- OPEX Rp3,6 juta/tahun tampil.
- Benefit operasional Rp94,836 juta/tahun tampil.
- Downtime saving Rp23,22 juta/tahun tampil.
- Net saving Rp112,08 juta/tahun tampil.
- Ada catatan “asumsi mengikuti deck SINOS; perlu validasi final”.

---

# 12. Timeline & Milestones

## Phase 1 — Content Structuring

**Deliverables:**

- Final outline section.
- Data config KPI, RCA, roadmap, ROI.
- Asset list dari PPTX.
- Data sensitif yang harus disensor.

**Exit criteria:**

- Semua angka dan label sudah divalidasi.
- Stakeholder sepakat urutan narasi.

## Phase 2 — UI Foundation

**Deliverables:**

- React project setup.
- Tailwind theme.
- Layout 16:9.
- Section routing/navigation.
- Fullscreen mode.
- Progress indicator.

**Exit criteria:**

- Web deck bisa dibuka dan dinavigasi dari awal sampai akhir.

## Phase 3 — Core Interactive Features

**Deliverables:**

- Interactive RCA.
- Animated workflow.
- Chatbot SSKA demo.
- Before-after cards.
- KPI dashboard.
- ROI section.

**Exit criteria:**

- Semua Must Have selesai dan bisa dipresentasikan.

## Phase 4 — Polish & Presentation Readiness

**Deliverables:**

- Motion refinement.
- Responsive projector testing.
- Reduced motion support.
- Audio toggle.
- Static fallback.
- Asset compression.

**Exit criteria:**

- Siap digunakan untuk presentasi formal.

## Phase 5 — Validation & Handover

**Deliverables:**

- Review bersama project owner.
- UAT checklist.
- Build static final.
- Panduan edit konten.
- Backup PDF/static.

**Exit criteria:**

- Presenter bisa menjalankan deck tanpa bantuan developer.

---

# 13. Risks & Mitigations

| Risk                                           | Impact                     | Mitigation                                      |
| ---------------------------------------------- | -------------------------- | ----------------------------------------------- |
| Angka KPI/saving dipertanyakan management      | Kredibilitas turun         | Labeli aktual/target/estimasi; tampilkan asumsi |
| Screenshot mengandung data sensitif            | Risiko compliance          | Blur/sensor semua data sensitif                 |
| Animasi terlalu ramai                          | Mengganggu pemahaman       | Gunakan motion fungsional, bukan dekoratif      |
| Web bermasalah saat presentasi                 | Presentasi gagal           | Siapkan static PDF/export dan local build       |
| Audiens teknis/management butuh detail berbeda | Narasi tidak tepat sasaran | Tambahkan Management View / Technical View      |
| Asset dari PPTX resolusi rendah                | Visual terlihat buram      | Export ulang screenshot resolusi tinggi         |
| Terlalu banyak fitur                           | Scope creep                | Prioritaskan Must Have dulu                     |

---

# 14. Open Questions

| ID    | Question                                                                                | Owner                                                                                                                                    |
| ----- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| OQ-01 | Apakah KPI di slide evaluasi adalah hasil aktual pilot, target, atau estimasi?          | Project Owner                                                                                                                            |
| OQ-02 | Apakah net saving Rp112,08 juta sudah disetujui sebagai angka final?                    | Management/Finance                                                                                                                       |
| OQ-03 | Apakah screenshot WhatsApp/email boleh ditampilkan apa adanya atau harus disensor?      | Project Owner/Compliance                                                                                                                 |
| OQ-04 | Apakah web presentation akan dijalankan offline, intranet, atau public link?            | IT                                                                                                                                       |
| OQ-05 | Apakah perlu logo/branding resmi perusahaan di semua section?                           | Project Owner                                                                                                                            |
| OQ-06 | Apakah fitur audio boleh digunakan dalam forum Kaizen?                                  | Presenter                                                                                                                                |
| OQ-07 | Apakah Technical Appendix perlu ditampilkan saat presentasi utama atau hanya backup?    | Presenter/Management                                                                                                                     |
| OQ-08 | Apakah ada standar corporate color/font yang wajib diikuti?                             | Corporate/Design                                                                                                                         |
| OQ-09 | Apakah demo chatbot menggunakan data dummy atau sample data asli yang disensor?         | Warehouse/IT                                                                                                                             |
| OQ-10 | Apakah perlu deploy ke server internal CasaOS/Docker atau cukup static build di laptop? | IT                                                                                                                                       |
| OQ-11 | Kapan migrasi MVP vanilla (`web-presentation/`) ke React + Tailwind + Framer Motion?    | **Setelah** presentasi management + UAT vanilla; `web-presentation/` tetap legacy sampai React parity; cutover ke `npm run dev` di root. |

---

# 15. Recommended MVP Scope

**MVP as-built** ada di `web-presentation/`. **Target** React mengikuti setelah OQ-11.

## MVP Must Build (status di vanilla MVP)

1. Opening + team/governance + executive summary (Current Status). — **Done**
2. Interactive RCA. — **Done**
3. Solution overview + four improvements. — **Done**
4. Animated workflow. — **Done**
5. Chatbot SSKA demo. — **Done**
6. Evidence (before-after). — **Done**
7. KPI dashboard. — **Done** (tambah `sourceLabel` di config)
8. ROI cards/waterfall. — **Done**
9. Roadmap + standardization. — **Done**
10. Closing + next step. — **Done**
11. Fullscreen + keyboard navigation. — **Done**
12. Dark/light theme toggle. — **Done**
13. Management / Technical view toggle. — **Done**

## Defer Setelah MVP

1. User Feedback section (kutipan/survey).
2. Audio effect + toggle.
3. Speaker mode / speaker notes.
4. Export PDF otomatis.
5. QR code.
6. 3D warehouse.
7. Advanced technical zoom.
8. Migrasi penuh ke React (target stack).

---

# 16. Final Recommendation

PRD ini sebaiknya dipakai sebagai dasar membangun **MVP web presentation SINOS** dengan pendekatan:

**Story first, animation second, technology last.**

**Target:** React + Tailwind + Framer Motion. **Saat ini:** MVP vanilla di `web-presentation/` memenuhi sebagian besar Must Have; migrasi mengikuti OQ-11.

Fokus utama bukan membuat “website keren”, tetapi membuat audiens lebih cepat memahami:

1. Kenapa SINOS penting.
2. Masalah manual apa yang diselesaikan.
3. Bagaimana workflow automation bekerja.
4. Apa dampak operasional dan finansialnya.
5. Keputusan apa yang dibutuhkan setelah presentasi.

Catatan paling penting: sebelum masuk development, validasi dulu status angka KPI dan saving. Tanpa itu, visualisasi akan terlihat meyakinkan, tetapi argumennya bisa rapuh saat ditanya management.
