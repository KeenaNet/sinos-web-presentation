import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import { Bot, LineChart, Link, Zap } from 'lucide-react';

const Improvements = () => {
  const cards = [
    {
      icon: <Link className="w-8 h-8 text-blue-400" />,
      title: "Data Integration",
      desc: "Menghubungkan data SAP, Excel operasional, dan MRP ke dalam satu database terpusat secara otomatis setiap hari."
    },
    {
      icon: <Zap className="w-8 h-8 text-warning" />,
      title: "Real-time Alerts",
      desc: "Notifikasi otomatis via WhatsApp untuk stok yang masuk batas critical, mencegah keterlambatan respon."
    },
    {
      icon: <Bot className="w-8 h-8 text-success" />,
      title: "SSKA Chatbot",
      desc: "Teknisi dapat melakukan query stok, lokasi rak, dan deskripsi part 24/7 langsung dari HP mereka."
    },
    {
      icon: <LineChart className="w-8 h-8 text-indigo-400" />,
      title: "Automated Reporting",
      desc: "Email summary harian dikirimkan ke Management dan Planner tanpa perlu rekap manual berjam-jam."
    }
  ];

  return (
    <SlideWrapper>
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Empat Aktivitas Utama SINOS</h2>
        <p className="text-xl text-slate-400">Bagaimana solusi ini memperbaiki akar masalah operasional.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="group bg-slate-800/60 hover:bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all cursor-default"
          >
            <div className="bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">{card.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};

export default Improvements;
