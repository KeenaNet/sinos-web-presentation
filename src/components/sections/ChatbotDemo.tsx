import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Check, Smartphone } from 'lucide-react';
import chatbotData from '../../content/chatbot.json';

const ChatbotDemo = () => {
  const [activeQuery, setActiveQuery] = useState<number | null>(null);

  return (
    <SlideWrapper>
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">SSKA Chatbot Demo</h2>
        <p className="text-xl text-slate-400">Simulasi interaksi pencarian sparepart via WhatsApp</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto w-full">
        {/* Left: Query Triggers */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-slate-300 mb-2">Pilih Contoh Pertanyaan:</h3>
          {chatbotData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveQuery(idx)}
              className={`text-left p-4 rounded-xl border transition-all ${activeQuery === idx ? 'bg-blue-600/20 border-blue-500' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`}
            >
              <span className="block font-medium">"{item.question}"</span>
            </button>
          ))}
          <div className="mt-8 bg-slate-800/50 p-4 rounded-lg text-sm text-slate-400 border border-slate-700">
            <strong>Catatan:</strong> Data disamarkan (dummy) untuk keamanan operasional presentasi.
          </div>
        </div>

        {/* Right: Phone Simulator */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="w-full max-w-sm bg-[#ece5dd] rounded-[2.5rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden relative h-[500px] flex flex-col">
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] text-white p-4 flex items-center gap-3 shadow-md z-10">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">SSKA Bot</div>
                <div className="text-xs text-white/70">Online</div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 relative">
              <div className="absolute inset-0 opacity-10 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover mix-blend-overlay"></div>
              
              <AnimatePresence mode="wait">
                {activeQuery !== null ? (
                  <motion.div
                    key={activeQuery}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4 relative z-10 w-full"
                  >
                    {/* User Message */}
                    <div className="self-end bg-[#dcf8c6] text-[#303030] p-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                      <p className="text-sm">{chatbotData[activeQuery].question}</p>
                      <div className="flex justify-end items-center gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">Just now</span>
                        <Check className="w-3 h-3 text-[#34B7F1]" />
                      </div>
                    </div>

                    {/* Bot Typing Indicator */}
                    <motion.div 
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 0.6, duration: 0.2 }}
                      className="self-start bg-white text-[#303030] p-3 rounded-2xl rounded-tl-sm shadow-sm"
                    >
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </motion.div>

                    {/* Bot Response */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="self-start bg-white text-[#303030] p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm"
                    >
                      <div className="text-sm whitespace-pre-wrap font-mono">
                        {JSON.stringify(chatbotData[activeQuery].response, null, 2).replace(/["{}]/g, '')}
                      </div>
                      <div className="flex justify-end items-center mt-1">
                        <span className="text-[10px] text-gray-500">Just now</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <div className="bg-white/50 backdrop-blur px-4 py-2 rounded-full text-xs text-slate-600 font-medium text-center shadow-sm">
                      Pilih pertanyaan untuk memulai simulasi
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Input Area Fake */}
            <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 z-10 mt-auto">
              <div className="flex-1 bg-white rounded-full py-2 px-4 text-sm text-gray-400">Ketik pesan...</div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default ChatbotDemo;
