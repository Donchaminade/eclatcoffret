import React from 'react';
import { X, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer: React.FC = () => {
  const { cart, total, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    const message = cart
      .map((item) => `- ${item.name} (x${item.quantity}): ${(item.price * item.quantity).toLocaleString()} FCFA`)
      .join('\n');
    const fullMessage = `Bonjour, je souhaite commander :\n\n${message}\n\nTotal: ${total.toLocaleString()} FCFA`;
    const whatsappUrl = `https://wa.me/221770000000?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-[#111] z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 dark:border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={20} className="dark:text-white" />
                <h2 className="text-xl font-serif font-bold dark:text-white">Votre Panier</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors dark:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-lg">Votre panier est vide</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-black underline font-medium"
                  >
                    Continuer mes achats
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-bold text-gray-900 dark:text-white">{item.name}</h3>
                          <p className="font-bold dark:text-white">{(item.price * item.quantity).toLocaleString()} FCFA</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.price.toLocaleString()} FCFA / unité</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 dark:border-white/20 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors dark:text-white"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium dark:text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors dark:text-white"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400">Sous-total</span>
                  <span className="text-lg font-medium dark:text-white">{total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl dark:text-white">
                  <span>Total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-[0.98]"
                >
                  <span>Commander via WhatsApp</span>
                  <Send size={18} />
                </button>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                  Paiement sécurisé & Livraison express
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
