import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Book, Loader2 } from 'lucide-react';
import { generateTheologicalInsight, checkApiKey } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Friede sei mit dir. Ich bin dein Assistent für messianische Prophetie. Hast du Fragen zu Daniel 9, Jesaja 53 oder einer anderen Verheißung?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasKey = checkApiKey();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !hasKey) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await generateTheologicalInsight(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
       setMessages(prev => [...prev, { role: 'model', text: "Ein Fehler ist aufgetreten.", isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!hasKey) return null; // Or show a simplified version

  return (
    <div className="max-w-4xl mx-auto my-16 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-royal-900 p-4 flex items-center gap-3 text-gold-100">
        <Sparkles className="w-5 h-5 text-gold-400" />
        <h3 className="font-serif font-semibold text-lg">Theologischer Assistent (AI)</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
                className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-royal-800 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}
            >
                {msg.role === 'model' && <Book className="w-4 h-4 text-gold-600 mb-2" />}
                <div className="prose prose-sm max-w-none font-body-serif leading-relaxed whitespace-pre-wrap">
                    {msg.text.split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="font-bold text-royal-900">{part}</strong> : part
                    )}
                </div>
            </div>
          </div>
        ))}
        {loading && (
            <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-200 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gold-600" />
                    <span className="text-sm text-slate-500 italic">Analysiere Schriften...</span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex gap-2 relative">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Frage z.B.: Was sagt Psalm 22 über die Kreuzigung?"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent font-body-serif text-lg bg-slate-50"
                disabled={loading}
            />
            <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-royal-800 text-gold-100 px-6 rounded-xl hover:bg-royal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-serif"
            >
                <Send className="w-5 h-5" />
            </button>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center">
            Antworten basieren auf generativer KI und sollten anhand der Bibel geprüft werden.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;