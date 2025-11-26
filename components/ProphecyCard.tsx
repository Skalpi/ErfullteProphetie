import React from 'react';
import { Prophecy } from '../types';
import { BookOpen, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-stretch">
            {/* Old Testament */}
            <div className="flex flex-col h-full bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                <div className="bg-slate-100/50 p-3 border-b border-slate-200/60 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-gold-700 font-bold font-serif text-sm uppercase">
                        <BookOpen className="w-4 h-4" />
                        Verheißung
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">{prophecy.oldTestament}</span>
                </div>
                <div className="p-5 flex-1 relative flex flex-col justify-center">
                    <Quote className="absolute top-4 left-3 w-4 h-4 text-gold-300 opacity-50 rotate-180" />
                    {prophecy.otText ? (
                        <p className="text-slate-800 text-lg font-body-serif italic leading-relaxed pl-4 border-l-2 border-gold-200/50">
                            {prophecy.otText}
                        </p>
                    ) : (
                        <p className="text-slate-400 text-sm italic">Text wird geladen...</p>
                    )}
                </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center self-center py-2 md:py-0">
                <ArrowRight className="w-6 h-6 text-gold-400 md:rotate-0 rotate-90" />
            </div>

            {/* New Testament */}
             <div className="flex flex-col h-full bg-royal-50/30 rounded-lg border border-royal-100 overflow-hidden">
                <div className="bg-royal-100/30 p-3 border-b border-royal-200/40 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-royal-800 font-bold font-serif text-sm uppercase">
                        <CheckCircle2 className="w-4 h-4" />
                        Erfüllung
                    </div>
                    <span className="text-xs font-bold text-royal-800/60 bg-white px-2 py-0.5 rounded border border-royal-100">{prophecy.newTestament}</span>
                </div>
                <div className="p-5 flex-1 relative flex flex-col justify-center">
                    <Quote className="absolute top-4 left-3 w-4 h-4 text-royal-300 opacity-50 rotate-180" />
                    {prophecy.ntText ? (
                        <p className="text-royal-950 text-lg font-body-serif italic leading-relaxed pl-4 border-l-2 border-royal-200/50">
                            {prophecy.ntText}
                        </p>
                    ) : (
                         <p className="text-slate-400 text-sm italic">Text wird geladen...</p>
                    )}
                </div>
            </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
                {prophecy.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProphecyCard;