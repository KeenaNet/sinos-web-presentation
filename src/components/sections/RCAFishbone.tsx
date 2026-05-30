import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Settings, Box, Cpu, BarChart3, Factory, ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const categories = [
  { id: 'man', label: 'Man', icon: Users, color: 'text-blue-400', items: ['Admin mengejar update satu per satu', 'Follow-up bergantung pada admin', 'Respons PIC lintas departemen lambat'] },
  { id: 'process', label: 'Process', icon: Settings, color: 'text-purple-400', items: ['Data ditarik, difilter & dikirim manual', 'Follow-up dilakukan setelah masalah muncul', 'Alur kerja masih manual', 'Format komunikasi tidak standar', 'Workflow belum terintegrasi', 'Rekap masih excel'] },
  { id: 'material', label: 'Material', icon: Box, color: 'text-orange-400', items: ['Update stock belum cepat', 'Tindakan MRP terlambat', 'Material critical belum diprioritaskan'] },
  { id: 'machine', label: 'Machine', icon: Cpu, color: 'text-emerald-400', items: ['Belum ada reminder otomatis', 'SAP, stok aktual, dan rekap manual belum sinkron', 'Data masih terpisah di SAP dan Excel', 'Follow-up belum terkoneksi'] },
  { id: 'measurement', label: 'Measurement', icon: BarChart3, color: 'text-rose-400', items: ['Transaksi GI belum termonitoring', 'Hasil MRP belum menjadi actions list prioritas', 'Belum ada alert yang melewati batas aging', 'Aging Pending GI/MRP belum terpantau', 'Akurasi data belum tervalidasi rutin'] },
  { id: 'environment', label: 'Environment', icon: Factory, color: 'text-cyan-400', items: ['Rekap dari banyak sumber data', 'Update antar departemen tidak seragam', 'Data tersebar', 'Komunikasi masih reaktif'] }
];

const RCAFishbone = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <SlideWrapper>
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Root Cause Analysis</h2>
        <p className="text-xl text-slate-400">Inefisiensi biaya operasional & keterlambatan tindakan stok/MRP manual</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 h-full">
        {/* Core Problem */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-alert/10 border-2 border-alert text-alert font-bold px-8 py-4 rounded-2xl shadow-lg shadow-alert/10 text-2xl flex items-center gap-4 text-center max-w-4xl leading-relaxed"
        >
          <Target className="w-8 h-8 flex-shrink-0" />
          Ketergantungan tinggi pada proses manual, monitoring belum otomatis, visibilitas rendah, dan komunikasi reaktif
        </motion.div>

        {/* 6M Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <motion.div key={cat.id} variants={itemVariants}>
                <Card 
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'ring-2 ring-blue-500 bg-slate-800 scale-105 z-10' 
                      : 'hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1'
                  }`}
                  onClick={() => setActiveCategory(isActive ? null : cat.id)}
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-slate-900/50 ${cat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {cat.label}
                    </CardTitle>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </CardHeader>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-4">
                          <ul className="space-y-3">
                            {cat.items.map((item, idx) => (
                              <motion.li 
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + idx * 0.1 }}
                                className="flex items-start gap-2 text-slate-300 text-sm bg-slate-900/40 p-2.5 rounded-lg border border-slate-700/50"
                              >
                                <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default RCAFishbone;
