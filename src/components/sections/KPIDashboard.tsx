import React, { useEffect, useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import kpiData from '../../content/kpi.json';

const Counter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

const KPIDashboard = () => {
  return (
    <SlideWrapper>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">KPI Dashboard</h2>
        <p className="text-xl text-slate-400">Dampak Operasional (Baseline vs Target/Estimate)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {kpiData.map((kpi, idx) => (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors relative overflow-hidden"
          >
            {/* Category Badge */}
            <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider text-slate-500">
              {kpi.category}
            </div>
            
            <h3 className="text-lg font-semibold text-slate-200 mb-6">{kpi.label}</h3>
            
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Before</p>
                <p className="text-xl font-bold text-slate-400 line-through decoration-alert/50 decoration-2">{kpi.before}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-400 font-semibold mb-1">Target</p>
                <p className="text-3xl font-bold text-white">{kpi.after}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center">
              <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">Source: {kpi.sourceLabel}</span>
              <span className="text-success font-bold bg-success/10 px-3 py-1 rounded-full text-sm">
                {kpi.improvement}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};

export default KPIDashboard;
