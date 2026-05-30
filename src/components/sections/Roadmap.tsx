import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import roadmapData from '../../content/roadmap.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Play, Pause } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev < roadmapData.length - 1 ? prev + 1 : 0));
      }, 3500); // 3.5s delay for each step
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <SlideWrapper>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Roadmap Implementasi</h2>
        <p className="text-xl text-slate-400">Tahapan improvement berdasarkan prioritas</p>
      </div>

      <div className="max-w-4xl mx-auto w-full relative mb-12">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 z-0"></div>
        
        {/* Animated Progress Line */}
        <motion.div 
          className="absolute left-8 md:left-1/2 top-0 w-1 bg-blue-500 -translate-x-1/2 z-0"
          initial={{ height: '0%' }}
          animate={{ height: `${(Math.max(0, activeIndex) / (roadmapData.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        ></motion.div>

        <div className="flex flex-col gap-8">
          {roadmapData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = activeIndex === idx;
            const isPast = idx < activeIndex;

            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={false}
                  animate={{
                    backgroundColor: isActive || isPast ? '#3b82f6' : '#1e293b',
                    borderColor: isActive ? '#60a5fa' : isActive || isPast ? '#3b82f6' : '#334155',
                    scale: isActive ? 1.3 : 1,
                    boxShadow: isActive ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                  className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 -translate-x-1/2 z-10 transition-colors duration-300"
                ></motion.div>

                {/* Content Card */}
                <motion.div 
                  className={`w-full md:w-[45%] pl-20 md:pl-0 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <button 
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsPlaying(false);
                    }}
                    className="w-full text-left focus:outline-none"
                  >
                    <Card className={`border-2 transition-all duration-300 ${isActive ? 'border-blue-500 bg-slate-800/80 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-slate-800 bg-slate-900/50 hover:border-slate-600'} shadow-lg backdrop-blur-sm overflow-hidden`}>
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-2 mb-3 font-semibold transition-colors ${isActive ? 'text-blue-400' : 'text-slate-400'} ${isLeft ? 'md:justify-end' : ''}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{item.target}</span>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>{item.improvement}</h3>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden mt-4 pt-4 border-t border-slate-700/50"
                            >
                              <div className="grid grid-cols-2 gap-4 text-sm text-left">
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
                                    item.priority === 'Tinggi' ? 'text-red-400' : 
                                    item.priority === 'Sedang' ? 'text-yellow-400' : 'text-green-400'
                                  }`}>{item.priority}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
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

export default Roadmap;
