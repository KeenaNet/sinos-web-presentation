import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import roadmapData from '../../content/roadmap.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Flag } from 'lucide-react';

const Roadmap = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <SlideWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Roadmap Implementasi</h2>
        <p className="text-xl text-slate-400">Tahapan improvement berdasarkan prioritas</p>
      </div>

      <div className="max-w-4xl mx-auto w-full relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-700 -translate-x-1/2"></div>

        <div className="flex flex-col gap-8">
          {roadmapData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = activeItem === item.id;

            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <motion.div 
                  className={`w-full md:w-[45%] pl-20 md:pl-0 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <button 
                    onClick={() => setActiveItem(isActive ? null : item.id)}
                    className={`w-full bg-slate-800/80 p-6 rounded-2xl border text-left transition-colors
                      ${isActive ? 'border-blue-500 bg-slate-800' : 'border-slate-700 hover:border-slate-500'}
                    `}
                  >
                    <div className={`flex items-center gap-2 mb-3 text-blue-400 font-semibold ${isLeft ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{item.target}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.improvement}</h3>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-slate-700/50"
                        >
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-slate-500 block">Root Cause</span>
                              <span className="text-slate-300 font-medium">{item.rootCause}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">PIC</span>
                              <span className="text-slate-300 font-medium">{item.pic}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Prioritas</span>
                              <span className={`font-medium ${
                                item.priority === 'Tinggi' ? 'text-alert' : 
                                item.priority === 'Sedang' ? 'text-warning' : 'text-success'
                              }`}>{item.priority}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Roadmap;
