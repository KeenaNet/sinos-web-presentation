import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';

const categories = [
  { id: 'man', label: 'Man', items: ['Skill IT terbatas', 'Disiplin update data kurang'] },
  { id: 'process', label: 'Process', items: ['Workflow belum terintegrasi', 'Filter data masih manual', 'Data ditarik/dikirim manual', 'Follow-up reaktif'] },
  { id: 'material', label: 'Material', items: ['Lead time material lama', 'Safety stock tidak update'] },
  { id: 'machine', label: 'Machine', items: ['Sistem SAP tidak real-time push ke user', 'Downtime mesin produksi tinggi karena part kosong'] },
  { id: 'measurement', label: 'Measurement', items: ['KPI respon lambat', 'Monitoring reaktif'] },
  { id: 'environment', label: 'Environment', items: ['Jarak warehouse dan line jauh', 'Lokasi rak tidak tertata standar'] }
];

const RCAFishbone = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <SlideWrapper>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Root Cause Analysis</h2>
        <p className="text-xl text-slate-400">Mengapa operasional warehouse berjalan suboptimal?</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[500px] flex items-center justify-center">
        {/* Main Spine */}
        <div className="absolute w-full h-2 bg-slate-600 rounded flex items-center justify-end z-0">
          <div className="translate-x-4 bg-alert/20 border border-alert text-alert font-bold p-4 rounded-xl shadow-lg shadow-alert/10 whitespace-nowrap">
            <Target className="inline-block mr-2" />
            Stock Out & Pending GI Tinggi
          </div>
        </div>

        {/* Ribs / Categories */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 z-10 w-[75%] gap-x-8">
          {categories.map((cat, idx) => {
            const isTop = idx < 3;
            const isActive = activeCategory === cat.id;
            return (
              <div key={cat.id} className={`relative flex flex-col ${isTop ? 'justify-end pb-8 border-b-2' : 'justify-start pt-8 border-t-2'} border-slate-600/50 items-center -skew-x-[20deg]`}>
                <button
                  onClick={() => setActiveCategory(isActive ? null : cat.id)}
                  className={`skew-x-[20deg] px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 w-40 text-center
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] scale-110 z-20' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                    }
                  `}
                >
                  {cat.label}
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: isTop ? 10 : -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: isTop ? 10 : -10 }}
                      className={`absolute skew-x-[20deg] z-30 w-64 bg-slate-900 border border-blue-500/50 rounded-xl p-4 shadow-2xl shadow-black/50 ${isTop ? 'bottom-[120%]' : 'top-[120%]'}`}
                    >
                      <ul className="list-disc pl-4 text-left space-y-2 text-sm text-blue-100">
                        {cat.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveCategory(null); }}
                        className="mt-4 text-xs text-slate-400 hover:text-white w-full text-center"
                      >
                        Tutup
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default RCAFishbone;
