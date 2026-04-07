import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';

interface SocialModalProps {
  platform: 'instagram' | 'facebook' | 'linkedin' | null;
  onClose: () => void;
}

export const SocialModal: React.FC<SocialModalProps> = ({ platform, onClose }) => {
  if (!platform) return null;

  const content = {
    instagram: {
      title: 'Instagram',
      icon: <Instagram size={40} className="text-pink-500" />,
      handle: '@eclat_coffret',
      description: 'Découvrez nos dernières créations, coulisses et inspirations quotidiennes.',
      url: 'https://instagram.com',
      color: 'from-purple-500 via-pink-500 to-orange-500'
    },
    facebook: {
      title: 'Facebook',
      icon: <Facebook size={40} className="text-blue-600" />,
      handle: 'Éclat & Coffret Officiel',
      description: 'Rejoignez notre communauté pour ne rien manquer de nos événements et offres exclusives.',
      url: 'https://facebook.com',
      color: 'from-blue-600 to-blue-400'
    },
    linkedin: {
      title: 'LinkedIn',
      icon: <Linkedin size={40} className="text-blue-700" />,
      handle: 'Éclat & Coffret',
      description: 'Suivez notre actualité professionnelle et nos solutions de packaging sur mesure pour entreprises.',
      url: 'https://linkedin.com',
      color: 'from-blue-800 to-blue-600'
    }
  }[platform];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-[#111] rounded-[2.5rem] overflow-hidden shadow-2xl p-10 md:p-12 border border-gray-100 dark:border-white/10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-gray-50 dark:bg-white/5 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all dark:text-white"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center text-center space-y-8">
            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${content.color} p-0.5 shadow-xl`}>
              <div className="w-full h-full bg-white dark:bg-black rounded-[1.4rem] flex items-center justify-center">
                {content.icon}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold dark:text-white">{content.title}</h2>
              <p className="text-xl font-bold text-gray-400 dark:text-gray-500">{content.handle}</p>
              <p className="text-gray-500 dark:text-gray-400 font-light text-lg leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="w-full pt-4">
              <a 
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-[1.02] transition-all active:scale-[0.98] shadow-xl shadow-black/10"
              >
                <span>Visiter le profil</span>
                <ExternalLink size={20} />
              </a>
            </div>

            <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              Rejoignez plus de 5,000 abonnés
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
