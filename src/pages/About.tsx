import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-32">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 block">L'Art de l'Écrin</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight dark:text-white">
              Sublimer vos <br /> <span className="italic font-light">plus beaux</span> trésors.
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xl font-light leading-relaxed">
            Fondée en 2015 au cœur de Paris, Éclat & Coffret est née d'une passion pour l'artisanat d'exception et le souci du détail. Nous croyons que chaque bijou raconte une histoire, et que son écrin en est le premier chapitre.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-10">
            <div>
              <h4 className="text-5xl font-serif font-bold dark:text-white">10+</h4>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Années d'Expertise</p>
            </div>
            <div>
              <h4 className="text-5xl font-serif font-bold dark:text-white">5k+</h4>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">Clients Satisfaits</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Atelier" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-10 -left-10 bg-white dark:bg-[#111] p-10 rounded-2xl shadow-xl max-w-[280px] hidden md:block border border-gray-100 dark:border-white/10"
          >
            <Sparkles className="text-yellow-500 mb-6" size={32} />
            <p className="text-lg font-medium text-gray-900 dark:text-white italic">"Le luxe n'est pas une question de prix, mais de sensation."</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-20">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-serif font-bold dark:text-white">Nos Valeurs</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light text-xl">Ce qui nous anime au quotidien pour vous offrir le meilleur service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-50 dark:bg-white/5 p-12 rounded-3xl space-y-8 text-center">
            <div className="w-20 h-20 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Award className="text-black dark:text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold dark:text-white">Excellence</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">Nous ne faisons aucun compromis sur la qualité des matériaux et de la finition.</p>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 p-12 rounded-3xl space-y-8 text-center">
            <div className="w-20 h-20 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Users className="text-black dark:text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold dark:text-white">Proximité</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">Un accompagnement personnalisé pour chaque projet, du particulier au professionnel.</p>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 p-12 rounded-3xl space-y-8 text-center">
            <div className="w-20 h-20 bg-white dark:bg-black rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Heart className="text-black dark:text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold dark:text-white">Passion</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">L'amour du métier se reflète dans chacune de nos créations et sélections.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
