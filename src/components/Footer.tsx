import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { LegalType } from './LegalModal';

interface FooterProps {
  onSocialClick: (platform: 'instagram' | 'facebook' | 'linkedin') => void;
  onLegalClick: (type: LegalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSocialClick, onLegalClick }) => {
  return (
    <footer className="bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
              ÉCLAT <span className="text-gray-400 font-light">&</span> COFFRET
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md font-light leading-relaxed text-lg">
              Votre partenaire d'exception pour les bijoux fins, les coffrets de luxe et les emballages personnalisés professionnels.
            </p>
            <div className="flex space-x-5 pt-4">
              <button 
                onClick={() => onSocialClick('instagram')}
                className="w-12 h-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center shadow-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all hover:scale-110 border border-gray-100 dark:border-white/10"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={() => onSocialClick('facebook')}
                className="w-12 h-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center shadow-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all hover:scale-110 border border-gray-100 dark:border-white/10"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={() => onSocialClick('linkedin')}
                className="w-12 h-12 bg-white dark:bg-white/5 rounded-full flex items-center justify-center shadow-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all hover:scale-110 border border-gray-100 dark:border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-5 text-base text-gray-500 dark:text-gray-400">
              <li><button className="hover:text-black dark:hover:text-white transition-colors">Accueil</button></li>
              <li><button className="hover:text-black dark:hover:text-white transition-colors">Catalogue</button></li>
              <li><button className="hover:text-black dark:hover:text-white transition-colors">À Propos</button></li>
              <li><button className="hover:text-black dark:hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-widest text-sm">Légal</h4>
            <ul className="space-y-5 text-base text-gray-500 dark:text-gray-400">
              <li><button onClick={() => onLegalClick('mentions')} className="hover:text-black dark:hover:text-white transition-colors">Mentions Légales</button></li>
              <li><button onClick={() => onLegalClick('cgv')} className="hover:text-black dark:hover:text-white transition-colors">CGV</button></li>
              <li><button onClick={() => onLegalClick('privacy')} className="hover:text-black dark:hover:text-white transition-colors">Politique de Confidentialité</button></li>
              <li><button className="hover:text-black dark:hover:text-white transition-colors">Cookies</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Éclat & Coffret. Tous droits réservés.
          </p>
          <div className="flex space-x-8 text-sm text-gray-400 dark:text-gray-500">
            <span className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-green-500 rounded-full shadow-sm shadow-green-500/50" />
              <span>Service Client Ouvert</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
