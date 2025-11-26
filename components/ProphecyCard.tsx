import React from 'react';
import { Prophecy } from '../types';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProphecyCardProps {
  prophecy: Prophecy;
}

const ProphecyCard: React.FC<ProphecyCardProps> = ({ prophecy }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-1">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex justify-between items-start">
            <span className="inline-block px-3 py-1 text-xs font-serif tracking-widest text-gold-700 bg-gold-50 rounded-full border border-gold-200">
            {prophecy.category}
            </span>
            <CheckCircle2 className="w-5 h-5 text-green-600/60 group-hover:text-green-600 transition-colors" />
        </div>

        <h3 className="text-2xl font-serif text-slate-800 group-hover:text-royal-900 transition-colors">
          {prophecy.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
            {/* Old Testament */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-100 h-full">
                <div className="flex items-center gap-2 text-gold-700 font-bold font-serif text-sm uppercase">
                    <BookOpen className="w-4 h-4" />
                    Verheißung
                </div>
                <div className="text-royal-900 font-semibold">{prophecy.oldTestament}</div>
                {prophecy.otText && (
                    <p className="text-slate-600 text-sm font-body-serif italic leading-relaxed">
                        "{prophecy.otText}"
                    </p>
                )}
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gold-400 md:rotate-0 rotate-90" />
            </div>

            {/* New Testament */}
             <div className="space-y-2 bg-royal-50 p-4 rounded-lg border border-royal-100 h-full">
                <div className="flex items-center gap-2 text-royal-800 font-bold font-serif text-sm uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    Erfüllung
                </div>
                <div className="text-royal-900 font-semibold">{prophecy.newTestament}</div>
                 {prophecy.ntText && (
                    <p className="text-slate-600 text-sm font-body-serif italic leading-relaxed">
                        "{prophecy.ntText}"
                    </p>
                )}
            </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
            <p className="text-slate-700 leading-relaxed">
                {prophecy.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProphecyCard;