import React from 'react';
import { SlideWrapper } from '../layout/SlideWrapper';
import { motion } from 'framer-motion';
import { User, Shield, Star, Award } from 'lucide-react';

const TeamGovernance = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        type: 'spring', 
        bounce: 0.4 
      } 
    }
  };

  const teamMembers = [
    {
      name: "Ahmad Muhidin",
      role: "Pelaksana",
      task: "Merumuskan masalah operasional, narasi bisnis, dan rekomendasi implementasi.",
      icon: <User className="w-8 h-8 text-blue-400" />,
      color: "from-blue-900/40 to-blue-800/40",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Zian Rhafi S.",
      role: "Pelaksana",
      task: "Memastikan solusi sesuai kebutuhan operasional dan standar proses warehouse dilapangan.",
      icon: <User className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-900/40 to-indigo-800/40",
      borderColor: "border-indigo-500/30"
    },
    {
      name: "Wuryanto",
      role: "Mentor",
      task: "Memvalidasi kondisi lapangan, workflow pencarian part, dan kesiapan pengguna.",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      color: "from-purple-900/40 to-purple-800/40",
      borderColor: "border-purple-500/30"
    },
    {
      name: "Irawan Widhiatmoko",
      role: "Promotor",
      task: "Memberikan arahan teknis serta memastikan penggunaan SINOS berjalan konsisten.",
      icon: <Award className="w-8 h-8 text-amber-400" />,
      color: "from-amber-900/40 to-amber-800/40",
      borderColor: "border-amber-500/30"
    }
  ];

  return (
    <SlideWrapper>
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          TEAM & GOVERNANCE
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Tim lintas fungsi memastikan solusi relevan untuk operasional. Peran tim menghubungkan kebutuhan warehouse, validasi lapangan, dan arahan implementasi SINOS.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-gradient-to-br ${member.color} p-8 rounded-2xl border ${member.borderColor} flex flex-col items-center text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
            
            <div className="bg-slate-900/50 p-4 rounded-full mb-6 ring-1 ring-white/10 shadow-lg">
              {member.icon}
            </div>
            
            <div className="h-16 flex items-center justify-center mb-2">
              <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
            </div>
            <div className="bg-white/10 px-4 py-1.5 rounded-full mt-2 mb-4">
              <p className="text-sm font-medium tracking-wide uppercase text-slate-300">
                {member.role}
              </p>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {member.task}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};

export default TeamGovernance;
