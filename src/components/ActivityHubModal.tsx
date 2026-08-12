import React, { useState } from 'react';
import { X, Sparkles, Paintbrush, Printer, CheckCircle, Clock, Archive } from 'lucide-react';

interface ActivityHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ActivityHubModal: React.FC<ActivityHubModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'started' | 'finished' | 'saved' | 'print'>('started');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121414] border border-[#343535] max-w-2xl w-full p-6 sm:p-8 relative space-y-6 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8e9192] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex flex-col items-start text-left">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#e50026] uppercase font-bold tracking-widest mb-1">
            <Sparkles className="w-4 h-4" /> Personal Collector Activity & Print Hub
          </div>
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-white uppercase">Your Archive Ledger</h3>
            <p className="font-sans text-xs text-[#c4c7c7] mt-1">
              Review your started plates, finished masterpieces, saved hard drive exports, and print history logs.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#2a2a2a] pb-4">
          {[
            { id: 'started', label: 'Started / In Progress', icon: Clock },
            { id: 'finished', label: 'Finished Masterpieces', icon: CheckCircle },
            { id: 'saved', label: 'Saved Archives', icon: Archive },
            { id: 'print', label: 'Print Activity', icon: Printer }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 font-mono-code text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#e50026] text-white font-bold'
                    : 'bg-[#1b1c1c] text-[#8e9192] hover:text-white border border-[#2a2a2a]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-[#0d0e0f] border border-[#2a2a2a] p-6 min-h-[260px] flex flex-col justify-center items-center text-center">
          {activeTab === 'started' && (
            <div className="space-y-3 max-w-md">
              <div className="w-12 h-12 bg-[#1b1c1c] border border-[#444748] rounded-full flex items-center justify-center mx-auto text-[#e50026]">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg text-white uppercase font-bold">The Sovereign Throne [EXH. 01]</h4>
              <p className="font-sans text-xs text-[#8e9192]">
                Active session in NSFW Playground. 64% colored with Noir Crimson palette.
              </p>
              <span className="inline-block bg-[#1f2020] px-3 py-1 font-mono-code text-[10px] text-[#ffb3ae] border border-[#2a2a2a]">
                Last edited 10 minutes ago
              </span>
            </div>
          )}

          {activeTab === 'finished' && (
            <div className="space-y-3 max-w-md">
              <div className="w-12 h-12 bg-[#1b1c1c] border border-[#444748] rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg text-white uppercase font-bold">Velvet Bindings [EXH. 02]</h4>
              <p className="font-sans text-xs text-[#8e9192]">
                Successfully completed and archived in high-res vector color.
              </p>
              <span className="inline-block bg-[#1f2020] px-3 py-1 font-mono-code text-[10px] text-emerald-400 border border-[#2a2a2a]">
                Archived yesterday
              </span>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="space-y-3 max-w-md">
              <div className="w-12 h-12 bg-[#1b1c1c] border border-[#444748] rounded-full flex items-center justify-center mx-auto text-amber-400">
                <Archive className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg text-white uppercase font-bold">Basement Protocol [EXH. 03]</h4>
              <p className="font-sans text-xs text-[#8e9192]">
                Exported to hard drive (PNG 300 DPI master file).
              </p>
              <span className="inline-block bg-[#1f2020] px-3 py-1 font-mono-code text-[10px] text-amber-400 border border-[#2a2a2a]">
                Stored locally
              </span>
            </div>
          )}

          {activeTab === 'print' && (
            <div className="space-y-3 max-w-md">
              <div className="w-12 h-12 bg-[#1b1c1c] border border-[#444748] rounded-full flex items-center justify-center mx-auto text-blue-400">
                <Printer className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg text-white uppercase font-bold">First Rule: The Bound Demon [EXH. 04]</h4>
              <p className="font-sans text-xs text-[#8e9192]">
                Printed via 300 DPI High-Res Vector PDF job.
              </p>
              <span className="inline-block bg-[#1f2020] px-3 py-1 font-mono-code text-[10px] text-blue-400 border border-[#2a2a2a]">
                Print Log: SUCCESS
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase font-bold tracking-widest"
        >
          Close Activity Hub
        </button>
      </div>
    </div>
  );
};
