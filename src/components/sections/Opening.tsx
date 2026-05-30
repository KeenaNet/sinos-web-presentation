import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { Zap, Clock, ShieldCheck } from 'lucide-react';

const Opening = () => {
  return (
    <SlideWrapper className="items-center text-center">
      <div className="mb-6">
        <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Project Kaizen 2026</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
        SINOS
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-12 max-w-3xl">
        Sparepart Inventory Notification & Operational System
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
          <Zap className="w-10 h-10 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Pencarian Part Cepat</h3>
          <p className="text-slate-400 text-sm">Dari 15 menit menjadi kurang dari 10 detik via Chatbot SSKA.</p>
        </div>
        
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
          <Clock className="w-10 h-10 text-alert mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Downtime Turun</h3>
          <p className="text-slate-400 text-sm">Mencegah pending GI dan expedite cost yang tidak perlu.</p>
        </div>
        
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors">
          <ShieldCheck className="w-10 h-10 text-success mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Kontrol Stok Jelas</h3>
          <p className="text-slate-400 text-sm">Notifikasi real-time untuk status critical dan warning.</p>
        </div>
      </div>
      
      <div className="mt-16 text-slate-500 text-sm">
        <p>Presenter: Ahmad Muhidin & Zian Rhafi</p>
      </div>
    </SlideWrapper>
  );
};

export default Opening;
