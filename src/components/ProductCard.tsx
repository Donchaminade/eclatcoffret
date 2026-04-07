import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110"
          >
            <Plus size={20} />
          </button>
          <button 
            onClick={onClick}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110"
          >
            <Eye size={20} />
          </button>
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full dark:text-white">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 dark:text-white group-hover:underline cursor-pointer" onClick={onClick}>
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{product.price.toLocaleString()} FCFA</p>
      </div>
    </motion.div>
  );
};
