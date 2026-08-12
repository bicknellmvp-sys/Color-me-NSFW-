import React from 'react';
import { Exhibit } from '../types';
import { X, Info, Shield, Layers, Sliders } from 'lucide-react';

interface PropertiesModalProps {
  exhibit: Exhibit | null;
  onClose: () => void;
}

export const PropertiesModal: React.FC<PropertiesModalProps> = ({ exhibit, onClose }) => {
  if (!exhibit) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121414] border border-[#343535] max-w-md w-full p-6 sm:p-8 relative space-y-6 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8e9192] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex flex-col items-start text-left">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#e50026] uppercase font-bold tracking-widest mb-1">
            <Info className="w-4 h-4" /> Plate Properties & Specifications
          </div>
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-white uppercase">{exhibit.title}</h3>
            <p className="font-mono-code text-xs text-[#8e9192]">{exhibit.code}</p>
          </div>
        </div>

        <div className="space-y-4 font-mono-code text-xs">
          <div className="flex justify-between py-2 border-b border-[#2a2a2a]">
            <span className="text-[#8e9192]">Category</span>
            <span className="text-white uppercase font-bold">{exhibit.category}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-[#2a2a2a]">
            <span className="text-[#8e9192]">Difficulty Rating</span>
            <span className="text-[#e50026] uppercase font-bold">{exhibit.difficulty}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-[#2a2a2a]">
            <span className="text-[#8e9192]">Contour Line Count</span>
            <span className="text-white">1,240 Vector Vectors</span>
          </div>

          <div className="flex justify-between py-2 border-b border-[#2a2a2a]">
            <span className="text-[#8e9192]">Recommended Stroke Width</span>
            <span className="text-white">0.75 pt (Ultra-Fine)</span>
          </div>

          <div className="flex justify-between py-2 border-b border-[#2a2a2a]">
            <span className="text-[#8e9192]">NSFW Classification</span>
            <span className="text-[#ffb3ae]">{exhibit.isNsfw ? 'Restricted / Mature' : 'General Esoteric'}</span>
          </div>
        </div>

        <p className="font-sans text-xs text-[#c4c7c7] leading-relaxed bg-[#0d0e0f] p-4 border border-[#2a2a2a]">
          {exhibit.description}
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase font-bold tracking-widest"
        >
          Close Properties
        </button>
      </div>
    </div>
  );
};
