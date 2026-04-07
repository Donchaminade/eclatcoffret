import React from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  onProductClick: (product: any) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, onProductClick }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-75 scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block opacity-80">
            L'Excellence du Détail
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Élégance <span className="italic font-light">&</span> <br />
            Personnalisation
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
            Découvrez notre collection exclusive de bijoux fins et de coffrets sur mesure pour sublimer vos moments précieux.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setCurrentPage('products')}
              className="px-10 py-4 bg-white text-black rounded-full font-bold flex items-center space-x-2 hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <span>Explorer le Catalogue</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="px-10 py-4 border border-white/30 backdrop-blur-md text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Notre Histoire
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50"
        >
          <div className="w-px h-12 bg-white mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-black dark:text-white">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold dark:text-white">Qualité Artisanale</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">Chaque pièce est sélectionnée et vérifiée avec le plus grand soin par nos experts.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-black dark:text-white">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold dark:text-white">Garantie & Authenticité</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">Tous nos bijoux sont accompagnés d'un certificat d'authenticité officiel.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-black dark:text-white">
              <Truck size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold dark:text-white">Livraison Express</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">Expédition sécurisée sous 48h dans un emballage de luxe protecteur.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 block">Sélection</span>
            <h2 className="text-5xl font-serif font-bold dark:text-white">Coups de Cœur</h2>
          </div>
          <button 
            onClick={() => setCurrentPage('products')}
            className="text-base font-bold underline underline-offset-8 hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition-colors"
          >
            Voir tout le catalogue
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000" 
              alt="Pattern" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Besoin d'un emballage <br /> professionnel ?</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
              Nous accompagnons les professionnels dans la création d'identités visuelles fortes à travers des packagings personnalisés.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-12 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Demander un Devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
