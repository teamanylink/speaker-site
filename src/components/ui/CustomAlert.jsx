import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomAlert({ isOpen, onClose, title, message }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative pt-12 pb-6 px-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div 
                className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-lg"
                style={{ backgroundColor: '#95bbc2' }}
              >
                <img 
                  src="/assets/cd3b53582_de-logowhite.png" 
                  alt="Denis Estimon" 
                  className="h-10 w-10"
                />
              </div>
            </div>
            
            {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

            <div className="text-gray-600 mb-8 whitespace-pre-line text-left text-sm leading-relaxed">
              {message}
            </div>

            <button
              onClick={onClose}
              className="w-full bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}