import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, FileSpreadsheet, Server, RefreshCw, MessageSquare, Mail, Play, Pause } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const steps = [
  { id: 'source', label: 'Data Source', icon: <FileSpreadsheet className="w-8 h-8" />, desc: 'Email / SAP / Excel' },
  { id: 'n8n', label: 'Processing', icon: <RefreshCw className="w-8 h-8" />, desc: 'n8n Automation' },
  { id: 'db', label: 'Database', icon: <Server className="w-8 h-8" />, desc: 'PostgreSQL' },
  { id: 'alert', label: 'Notification', icon: <MessageSquare className="w-8 h-8" />, desc: 'WhatsApp & Email' }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep(prev => (prev < steps.length ? prev + 1 : 0));
      }, 1500); // 2.5s delay
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <SlideWrapper className="items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Animated Workflow</h2>
        <p className="text-xl text-slate-400">Alur data dan notifikasi dalam sistem SINOS</p>
      </div>

      <div className="w-full max-w-5xl flex items-center justify-between relative mt-12 mb-16">
        
        {/* Background Line */}
        <div className="absolute top-10 left-[5%] right-[5%] h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

        {/* Animated Progress Line */}
        <motion.div 
          className="absolute top-10 left-[5%] h-1 bg-blue-500 -translate-y-1/2 z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${(Math.max(0, activeStep - 1) / (steps.length - 1)) * 90}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        ></motion.div>

        {steps.map((step, idx) => {
          const isActive = idx < activeStep;
          const isCurrent = idx === activeStep - 1 || (activeStep === 0 && idx === 0);

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center w-48">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive ? '#3b82f6' : '#1e293b',
                  borderColor: isCurrent ? '#60a5fa' : isActive ? '#3b82f6' : '#334155',
                  scale: isCurrent ? 1.2 : 1,
                  boxShadow: isCurrent ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                }}
                className="w-20 h-20 rounded-full border-4 flex items-center justify-center text-white transition-colors duration-300 z-10"
              >
                {step.icon}
              </motion.div>
              
              <div className={`mt-8 w-full transition-all duration-300 ${isActive || isCurrent ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}>
                <Card className={`border-2 transition-colors duration-300 ${isCurrent ? 'border-blue-500 bg-slate-800/80 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-slate-800 bg-slate-900/50'} shadow-lg backdrop-blur-sm`}>
                  <CardContent className="p-4 text-center flex flex-col justify-center min-h-[100px]">
                    <h4 className={`font-bold text-lg mb-2 transition-colors ${isCurrent ? 'text-blue-400' : 'text-white'}`}>{step.label}</h4>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={togglePlay}
          className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-6 py-2.5 rounded-full font-semibold inline-flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5 text-blue-400" /> Pause Animation
            </>
          ) : (
            <>
              <Play className="w-5 h-5 text-blue-400" /> Play Animation
            </>
          )}
        </button>
      </div>
    </SlideWrapper>
  );
};

export default Workflow;
