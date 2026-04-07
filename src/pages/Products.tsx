import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

interface ProductsProps {
  onProductClick: (product: any) => void;
}

export const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'all' | 'bijoux' | 'coffrets' | 'emballages'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredProducts = products
    .filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || p.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  const categories = [
    { name: 'Tout', id: 'all' },
    { name: 'Bijoux', id: 'bijoux' },
    { name: 'Coffrets', id: 'coffrets' },
    { name: 'Emballages', id: 'emballages' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-6">
          <h1 className="text-6xl font-serif font-bold dark:text-white">Catalogue</h1>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-lg text-xl leading-relaxed">
            Explorez notre sélection raffinée de produits d'exception, triés sur le volet pour votre satisfaction.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
          <div className="relative flex-1 sm:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all text-lg dark:text-white"
            />
          </div>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="appearance-none px-8 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 cursor-pointer pr-12 text-lg"
            >
              <option value="default">Trier par</option>
              <option value="price-asc">Prix : Croissant</option>
              <option value="price-desc">Prix : Décroissant</option>
            </select>
            <SlidersHorizontal className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id as any)}
            className={`px-8 py-3 rounded-full text-base font-bold transition-all ${
              category === cat.id 
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-xl scale-105' 
                : 'bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductClick(product)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-20 h-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-300 dark:text-gray-600">
            <Search size={32} />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Aucun produit ne correspond à votre recherche.</p>
          <button 
            onClick={() => { setSearch(''); setCategory('all'); setSortBy('default'); }}
            className="text-black dark:text-white font-bold underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};
