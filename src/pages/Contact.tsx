import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

interface ContactProps {
  onSocialClick: (platform: 'instagram' | 'facebook' | 'linkedin') => void;
}

export const Contact: React.FC<ContactProps> = ({ onSocialClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Info */}
        <div className="space-y-16">
          <div className="space-y-8">
            <h1 className="text-6xl font-serif font-bold dark:text-white">Contactez-nous</h1>
            <p className="text-gray-500 dark:text-gray-400 font-light text-xl max-w-md leading-relaxed">
              Une question sur un produit ou un projet de personnalisation ? Notre équipe est à votre écoute.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-start space-x-8">
              <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-black dark:text-white flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Email</h4>
                <p className="text-lg text-gray-500 dark:text-gray-400">contact@eclat-coffret.fr</p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-black dark:text-white flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Téléphone</h4>
                <p className="text-lg text-gray-500 dark:text-gray-400">+221 33 000 00 00</p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-black dark:text-white flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Boutique</h4>
                <p className="text-lg text-gray-500 dark:text-gray-400">Dakar, Sénégal</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Suivez-nous</h4>
            <div className="flex space-x-6">
              <button 
                onClick={() => onSocialClick('instagram')}
                className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all dark:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={() => onSocialClick('facebook')}
                className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all dark:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={() => onSocialClick('linkedin')}
                className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all dark:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 dark:bg-white/5 rounded-3xl p-10 md:p-16 border border-gray-100 dark:border-white/10"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Nom</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-lg dark:text-white"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-lg dark:text-white"
                  placeholder="jean@example.com"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Sujet</label>
              <select className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-lg dark:text-white">
                <option>Demande d'information</option>
                <option>Devis Personnalisation</option>
                <option>Suivi de commande</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea 
                rows={5}
                className="w-full px-6 py-4 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 text-lg dark:text-white"
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-[0.98] text-lg">
              <span>Envoyer le Message</span>
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
