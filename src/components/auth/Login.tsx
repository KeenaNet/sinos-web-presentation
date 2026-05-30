import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'kaizen2026') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center p-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 text-center">Akses Presentasi</h1>
          <p className="text-slate-400 text-center text-sm">Masukkan passcode untuk melanjutkan ke presentasi SINOS.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Passcode"
              className={`w-full bg-slate-900/50 border ${error ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'} rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-center text-lg tracking-widest`}
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mt-2 text-center">Passcode salah, silakan coba lagi.</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors active:scale-95 duration-200"
          >
            Masuk
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>Project Kaizen 2026 &bull; Tim SINOS</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
