import React, { useState } from 'react';
import { Exhibit } from '../types';
import { X, Share2, Copy, Check, Mail, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  exhibit: Exhibit | null;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ exhibit, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!exhibit) return null;

  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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
            <Share2 className="w-4 h-4" /> Share Masterpiece / Plate
          </div>
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-white uppercase">{exhibit.title}</h3>
            <p className="font-mono-code text-xs text-[#8e9192]">{exhibit.code}</p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=Coloring%20${encodeURIComponent(exhibit.title)}%20on%20Color%20Me%20NSFW&url=${encodeURIComponent(shareUrl)}`, '_blank')}
            className="w-full p-3 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#e50026] font-mono-code text-xs text-white uppercase flex items-center justify-between transition-colors"
          >
            <span>Share to Twitter / X</span>
            <Share2 className="w-4 h-4 text-[#e50026]" />
          </button>

          <button
            onClick={() => window.open(`mailto:?subject=Color Me NSFW - ${exhibit.title}&body=Check out this high-difficulty line art archive: ${shareUrl}`, '_blank')}
            className="w-full p-3 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#e50026] font-mono-code text-xs text-white uppercase flex items-center justify-between transition-colors"
          >
            <span>Share via Email</span>
            <Mail className="w-4 h-4 text-[#e50026]" />
          </button>

          <button
            onClick={() => window.open(`https://api.whatsapp.com/send?text=Coloring%20${encodeURIComponent(exhibit.title)}%20on%20Color%20Me%20NSFW:%20${encodeURIComponent(shareUrl)}`, '_blank')}
            className="w-full p-3 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#e50026] font-mono-code text-xs text-white uppercase flex items-center justify-between transition-colors"
          >
            <span>Share via WhatsApp / Apps</span>
            <MessageCircle className="w-4 h-4 text-[#e50026]" />
          </button>
        </div>

        <div className="space-y-2 pt-2">
          <label className="font-mono-code text-[11px] text-[#8e9192] uppercase block">Direct Link</label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="bg-[#0d0e0f] border border-[#2a2a2a] p-3 text-xs font-mono-code text-[#c4c7c7] w-full"
            />
            <button
              onClick={handleCopy}
              className="px-4 bg-[#e50026] text-white font-mono-code text-xs uppercase font-bold flex items-center gap-1 hover:bg-[#b3001e]"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
