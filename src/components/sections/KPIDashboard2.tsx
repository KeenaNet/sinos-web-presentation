import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import kpiData from '../../content/kpi.json';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Clock, Search, ShieldAlert, Zap } from 'lucide-react';

const KPIDashboard2 = () => {
  // Use count metrics (Reliabilitas & Biaya)
  const countMetrics = kpiData.filter(k => k.category !== 'Kecepatan');

  // Find max value for chart scaling
  const maxCountValue = Math.max(
    ...countMetrics.flatMap(k => {
      const b = parseInt(k.before.split('–')[1] || k.before.split('–')[0]);
      return [b];
    })
  ) + 2;

  const parseValue = (val: string) => {
    const parts = val.split('–');
    if (parts.length > 1) {
      return (parseInt(parts[0]) + parseInt(parts[1])) / 2;
    }
    return parseInt(val);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'recap_time': return <Clock className="w-6 h-6" />;
      case 'part_search': return <Search className="w-6 h-6" />;
      case 'stockout': return <ShieldAlert className="w-6 h-6" />;
      case 'pending_gi': return <Clock className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <SlideWrapper>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">KPI Dashboard (Lanjutan)</h2>
        <p className="text-xl text-slate-400">Dampak Operasional: Penurunan Kasus & Antrean (Bulanan)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto lg:h-[500px]">
        
        {/* Left Column: Highlight Cards */}
        <div className="flex flex-col gap-4">
          {countMetrics.map((kpi, idx) => (
            <motion.div key={kpi.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="flex-1">
              <Card className="bg-slate-800/80 border-slate-700 h-full flex flex-col justify-center relative overflow-hidden shadow-lg transition-colors hover:border-blue-500/50">
                <div className="absolute -bottom-4 -right-4 opacity-5 text-slate-100 scale-[2.5]">
                  {getIcon(kpi.id)}
                </div>
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-lg text-slate-200 flex items-center gap-2">
                    {getIcon(kpi.id)} {kpi.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Sebelum</p>
                      <p className="text-sm font-semibold text-slate-400 line-through decoration-red-500/50">{kpi.before}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-blue-400 font-semibold mb-1">Target</p>
                      <p className="text-2xl font-bold text-white">{kpi.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-between items-center relative z-10">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{kpi.category}</span>
                    <span className="text-success font-bold bg-success/10 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      {kpi.improvement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Middle Column: Bar Chart for Quantitative Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 flex flex-col gap-6">
          <Card className="bg-slate-800/80 border-slate-700 flex-1 flex flex-col p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-slate-200">Grafik Penurunan Kasus</h3>
            
            <div className="overflow-x-auto pb-4">
              <div className="flex-1 flex flex-col relative mt-4 min-w-[500px] md:min-w-0">
              {/* Chart Area (Grid + Bars) */}
              <div className="flex-1 relative flex items-end justify-evenly pt-10 pb-2 ml-8">
                {/* Y Axis Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pt-10">
                  {[0, 1, 2, 3, 4].map(i => (
                    <div key={i} className="border-b border-slate-700/50 w-full relative">
                      <span className="absolute -left-8 -translate-y-1/2 text-xs text-slate-500">
                        {Math.round(maxCountValue - (i * maxCountValue / 4))}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bars */}
                {countMetrics.map((kpi, idx) => {
                  const beforeVal = parseValue(kpi.before);
                  const afterVal = parseValue(kpi.after);
                  
                  return (
                    <div key={kpi.id} className="relative flex items-end justify-center gap-2 md:gap-3 h-full z-10 flex-1">
                      {/* Before Bar */}
                      <div className="relative group w-8 sm:w-10 md:w-12 flex items-end justify-center h-full">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.max(2, (beforeVal / maxCountValue) * 100)}%` }}
                          transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                          className="w-full bg-slate-600 rounded-t-md hover:bg-slate-500 transition-colors"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold text-slate-300 whitespace-nowrap">
                            {kpi.before}
                          </div>
                        </motion.div>
                      </div>

                      {/* After Bar */}
                      <div className="relative group w-8 sm:w-10 md:w-12 flex items-end justify-center h-full">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.max(2, (afterVal / maxCountValue) * 100)}%` }}
                          transition={{ duration: 1, delay: 0.8 + (idx * 0.2) }}
                          className="w-full bg-blue-500 rounded-t-md hover:bg-blue-400 transition-colors"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold text-blue-300 whitespace-nowrap">
                            {kpi.after}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* X Axis Area */}
              <div className="flex justify-evenly mt-4 ml-8">
                {countMetrics.map((kpi) => (
                  <div key={kpi.id} className="flex-1 px-1 text-center flex flex-col justify-start">
                    <span className="text-xs md:text-sm font-semibold block text-slate-300 whitespace-normal leading-tight">{kpi.label}</span>
                    <span className="text-[10px] md:text-xs text-success font-bold mt-1 block">{kpi.improvement}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-8 mt-6 pt-4 border-t border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-slate-600 rounded"></div>
                <span className="text-sm text-slate-400">Sebelum</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-slate-400">Target / Estimasi</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};

export default KPIDashboard2;
