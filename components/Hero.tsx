import React from 'react';
import { Scroll, Star, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-royal-950 text-gold-100 overflow-hidden min-h-[60vh] flex items-center justify-center text-center px-4 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="flex justify-center gap-4 mb-6">
            <Crown className="w-12 h-12 text-gold-400 opacity-80" strokeWidth={1} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold-200 to-gold-600 drop-shadow-sm pb-2">
          Der Verheißene Erlöser
        </h1>
        
        <p className="text-xl md:text-2xl font-body-serif italic text-gold-100/90 max-w-2xl mx-auto leading-relaxed">
          "Erforsche die Herrlichkeit Jesu Christi in über 300 erfüllten Prophezeiungen des Alten Testaments."
        </p>

        <div className="h-px w-32 bg-gold-500/50 mx-auto my-8"></div>

        <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base font-serif tracking-widest uppercase">
           <div className="flex items-center gap-2">
             <Scroll className="w-5 h-5 text-gold-500" />
             <span>Altes Testament</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="text-gold-500">→</span>
             <span>Erfüllung in Christus</span>
           </div>
           <div className="flex items-center gap-2">
             <Star className="w-5 h-5 text-gold-500" />
             <span>Neues Testament</span>
           </div>
        </div>
        
        <p className="text-xs text-royal-100/40 mt-12 font-sans">
            Inspiriert durch die Forschungen von Roger Liebi
        </p>
      </div>
    </div>
  );
};

export default Hero;