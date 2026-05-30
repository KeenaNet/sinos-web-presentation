import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import financialData from '../../content/financial.json';
import { TrendingUp, Plus, Minus, Equal, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const formatRp = (num: number) => {
  return "Rp " + (num / 1000000).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 }) + " Juta";
};

const ROI = () => {
  return (
    <SlideWrapper>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Financial Impact (ROI)</h2>
        <p className="text-xl text-slate-400">Business case dan estimasi Net Saving per tahun</p>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Waterfall Visualization Concept */}
        <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 mb-8">
          <div className="flex flex-col gap-4">
            
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center gap-4">
              <div className="w-10 flex justify-center text-slate-500"><Plus className="w-6 h-6" /></div>
              <div className="flex-1 bg-success/20 border border-success/30 rounded-xl p-4 flex justify-between items-center">
                <span className="font-semibold text-slate-200">Operational Benefit (Annual)</span>
                <span className="font-bold text-success text-xl">{formatRp(financialData.operationalBenefitAnnualIdr)}</span>
              </div>
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4">
              <div className="w-10 flex justify-center text-slate-500"><Plus className="w-6 h-6" /></div>
              <div className="flex-1 bg-success/20 border border-success/30 rounded-xl p-4 flex justify-between items-center">
                <span className="font-semibold text-slate-200">Downtime Saving (Annual)</span>
                <span className="font-bold text-success text-xl">{formatRp(financialData.downtimeSavingAnnualIdr)}</span>
              </div>
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-4">
              <div className="w-10 flex justify-center text-slate-500"><Minus className="w-6 h-6 text-alert" /></div>
              <div className="flex-1 bg-alert/10 border border-alert/20 rounded-xl p-4 flex justify-between items-center">
                <span className="font-semibold text-slate-200">CAPEX (One-time)</span>
                <span className="font-bold text-alert text-xl">{formatRp(financialData.capexIdr)}</span>
              </div>
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-4">
              <div className="w-10 flex justify-center text-slate-500"><Minus className="w-6 h-6 text-alert" /></div>
              <div className="flex-1 bg-alert/10 border border-alert/20 rounded-xl p-4 flex justify-between items-center">
                <span className="font-semibold text-slate-200">OPEX (Annual)</span>
                <span className="font-bold text-alert text-xl">{formatRp(financialData.opexAnnualIdr)}</span>
              </div>
            </motion.div>
            
            <div className="w-full h-px bg-slate-600 my-2"></div>

            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-4">
              <div className="w-10 flex justify-center text-blue-400"><Equal className="w-8 h-8" /></div>
              <div className="flex-1 bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-500 rounded-2xl p-6 flex justify-between items-center shadow-lg shadow-blue-500/20">
                <div>
                  <span className="font-bold text-2xl text-white block mb-1">Net Saving Estimation</span>
                  <span className="text-blue-300 text-sm">Target tahun pertama operasional</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-success" />
                  <span className="font-bold text-white text-4xl">{formatRp(financialData.netSavingAnnualIdr)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-slate-400 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
          <Info className="w-5 h-5 text-blue-400 shrink-0" />
          <p>{financialData.displayNote}</p>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default ROI;
