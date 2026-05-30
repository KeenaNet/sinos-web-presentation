import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { Database, Mail, MessageSquare, RefreshCw, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const Solution = () => {
  return (
    <SlideWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Solution Overview: SINOS</h2>
        <p className="text-xl text-slate-400">Automation layer yang menjembatani gap antara sistem ERP dan komunikasi operasional.</p>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 h-full min-h-[400px]">
        
        {/* Source Systems */}
        <div className="flex flex-col gap-6 z-10 w-full md:w-1/4">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center flex flex-col items-center gap-2">
            <Server className="w-8 h-8 text-slate-400" />
            <span className="font-semibold text-sm">SAP / ERP</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center flex flex-col items-center gap-2">
            <Database className="w-8 h-8 text-slate-400" />
            <span className="font-semibold text-sm">Excel Legacy</span>
          </div>
        </div>

        {/* Core Automation Layer */}
        <motion.div 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="z-20 w-full md:w-2/4 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-2 border-blue-500 p-8 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.3)] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
          
          <RefreshCw className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-spin-slow" style={{ animationDuration: '8s' }} />
          <h3 className="text-3xl font-bold text-white mb-2">n8n Automation</h3>
          <p className="text-blue-200 mb-6">Orchestration & Mapping Hub</p>
          
          <div className="bg-slate-900/50 rounded-xl p-4 flex items-center justify-center gap-3 border border-blue-500/30">
            <Database className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold">PostgreSQL / Supabase</span>
          </div>
        </motion.div>

        {/* Output Systems */}
        <div className="flex flex-col gap-6 z-10 w-full md:w-1/4">
          <div className="bg-slate-800 p-4 rounded-xl border border-success/50 text-center flex flex-col items-center gap-2">
            <MessageSquare className="w-8 h-8 text-success" />
            <span className="font-semibold text-sm">WhatsApp Alerts</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-blue-400/50 text-center flex flex-col items-center gap-2">
            <Mail className="w-8 h-8 text-blue-400" />
            <span className="font-semibold text-sm">Email Summaries</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-warning/50 text-center flex flex-col items-center gap-2">
            <MessageSquare className="w-8 h-8 text-warning" />
            <span className="font-semibold text-sm">SSKA Chatbot</span>
          </div>
        </div>

        {/* Connecting Lines (Desktop only visualization aid) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 -translate-y-1/2 z-0 opacity-50"></div>
        
      </div>
    </SlideWrapper>
  );
};

export default Solution;
