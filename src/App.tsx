import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Opening from './components/sections/Opening';
import TeamGovernance from './components/sections/TeamGovernance';
import CurrentStatus from './components/sections/CurrentStatus';
import RCAFishbone from './components/sections/RCAFishbone';
import Solution from './components/sections/Solution';
import Improvements from './components/sections/Improvements';
import Workflow from './components/sections/Workflow';
import ChatbotDemo from './components/sections/ChatbotDemo';
import Evidence from './components/sections/Evidence';
import KPIDashboard from './components/sections/KPIDashboard';
import KPIDashboard2 from './components/sections/KPIDashboard2';
import ROI from './components/sections/ROI';
import Roadmap from './components/sections/Roadmap';
import Standardization from './components/sections/Standardization';
import Discussion from './components/sections/Discussion';

const slides = [
  { id: 'opening', component: Opening },
  { id: 'team-governance', component: TeamGovernance },
  { id: 'current-status', component: CurrentStatus },
  { id: 'rca', component: RCAFishbone },
  { id: 'solution', component: Solution },
  { id: 'improvements', component: Improvements },
  { id: 'workflow', component: Workflow },
  { id: 'chatbot', component: ChatbotDemo },
  { id: 'evidence', component: Evidence },
  { id: 'kpi', component: KPIDashboard },
  { id: 'kpi-2', component: KPIDashboard2 },
  { id: 'roi', component: ROI },
  { id: 'roadmap', component: Roadmap },
  { id: 'standardization', component: Standardization },
  { id: 'discussion', component: Discussion },
];

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'f') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const CurrentSlide = slides[currentSlideIndex].component;
  const progressPercentage = ((currentSlideIndex + 1) / slides.length) * 100;

  return (
    <div className="w-screen h-screen bg-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Top Bar for Presentation Mode */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={toggleFullscreen}
          className="p-2 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>

      {/* Main Slide Content */}
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <CurrentSlide key={currentSlideIndex} />
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-white/20 absolute bottom-0 left-0 w-full z-50">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      {/* Footer Nav Info */}
      <div className="absolute bottom-4 right-4 z-50 text-xs text-white/50">
        {currentSlideIndex + 1} / {slides.length}
      </div>
    </div>
  );
}

export default App;
