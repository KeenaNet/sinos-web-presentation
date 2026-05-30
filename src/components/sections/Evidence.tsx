import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { Search, Mail, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import chatbotImg from '../../../Assets/Screenshot-chatbot.png';
import emailSummaryImg from '../../../Assets/email-summary-sinos.png';
import pendingGiImg from '../../../Assets/screenshoot-pending-gi.jpeg';

const evidenceData = [
  {
    id: 'query',
    icon: <Search className="w-6 h-6" />,
    title: 'Query Sparepart',
    beforeDesc: 'Teknisi bertanya ke group atau mendatangi warehouse fisik (10-15 menit).',
    afterDesc: 'Bot SSKA membalas instan <10 detik dengan detail lokasi rack & stok.',
    beforeImg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    afterImg: chatbotImg
  },
  {
    id: 'email',
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Summary',
    beforeDesc: 'Rekap manual Excel di penghujung shift, sering tidak konsisten.',
    afterDesc: 'Laporan otomatis via Email dengan format tabel clean dan insight harian.',
    beforeImg: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    afterImg: emailSummaryImg
  },
  {
    id: 'wa',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'WhatsApp Alert',
    beforeDesc: 'Menunggu complain dari user atau part sudah terlanjur habis (stockout).',
    afterDesc: 'Alert instan ke grup saat Safety Stock tersentuh batas minimum.',
    beforeImg: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80',
    afterImg: pendingGiImg
  }
];

const Evidence = () => {
  const [activeTab, setActiveTab] = useState(evidenceData[0].id);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  
  const activeItem = evidenceData.find(item => item.id === activeTab)!;

  return (
    <SlideWrapper>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Evidence: Before & After</h2>
        <p className="text-xl text-slate-400">Bukti nyata perubahan proses setelah implementasi SINOS.</p>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 bg-slate-800 p-2 rounded-xl">
          {evidenceData.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === item.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison Viewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {/* Before */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-alert/20 text-alert px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
              </div>
              <p className="text-slate-300 mb-6 flex-1">{activeItem.beforeDesc}</p>
              <div 
                className="h-64 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 grayscale brightness-50 contrast-125 relative group cursor-pointer"
                onClick={() => setZoomedImg(activeItem.beforeImg)}
              >
                 <img src={activeItem.beforeImg} alt="Before" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <span className="text-white font-medium">Klik untuk memperbesar</span>
                 </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-b from-blue-900/40 to-slate-800 rounded-2xl p-6 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="bg-success/20 text-success px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">After (SINOS)</div>
              </div>
              <p className="text-white font-medium mb-6 flex-1 relative z-10">{activeItem.afterDesc}</p>
              <div 
                className="h-64 rounded-xl overflow-hidden bg-slate-900 border border-blue-500/30 relative z-10 group cursor-pointer"
                onClick={() => setZoomedImg(activeItem.afterImg)}
              >
                 <img src={activeItem.afterImg} alt="After" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <span className="text-white font-medium">Klik untuk memperbesar</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImg(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={zoomedImg}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SlideWrapper>
  );
};

export default Evidence;
