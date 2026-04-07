import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CartProvider } from './context/CartContext';
import { Product } from './types';
import { SocialModal } from './components/SocialModal';
import { LegalModal, LegalType } from './components/LegalModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSocial, setSelectedSocial] = useState<'instagram' | 'facebook' | 'linkedin' | null>(null);
  const [selectedLegal, setSelectedLegal] = useState<LegalType>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onProductClick={setSelectedProduct} />;
      case 'products':
        return <Products onProductClick={setSelectedProduct} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact onSocialClick={setSelectedSocial} />;
      default:
        return <Home setCurrentPage={setCurrentPage} onProductClick={setSelectedProduct} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-300">
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
        
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer 
          onSocialClick={setSelectedSocial} 
          onLegalClick={setSelectedLegal}
        />
        
        <CartDrawer />
        
        <AnimatePresence>
          {selectedProduct && (
            <ProductModal 
              product={selectedProduct} 
              onClose={() => setSelectedProduct(null)} 
            />
          )}
        </AnimatePresence>

        <SocialModal 
          platform={selectedSocial} 
          onClose={() => setSelectedSocial(null)} 
        />

        <LegalModal 
          type={selectedLegal} 
          onClose={() => setSelectedLegal(null)} 
        />

        {/* Global Styles for custom fonts if needed */}
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }
          
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
        `}} />
      </div>
    </CartProvider>
  );
}
