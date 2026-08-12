import React, { useState } from 'react';
import { Exhibit } from '../types';
import { X, Eye, EyeOff, Paintbrush, Download, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface ArtworkLightboxModalProps {
  exhibit: Exhibit | null;
  onClose: () => void;
  onOpenStudio: (exhibit: Exhibit) => void;
}

export const ArtworkLightboxModal: React.FC<ArtworkLightboxModalProps> = ({
  exhibit,
  onClose,
  onOpenStudio
}) => {
  const [unblurred, setUnblurred] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!exhibit) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="bg-[#121414] border border-[#444748] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8e9192] hover:text-white p-2 z-30"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Image View */}
        <div className="md:col-span-7 relative bg-[#0c0c0c] border border-[#2a2a2a] overflow-hidden min-h-[380px] flex items-center justify-center group">
          <img
            src={exhibit.imageUrl}
            alt={exhibit.title}
            className={`w-full h-auto max-h-[600px] object-contain transition-all duration-500 ${
              unblurred ? 'nsfw-unblurred' : 'nsfw-blur'
            }`}
          />

          {/* Reveal Overlay Button */}
          <button
            onClick={() => setUnblurred(!unblurred)}
            className="absolute bottom-4 right-4 bg-[#121414]/90 border border-[#444748] hover:border-[#e50026] text-white px-4 py-2 font-mono-code text-xs uppercase flex items-center gap-2 z-20 shadow-xl"
          >
            {unblurred ? (
              <> <EyeOff className="w-4 h-4 text-[#e50026]" /> Hide Blur </>
            ) : (
              <> <Eye className="w-4 h-4 text-[#e50026]" /> Reveal Content </>
            )}
          </button>
        </div>

        {/* Right Details */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-3">
              <span className="font-mono-code text-xs text-[#e50026] uppercase font-bold">
                {exhibit.code}
              </span>
              <span className="font-mono-code text-[10px] text-[#8e9192] uppercase bg-[#1b1c1c] px-2 py-0.5 border border-[#2a2a2a]">
                Difficulty: {exhibit.difficulty}
              </span>
            </div>

            <h2 className="font-serif-display text-2xl font-bold text-[#e3e2e2] uppercase">
              {exhibit.title}
            </h2>

            <p className="font-sans text-xs text-[#c4c7c7] leading-relaxed">
              {exhibit.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-[#2a2a2a]">
              <div className="flex justify-between font-mono-code text-xs text-[#8e9192]">
                <span>Category:</span>
                <span className="text-white">{exhibit.category}</span>
              </div>
              <div className="flex justify-between font-mono-code text-xs text-[#8e9192]">
                <span>Vector Resolution:</span>
                <span className="text-white">300 DPI (Lossless)</span>
              </div>
              <div className="flex justify-between font-mono-code text-xs text-[#8e9192]">
                <span>Target Medium:</span>
                <span className="text-white">Digital / Ink / Marker</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#2a2a2a]">
            <button
              onClick={() => {
                onClose();
                onOpenStudio(exhibit);
              }}
              className="w-full py-3 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <Paintbrush className="w-4 h-4" /> Open in Digital Studio
            </button>

            <button
              onClick={handleDownload}
              className="w-full py-3 bg-[#1b1c1c] hover:bg-[#292a2a] border border-[#444748] text-[#e3e2e2] font-mono-code text-xs uppercase flex items-center justify-center gap-2"
            >
              {downloaded ? (
                <> <Check className="w-4 h-4 text-[#e50026]" /> Download Started </>
              ) : (
                <> <Download className="w-4 h-4" /> Download Vector PDF / PNG </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
