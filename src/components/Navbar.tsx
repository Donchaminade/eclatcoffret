import React from 'react';
import { ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isDarkMode, 
  toggleDarkMode 
}) => {
  const { cart, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'Produits', id: 'products' },
    { name: 'À Propos', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-5xl mx-auto bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-3xl shadow-lg transition-all duration-300">
        <div className="px-6 sm:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
                ÉCLAT <span className="text-gray-400 font-light">&</span> COFFRET
              </h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${
                    currentPage === link.id 
                      ? 'text-black dark:text-white border-b-2 border-black dark:border-white pb-1' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 overflow-hidden rounded-b-3xl"
            >
              <div className="px-6 pt-4 pb-8 space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setCurrentPage(link.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left text-xl font-serif font-bold ${
                      currentPage === link.id ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
