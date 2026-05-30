import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { Database, Mail, MessageSquare, RefreshCw, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const Solution = () => {
  return (
    <SlideWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Solution Overview: SINOS</h2>
        <p className="text-xl text-slate-400">Automation layer yang menjembatani gap antara sistem SAP / ERP dan komunikasi operasional.</p>
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 h-full min-h-[400px]">
        
        {/* Source Systems */}
        <div className="flex flex-col gap-6 z-10 w-full md:w-[250px]">
          <Card className="bg-slate-800/80 border-slate-700 hover:border-slate-500 transition-colors">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <Server className="w-10 h-10 text-slate-400" />
              <span className="font-semibold text-base">SAP / ERP</span>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/80 border-slate-700 hover:border-slate-500 transition-colors">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <Database className="w-10 h-10 text-slate-400" />
              <span className="font-semibold text-base">Excel Legacy</span>
            </CardContent>
          </Card>
        </div>

        {/* Core Automation Layer */}
        <motion.div 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="z-20 w-full md:w-[450px]"
        >
          <Card className="bg-gradient-to-br from-blue-950/90 to-indigo-950/90 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)] text-center relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
            
            <CardHeader className="pb-2 relative z-10">
              <RefreshCw className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-spin-slow" style={{ animationDuration: '8s' }} />
              <CardTitle className="text-3xl font-bold text-white mb-2">n8n Automation</CardTitle>
              <CardDescription className="text-blue-200 text-lg">Orchestration & Mapping Hub</CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="bg-slate-900/60 rounded-xl p-4 flex items-center justify-center gap-3 border border-blue-500/30 backdrop-blur-sm mt-4">
                <Database className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-semibold text-slate-200">PostgreSQL / Supabase</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Output Systems */}
        <div className="flex flex-col gap-6 z-10 w-full md:w-[250px]">
          <Card className="bg-slate-800/80 border-success/30 hover:border-success/60 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.05)]">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <MessageSquare className="w-10 h-10 text-success" />
              <span className="font-semibold text-base">WhatsApp Alerts</span>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/80 border-blue-400/30 hover:border-blue-400/60 transition-colors shadow-[0_0_15px_rgba(96,165,250,0.05)]">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <Mail className="w-10 h-10 text-blue-400" />
              <span className="font-semibold text-base">Email Summaries</span>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/80 border-warning/30 hover:border-warning/60 transition-colors shadow-[0_0_15px_rgba(234,179,8,0.05)]">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <MessageSquare className="w-10 h-10 text-warning" />
              <span className="font-semibold text-base">SSKA Chatbot</span>
            </CardContent>
          </Card>
        </div>

        {/* Connecting Lines (Desktop only visualization aid) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 -translate-y-1/2 z-0 opacity-50"></div>
        
      </div>
    </SlideWrapper>
  );
};

export default Solution;
