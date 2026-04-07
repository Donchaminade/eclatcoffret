import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, ShieldCheck, Scale } from 'lucide-react';

export type LegalType = 'mentions' | 'cgv' | 'privacy' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    mentions: {
      title: 'Mentions Légales',
      icon: <Scale size={32} className="text-gray-400" />,
      sections: [
        {
          title: 'Éditeur du Site',
          text: 'Le présent site est édité par la société Éclat & Coffret, SARL au capital de 10.000.000 FCFA, immatriculée au Registre du Commerce et du Crédit Mobilier de Dakar sous le numéro SN-DKR-2023-B-12345.'
        },
        {
          title: 'Siège Social',
          text: 'Dakar, Sénégal. Email : contact@eclat-coffret.fr | Téléphone : +221 33 000 00 00'
        },
        {
          title: 'Hébergement',
          text: 'Le site est hébergé par Google Cloud Platform, dont le siège social est situé à Mountain View, Californie, États-Unis.'
        },
        {
          title: 'Propriété Intellectuelle',
          text: 'L\'ensemble de ce site relève de la législation internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.'
        }
      ]
    },
    cgv: {
      title: 'Conditions Générales de Vente',
      icon: <FileText size={32} className="text-gray-400" />,
      sections: [
        {
          title: 'Objet',
          text: 'Les présentes CGV régissent les relations contractuelles entre Éclat & Coffret et son client, les deux parties les acceptant sans réserve.'
        },
        {
          title: 'Prix',
          text: 'Les prix sont indiqués en FCFA toutes taxes comprises. Éclat & Coffret se réserve le droit de modifier ses prix à tout moment.'
        },
        {
          title: 'Commande',
          text: 'La validation de la commande via WhatsApp ou le site implique l\'adhésion pleine et entière aux présentes CGV.'
        },
        {
          title: 'Livraison',
          text: 'Les délais de livraison sont donnés à titre indicatif. Éclat & Coffret ne pourra être tenu responsable des retards de livraison dus au transporteur.'
        }
      ]
    },
    privacy: {
      title: 'Politique de Confidentialité',
      icon: <ShieldCheck size={32} className="text-gray-400" />,
      sections: [
        {
          title: 'Collecte des Données',
          text: 'Nous collectons les informations nécessaires au traitement de vos commandes : nom, email, adresse de livraison et numéro de téléphone.'
        },
        {
          title: 'Utilisation des Données',
          text: 'Vos données sont utilisées exclusivement pour la gestion de vos commandes et l\'amélioration de nos services. Nous ne vendons jamais vos données à des tiers.'
        },
        {
          title: 'Sécurité',
          text: 'Nous mettons en œuvre toutes les mesures de sécurité nécessaires pour protéger vos informations personnelles contre tout accès non autorisé.'
        },
        {
          title: 'Vos Droits',
          text: 'Conformément à la loi, vous disposez d\'un droit d\'accès, de rectification et de suppression des données vous concernant.'
        }
      ]
    }
  }[type];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#111] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-8 md:p-10 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-gray-50/50 dark:bg-white/5">
            <div className="flex items-center space-x-5">
              <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/10 text-black dark:text-white">
                {content.icon}
              </div>
              <h2 className="text-3xl font-serif font-bold dark:text-white">{content.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-white dark:bg-black rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all border border-gray-100 dark:border-white/10 dark:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-10 custom-scrollbar">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                  <span className="w-1.5 h-6 bg-black dark:bg-white rounded-full" />
                  <span>{section.title}</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-8 bg-gray-50/50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10 text-center">
            <p className="text-sm text-gray-400 dark:text-gray-500 italic">
              Dernière mise à jour : Avril 2026
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
