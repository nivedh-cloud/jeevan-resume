import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-md border-b border-slate-700 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          JP
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              onClick={(e) => {
                if (item.href.startsWith('#') && item.href !== '#') {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  target?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-lg transition-colors"
                onClick={(e) => {
                  if (item.href.startsWith('#') && item.href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    target?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
