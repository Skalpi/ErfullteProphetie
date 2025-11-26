import React from 'react';
import { Info } from 'lucide-react';

const ProbabilityVisualizer: React.FC = () => {
  return (
    <div className="my-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-royal-600 rounded-full blur-[100px] opacity-20"></div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-serif text-gold-400 mb-6">Die mathematische Unmöglichkeit</h2>
            <p className="text-slate-300 mb-6 leading-relaxed font-body-serif text-lg">
                Roger Liebi und Peter Stoner haben berechnet, wie hoch die Wahrscheinlichkeit ist, dass auch nur <strong>8</strong> dieser Prophezeiungen zufällig von einer Person erfüllt werden könnten.
            </p>
            <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                1 : 10<sup className="text-3xl md:text-5xl text-gold-500">17</sup>
            </div>
            <p className="text-slate-400 text-sm mt-4">
                Das ist eine Eins mit 17 Nullen. Um sich das vorzustellen: Man bedecke den Staat Texas (ca. 700.000 km²) 60cm hoch mit Silbermünzen. Man markiere eine einzige Münze. Die Chance, blind beim ersten Versuch genau diese Münze zu ziehen, entspricht der Erfüllung von nur 8 Prophezeiungen.
            </p>
        </div>
        
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
                <Info className="text-gold-500" />
                <h3 className="font-serif text-lg text-gold-100">Jesus erfüllte nicht 8, sondern über 300.</h3>
            </div>
            <div className="space-y-4">
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-500 w-[2%]"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>8 Prophezeiungen</span>
                    <span>300+ Prophezeiungen</span>
                </div>
                 <div className="h-2 bg-slate-700 rounded-full overflow-hidden mt-8">
                    <div className="h-full bg-gradient-to-r from-gold-500 via-yellow-400 to-white w-full animate-pulse"></div>
                </div>
                <p className="text-center text-gold-300 font-serif italic mt-2">
                    "Es ist vollbracht."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityVisualizer;