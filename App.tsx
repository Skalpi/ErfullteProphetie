import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProphecyCard from './components/ProphecyCard';
import ProbabilityVisualizer from './components/ProbabilityVisualizer';
import ChatInterface from './components/ChatInterface';
import { INITIAL_PROPHECIES } from './constants';
import { Prophecy, ProphecyCategory } from './types';
import { Search, Plus, Loader2 } from 'lucide-react';
import { fetchMoreProphecies, checkApiKey } from './services/geminiService';

const App: React.FC = () => {
  const [prophecies, setProphecies] = useState<Prophecy[]>(INITIAL_PROPHECIES);
  const [filter, setFilter] = useState<string>('Alle');
  const [search, setSearch] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const hasKey = checkApiKey();

  const categories = ['Alle', ...Object.values(ProphecyCategory)];

  const filteredProphecies = prophecies.filter(p => {
    const matchesCategory = filter === 'Alle' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase()) ||
                          p.oldTestament.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLoadMore = async () => {
    if (filter === 'Alle') {
        alert("Bitte wählen Sie zuerst eine Kategorie (z.B. Leiden), um spezifische weitere Prophezeiungen zu laden.");
        return;
    }
    setLoadingMore(true);
    try {
        const newItems = await fetchMoreProphecies(filter);
        // Transform items to Prophecy objects with IDs
        const newProphecies: Prophecy[] = newItems.map((item: any, index: number) => ({
            ...item,
            id: `gen-${Date.now()}-${index}`,
            category: filter as ProphecyCategory
        }));
        
        setProphecies(prev => [...prev, ...newProphecies]);
    } catch (e) {
        console.error(e);
    } finally {
        setLoadingMore(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-gold-200 selection:text-royal-900">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-4 md:p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-serif tracking-wide transition-all duration-300 ${
                            filter === cat 
                            ? 'bg-royal-900 text-gold-400 shadow-md' 
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="Suche (z.B. Psalm 22)..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none bg-slate-50"
                />
            </div>
        </div>

        {/* List */}
        <div className="grid gap-8">
            {filteredProphecies.map((prophecy) => (
                <ProphecyCard key={prophecy.id} prophecy={prophecy} />
            ))}
            
            {filteredProphecies.length === 0 && (
                <div className="text-center py-20 text-slate-400">
                    <p className="font-serif text-xl">Keine Prophezeiungen gefunden.</p>
                </div>
            )}
        </div>

        {/* Load More AI Trigger */}
        {hasKey && filter !== 'Alle' && (
             <div className="mt-12 flex justify-center">
                <button 
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="group bg-white border border-gold-300 text-gold-700 px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:bg-gold-50 transition-all duration-300 flex items-center gap-3 font-serif text-lg"
                >
                    {loadingMore ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    )}
                    Weitere Prophezeiungen für "{filter}" generieren (AI)
                </button>
            </div>
        )}

        <ProbabilityVisualizer />
        
        <ChatInterface />

      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-20 text-center font-body-serif">
        <p className="mb-4">Soli Deo Gloria</p>
        <p className="text-sm opacity-60">Basierend auf der Zusammenstellung von Roger Liebi: "Der verheißene Erlöser"</p>
      </footer>
    </div>
  );
};

export default App;