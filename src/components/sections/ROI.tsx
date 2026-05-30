import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import financialData from '../../content/financial.json';
import { TrendingUp, Plus, Minus, Equal, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const formatRp = (num: number) => {
  return "Rp " + (num / 1000000).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + " Jt";
};

const ROI = () => {
  const chartData = [
    { label: 'Benefit Ops', value: financialData.operationalBenefitAnnualIdr, color: 'bg-success', textColor: 'text-success', type: 'positive' },
    { label: 'Downtime', value: financialData.downtimeSavingAnnualIdr, color: 'bg-success', textColor: 'text-success', type: 'positive' },
    { label: 'CAPEX', value: financialData.capexIdr, color: 'bg-alert', textColor: 'text-alert', type: 'negative' },
    { label: 'OPEX', value: financialData.opexAnnualIdr, color: 'bg-alert', textColor: 'text-alert', type: 'negative' },
    { label: 'Net Saving', value: financialData.netSavingAnnualIdr, color: 'bg-blue-500', textColor: 'text-blue-500', type: 'net' }
  ];

  const maxValue = financialData.netSavingAnnualIdr * 1.1; // Add 10% headroom

  return (
    <SlideWrapper>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Financial Impact (ROI)</h2>
        <p className="text-xl text-slate-400">Business case dan estimasi Net Saving per tahun</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full h-[450px]">
        {/* Left Side: Formula View */}
        <div className="flex flex-col gap-4">
          <Card className="bg-slate-800/80 border-slate-700 h-full flex flex-col justify-center shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-slate-200">Perhitungan (Annual)</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center gap-3">
                <div className="w-8 flex justify-center text-slate-500"><Plus className="w-5 h-5" /></div>
                <div className="flex-1 bg-success/10 border border-success/30 rounded-lg p-3 flex justify-between items-center transition-colors hover:bg-success/20">
                  <span className="font-semibold text-slate-300 text-sm">Operational Benefit</span>
                  <span className="font-bold text-success">{formatRp(financialData.operationalBenefitAnnualIdr)}</span>
                </div>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-3">
                <div className="w-8 flex justify-center text-slate-500"><Plus className="w-5 h-5" /></div>
                <div className="flex-1 bg-success/10 border border-success/30 rounded-lg p-3 flex justify-between items-center transition-colors hover:bg-success/20">
                  <span className="font-semibold text-slate-300 text-sm">Downtime Saving</span>
                  <span className="font-bold text-success">{formatRp(financialData.downtimeSavingAnnualIdr)}</span>
                </div>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-3">
                <div className="w-8 flex justify-center text-slate-500"><Minus className="w-5 h-5 text-alert" /></div>
                <div className="flex-1 bg-alert/10 border border-alert/20 rounded-lg p-3 flex justify-between items-center transition-colors hover:bg-alert/20">
                  <span className="font-semibold text-slate-300 text-sm">CAPEX (One-time)</span>
                  <span className="font-bold text-alert">{formatRp(financialData.capexIdr)}</span>
                </div>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-3">
                <div className="w-8 flex justify-center text-slate-500"><Minus className="w-5 h-5 text-alert" /></div>
                <div className="flex-1 bg-alert/10 border border-alert/20 rounded-lg p-3 flex justify-between items-center transition-colors hover:bg-alert/20">
                  <span className="font-semibold text-slate-300 text-sm">OPEX</span>
                  <span className="font-bold text-alert">{formatRp(financialData.opexAnnualIdr)}</span>
                </div>
              </motion.div>

              <div className="w-full h-px bg-slate-700 my-1"></div>

              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-3">
                <div className="w-8 flex justify-center text-blue-400"><Equal className="w-6 h-6" /></div>
                <div className="flex-1 bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-500 rounded-xl p-4 flex justify-between items-center shadow-lg shadow-blue-500/20">
                  <div>
                    <span className="font-bold text-lg text-white block mb-0.5">Net Saving Estimation</span>
                    <span className="text-blue-300 text-[10px] tracking-wide uppercase">Tahun pertama</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-success" />
                    <span className="font-bold text-white text-2xl">{formatRp(financialData.netSavingAnnualIdr)}</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Visual Chart */}
        <div className="flex flex-col gap-4">
          <Card className="bg-slate-800/80 border-slate-700 h-full flex flex-col p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-slate-200">Komparasi Finansial (Juta Rupiah)</h3>
            
            <div className="flex-1 flex items-end justify-around pb-6 pt-10 relative px-4">
              {/* Y Axis Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6 pt-10 px-4">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="border-b border-slate-700/50 w-full relative">
                    <span className="absolute -left-2 -translate-y-1/2 text-[10px] text-slate-500">
                      {Math.round((maxValue - (i * maxValue / 3)) / 1000000)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bars */}
              {chartData.map((item, idx) => (
                <div key={item.label} className="relative flex flex-col items-center gap-2 z-10 w-16">
                  <div className="relative group w-12 flex items-end justify-center h-[250px]">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${(Math.max(item.value, 1500000) / maxValue) * 100}%` }}
                      transition={{ duration: 1, delay: 0.4 + (idx * 0.15) }}
                      className={`w-full ${item.color} rounded-t-md opacity-90 hover:opacity-100 transition-opacity`}
                    >
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold ${item.textColor} whitespace-nowrap z-20`}>
                        {formatRp(item.value)}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* X Axis Label */}
                  <div className="text-center mt-2 h-10">
                    <span className="text-[11px] font-semibold block text-slate-300 leading-tight">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-6">
        <div className="flex items-start gap-2 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
          <Info className="w-4 h-4 text-blue-400 shrink-0" />
          <p>{financialData.displayNote}</p>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default ROI;
