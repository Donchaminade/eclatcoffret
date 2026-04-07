import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
          className="relative w-full max-w-5xl bg-white dark:bg-[#111] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all dark:text-white"
          >
            <X size={20} />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-[10px] font-bold uppercase tracking-widest rounded-full text-gray-500 dark:text-gray-400">
                {product.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">{product.name}</h2>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{product.price.toLocaleString()} FCFA</p>
            </div>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-xl">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-gray-100 dark:border-white/10">
              <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                <ShieldCheck size={18} className="text-black dark:text-white" />
                <span>Garantie 2 ans</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                <Truck size={18} className="text-black dark:text-white" />
                <span>Livraison Offerte</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                <RefreshCw size={18} className="text-black dark:text-white" />
                <span>Retours Gratuits</span>
              </div>
            </div>

            <button 
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-[0.98] shadow-xl shadow-black/10"
            >
              <ShoppingCart size={20} />
              <span className="text-lg">Ajouter au Panier</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
