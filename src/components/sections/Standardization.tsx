import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { BookOpen, FileText, CheckCircle2, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';

const Standardization = () => {
  const standards = [
    { icon: <BookOpen className="w-8 h-8 text-blue-400" />, title: 'Standard Operating Procedure (SOP)', desc: 'Revisi SOP Warehouse Management terkait update stok dan penanganan part kritikal.' },
    { icon: <FileText className="w-8 h-8 text-indigo-400" />, title: 'Work Instruction (WI)', desc: 'Pembuatan WI penggunaan Chatbot SSKA dan eskalasi WhatsApp alert.' },
    { icon: <CheckCircle2 className="w-8 h-8 text-success" />, title: 'Form & Record', desc: 'Penyesuaian form harian ke dalam format digital log di Supabase.' },
    { icon: <Recycle className="w-8 h-8 text-warning" />, title: 'Sustainability', desc: 'Training berkala dan audit sistem setiap kuartal oleh tim IT dan Warehouse.' }
  ];

  return (
    <SlideWrapper className="items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Standardisasi & Keberlanjutan</h2>
        <p className="text-xl text-slate-400">Memastikan improvement tetap berjalan di masa depan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {standards.map((std, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl flex gap-6 hover:bg-slate-800/80 transition-colors"
          >
            <div className="shrink-0">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                {std.icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{std.title}</h3>
              <p className="text-slate-400 leading-relaxed">{std.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};

export default Standardization;
