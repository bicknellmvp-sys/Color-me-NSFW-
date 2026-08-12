import React, { useState } from 'react';
import { Exhibit } from '../types';
import { X, Printer, Download, Check, Sparkles } from 'lucide-react';

interface PrintModalProps {
  exhibit: Exhibit | null;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ exhibit, onClose }) => {
  const [selectedResolution, setSelectedResolution] = useState<'300dpi' | 'a4' | 'letter' | '600dpi'>('300dpi');
  const [printing, setPrinting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!exhibit) return null;

  const handlePrintAction = () => {
    setPrinting(true);
    setTimeout(() => {
      setPrinting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121414] border border-[#343535] max-w-lg w-full p-6 sm:p-8 relative space-y-6 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8e9192] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex flex-col items-start text-left">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#e50026] uppercase font-bold tracking-widest mb-1">
            <Printer className="w-4 h-4" /> Master Print Studio
          </div>
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-white uppercase">{exhibit.title}</h3>
            <p className="font-mono-code text-xs text-[#8e9192]">{exhibit.code}</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="font-mono-code text-xs text-[#c4c7c7] uppercase tracking-wider block font-bold">
            Select Print Resolution & Format
          </label>

          {[
            { id: '300dpi', name: '300 DPI High-Res Vector PDF', desc: 'Optimal for gallery printing and ink transfer' },
            { id: 'a4', name: 'A4 European Standard Print', desc: 'Scaled precisely for standard A4 heavy cardstock' },
            { id: 'letter', name: 'US Letter Standard Archive', desc: 'Scaled for 8.5 x 11 inch ritual folios' },
            { id: '600dpi', name: '600 DPI Master Archive (Uncompressed)', desc: 'Maximum fidelity for archival copperplate printing' }
          ].map((res) => (
            <button
              key={res.id}
              onClick={() => setSelectedResolution(res.id as any)}
              className={`w-full p-4 text-left border transition-all flex items-center justify-between ${
                selectedResolution === res.id
                  ? 'bg-[#1b1c1c] border-[#e50026]'
                  : 'bg-[#0d0e0f] border-[#2a2a2a] hover:border-[#444748]'
              }`}
            >
              <div>
                <div className="font-mono-code text-xs text-white font-bold uppercase">{res.name}</div>
                <div className="font-sans text-xs text-[#8e9192] mt-0.5">{res.desc}</div>
              </div>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                selectedResolution === res.id ? 'border-[#e50026] bg-[#e50026]' : 'border-[#444748]'
              }`}>
                {selectedResolution === res.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-[#2a2a2a] flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-[#1b1c1c] border border-[#2a2a2a] font-mono-code text-xs uppercase text-[#c4c7c7] hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handlePrintAction}
            disabled={printing}
            className="flex-1 py-3 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2"
          >
            {printing ? (
              <>Preparing Master PDF...</>
            ) : success ? (
              <>Print Job Sent <Check className="w-4 h-4 text-white" /></>
            ) : (
              <>Print / Download PDF <Download className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
