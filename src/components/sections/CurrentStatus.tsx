import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Search, BellOff } from 'lucide-react';

const CurrentStatus = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <SlideWrapper>
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Executive Summary</h2>
        <p className="text-xl text-slate-400">Kondisi manual saat ini vs. Target kondisi baru</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="bg-slate-800/40 p-8 rounded-2xl border border-alert/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-alert" />
            <h3 className="text-2xl font-semibold text-alert">Kondisi Saat Ini (Manual)</h3>
          </div>
          
          <ul className="space-y-6">
            <motion.li variants={itemVariants} className="flex gap-4">
              <div className="bg-slate-700/50 p-2 rounded-lg h-fit"><Clock className="w-5 h-5 text-slate-300" /></div>
              <div>
                <h4 className="font-semibold text-lg">Rekap Manual Terlalu Lama</h4>
                <p className="text-slate-400">Menghabiskan waktu 90–120 menit setiap hari untuk update data.</p>
              </div>
            </motion.li>
            
            <motion.li variants={itemVariants} className="flex gap-4">
              <div className="bg-slate-700/50 p-2 rounded-lg h-fit"><BellOff className="w-5 h-5 text-slate-300" /></div>
              <div>
                <h4 className="font-semibold text-lg">Tidak Ada Notifikasi Otomatis</h4>
                <p className="text-slate-400">Follow-up reaktif hanya setelah terjadi stockout.</p>
              </div>
            </motion.li>

            <motion.li variants={itemVariants} className="flex gap-4">
              <div className="bg-slate-700/50 p-2 rounded-lg h-fit"><Search className="w-5 h-5 text-slate-300" /></div>
              <div>
                <h4 className="font-semibold text-lg">Pencarian Part Sulit</h4>
                <p className="text-slate-400">Teknisi mencari part secara manual, memakan waktu 10-15 menit per item.</p>
              </div>
            </motion.li>
          </ul>
        </motion.div>

        <div className="flex flex-col justify-center">
          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 relative z-10">Target Kondisi Baru (SINOS)</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="pl-4 border-l-2 border-blue-500/50">
                <h4 className="font-semibold text-lg text-white">Notifikasi Real-time</h4>
                <p className="text-blue-200/70">Alert otomatis via WhatsApp saat stok mencapai batas kritis.</p>
              </div>
              
              <div className="pl-4 border-l-2 border-blue-500/50">
                <h4 className="font-semibold text-lg text-white">Data Stok Terkonsolidasi</h4>
                <p className="text-blue-200/70">Satu sumber kebenaran (Single Source of Truth) dari SAP ke n8n.</p>
              </div>
              
              <div className="pl-4 border-l-2 border-blue-500/50">
                <h4 className="font-semibold text-lg text-white">Pencarian Cepat untuk Teknisi</h4>
                <p className="text-blue-200/70">Chatbot SSKA memberikan data ketersediaan instan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default CurrentStatus;
