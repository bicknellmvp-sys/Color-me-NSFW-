import React from 'react';
import { MANIFESTO_TEXT } from '../data/exhibits';
import { X, BookOpen, Sparkles } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121414] border border-[#444748] w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-6 relative shadow-2xl border-l-4 border-l-[#e50026]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8e9192] hover:text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#2a2a2a] pb-4">
          <div className="inline-flex flex-col items-start text-left">
            <span className="font-mono-code text-xs text-[#e50026] uppercase tracking-widest font-bold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Official Publication
            </span>
            <h2 className="font-serif-display text-3xl font-bold text-[#e3e2e2] uppercase">
              The Architect Manifesto
            </h2>
          </div>
          <span className="font-mono-code text-xs text-[#8e9192] block">Color Me NSFW • Architectural Logic in Line Art</span>
        </div>

        {/* Content Body */}
        <div className="font-sans text-sm sm:text-base text-[#c4c7c7] space-y-6 leading-relaxed whitespace-pre-line">
          {MANIFESTO_TEXT}
        </div>

        <div className="pt-6 border-t border-[#2a2a2a] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#e50026] text-white font-mono-code text-xs font-bold uppercase tracking-widest"
          >
            Acknowledge Ritual
          </button>
        </div>
      </div>
    </div>
  );
};
