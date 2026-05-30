import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, FileSpreadsheet, Server, RefreshCw, MessageSquare, Mail } from 'lucide-react';

const steps = [
  { id: 'source', label: 'Data Source', icon: <FileSpreadsheet className="w-8 h-8" />, desc: 'Email / SAP / Excel' },
  { id: 'n8n', label: 'Processing', icon: <RefreshCw className="w-8 h-8" />, desc: 'n8n Automation' },
  { id: 'db', label: 'Storage', icon: <Server className="w-8 h-8" />, desc: 'PostgreSQL' },
  { id: 'alert', label: 'Notification', icon: <MessageSquare className="w-8 h-8" />, desc: 'WhatsApp & Email' }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep(prev => (prev < steps.length ? prev + 1 : 0));
  };

  return (
    <SlideWrapper className="items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Animated Workflow</h2>
        <p className="text-xl text-slate-400">Alur data dan notifikasi dalam sistem SINOS</p>
      </div>

      <div className="w-full max-w-5xl flex items-center justify-between relative mt-8">
        
        {/* Background Line */}
        <div className="absolute top-1/2 left-[5%] right-[5%] h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

        {/* Animated Progress Line */}
        <motion.div 
          className="absolute top-1/2 left-[5%] h-1 bg-blue-500 -translate-y-1/2 z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${(Math.max(0, activeStep - 1) / (steps.length - 1)) * 90}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        ></motion.div>

        {steps.map((step, idx) => {
          const isActive = idx < activeStep;
          const isCurrent = idx === activeStep - 1 || (activeStep === 0 && idx === 0);

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive ? '#3b82f6' : '#1e293b',
                  borderColor: isCurrent ? '#60a5fa' : isActive ? '#3b82f6' : '#334155',
                  scale: isCurrent ? 1.2 : 1,
                  boxShadow: isCurrent ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                }}
                className="w-20 h-20 rounded-full border-4 flex items-center justify-center text-white transition-colors duration-300"
              >
                {step.icon}
              </motion.div>
              
              <div className={`mt-6 text-center transition-opacity duration-300 ${isActive || isCurrent ? 'opacity-100' : 'opacity-40'}`}>
                <h4 className="font-bold text-lg">{step.label}</h4>
                <p className="text-sm text-slate-400 w-32">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 text-center">
        <button 
          onClick={nextStep}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          {activeStep >= steps.length ? 'Reset Animation' : 'Next Step'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </SlideWrapper>
  );
};

export default Workflow;
