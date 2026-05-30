import React, { useState } from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Discussion = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = 'https://KeenaNet.github.io/sinos-web-presentation/';
    
    if (!navigator.clipboard) {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed"; // Prevent scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  return (
    <SlideWrapper className="items-center">
      <h2 className="text-5xl font-bold mb-4 text-center">Terima Kasih</h2>
      <p className="text-2xl text-blue-400 font-light mb-16">Sesi Diskusi & Next Step</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Fokus Diskusi</h3>
            </div>
            <ul className="space-y-4 text-lg text-slate-300">
              <li className="flex gap-3">
                <ArrowRight className="w-6 h-6 text-slate-500 shrink-0" />
                Validasi final asumsi net saving.
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-6 h-6 text-slate-500 shrink-0" />
                Persetujuan pengadaan server n8n lokal vs cloud.
              </li>
              <li className="flex gap-3">
                <ArrowRight className="w-6 h-6 text-slate-500 shrink-0" />
                Jadwal implementasi ke area warehouse lain.
              </li>
            </ul>
          </div>
          
          <div className="mt-12 bg-alert/10 border border-alert/20 p-4 rounded-xl text-alert font-medium text-sm">
            Keputusan dibutuhkan: Go / No-Go untuk fase implementasi penuh bulan depan.
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-500/50 p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://KeenaNet.github.io/sinos-web-presentation/" 
            alt="QR Code" 
            className="w-32 h-32 rounded-xl mb-6 bg-white p-2" 
          />
          
          <h3 className="text-2xl font-bold mb-2">Coba Demo SINOS</h3>
          <p className="text-blue-200 mb-6 max-w-xs">Scan QR code untuk membuka web presentation ini di device Anda.</p>
          
          <button 
            onClick={handleCopyLink}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition-colors w-36"
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Discussion;
