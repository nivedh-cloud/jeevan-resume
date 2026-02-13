import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-20">
      <motion.div
        className="text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              JP
            </div>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">P Jeevan Prabhath</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-blue-400 mb-6 font-light">
          Technical Lead – Frontend Developer (React)
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          15+ years of experience building high-performance, responsive web applications using modern technologies. Currently leading UI architecture at Orbcomm.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-12">
          <a href="mailto:prabhath.jeevan@gmail.com" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors">
            View Work
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
