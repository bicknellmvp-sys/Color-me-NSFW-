import React, { useState } from 'react';
import { Exhibit } from '../types';
import { EXHIBITS_DATA } from '../data/exhibits';
import { Eye, EyeOff, Paintbrush, Download, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface FeaturedArchivesProps {
  onSelectExhibit: (exhibit: Exhibit) => void;
  onOpenStudioWithExhibit: (exhibit: Exhibit) => void;
}

export const FeaturedArchives: React.FC<FeaturedArchivesProps> = ({
  onSelectExhibit,
  onOpenStudioWithExhibit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [unblurredIds, setUnblurredIds] = useState<Record<string, boolean>>({});

  const toggleBlur = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUnblurredIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredExhibits = selectedCategory === 'All'
    ? EXHIBITS_DATA
    : EXHIBITS_DATA.filter(ex => ex.category === selectedCategory);

  const primaryExhibit = EXHIBITS_DATA[0];
  const secondaryExhibits = EXHIBITS_DATA.slice(1, 3);
  const remainingExhibits = EXHIBITS_DATA.slice(3);

  return (
    <section id="gallery-section" className="w-full py-24 px-4 sm:px-8 md:px-16 border-b border-[#2a2a2a] relative">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#2a2a2a] pb-6">
        <div className="inline-flex flex-col items-start text-left">
          <div className="font-mono-code text-xs text-[#e50026] uppercase tracking-widest mb-1 flex items-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> High-Difficulty Archives
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] uppercase tracking-tight">
            Featured Archives
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Domination', 'Restraint', 'Esoteric', 'Portrait'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 font-mono-code text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#e50026] text-white font-bold'
                  : 'bg-[#1b1c1c] text-[#8e9192] hover:text-white border border-[#2a2a2a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Bento Layout matching Spec */}
      {selectedCategory === 'All' ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Large Main Feature (Exh 01) */}
            <div 
              onClick={() => onSelectExhibit(primaryExhibit)}
              className="lg:col-span-8 group relative bg-[#0c0c0c] border border-[#2a2a2a] overflow-hidden nsfw-reveal cursor-pointer h-[500px] sm:h-[600px] flex flex-col justify-between p-6 transition-all hover:border-[#e50026]"
            >
              {/* Top Tag Badge */}
              <div className="flex justify-between items-start z-20">
                <div className="bg-[#343535] px-3.5 py-1.5 border border-[#444748] shadow-lg">
                  <span className="font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest font-bold">
                    {primaryExhibit.code}
                  </span>
                </div>

                <button
                  onClick={(e) => toggleBlur(primaryExhibit.id, e)}
                  className="bg-[#121414]/90 backdrop-blur-md px-3 py-1.5 border border-[#444748] hover:border-[#e50026] text-xs font-mono-code uppercase text-[#ffb3ae] flex items-center gap-1.5 transition-colors"
                >
                  {unblurredIds[primaryExhibit.id] ? (
                    <> <EyeOff className="w-3.5 h-3.5" /> Hide Blur </>
                  ) : (
                    <> <Eye className="w-3.5 h-3.5" /> Reveal </>
                  )}
                </button>
              </div>

              {/* Artwork Image with Blur */}
              <img
                src={primaryExhibit.imageUrl}
                alt={primaryExhibit.title}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 opacity-90 group-hover:opacity-100 ${
                  unblurredIds[primaryExhibit.id] ? 'nsfw-unblurred scale-105' : 'nsfw-blur'
                }`}
              />

              {/* Overlay Prompt Text */}
              <div className={`absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none z-10 ${
                unblurredIds[primaryExhibit.id] ? 'opacity-0' : 'opacity-100'
              }`}>
                <span className="font-serif-display text-2xl sm:text-4xl text-white uppercase tracking-widest font-bold group-hover:scale-110 transition-transform duration-300 drop-shadow-md border-b-2 border-[#e50026] pb-1">
                  Click to Reveal
                </span>
              </div>

              {/* Card Footer Actions on Hover */}
              <div className="relative z-20 mt-auto pt-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-serif-display text-xl text-white font-bold">{primaryExhibit.title}</h3>
                  <p className="font-sans text-xs text-[#c4c7c7]">{primaryExhibit.subtitle}</p>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenStudioWithExhibit(primaryExhibit);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 bg-[#e50026] hover:bg-[#b3001e] text-white text-xs font-mono-code uppercase font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Paintbrush className="w-3.5 h-3.5" /> Color in Studio
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectExhibit(primaryExhibit);
                    }}
                    className="px-3 py-2 bg-[#1b1c1c] hover:bg-[#292a2a] text-[#e3e2e2] text-xs font-mono-code uppercase border border-[#444748]"
                  >
                    Inspect
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Exhibits Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {secondaryExhibits.map((ex) => (
                <div
                  key={ex.id}
                  onClick={() => onSelectExhibit(ex)}
                  className="flex-1 group relative bg-[#0c0c0c] border border-[#2a2a2a] overflow-hidden nsfw-reveal cursor-pointer min-h-[280px] p-4 flex flex-col justify-between transition-all hover:border-[#e50026]"
                >
                  <div className="flex justify-between items-start z-20">
                    <div className="bg-[#343535] px-3 py-1 border border-[#444748]">
                      <span className="font-mono-code text-[11px] text-[#e3e2e2] uppercase tracking-widest font-bold">
                        {ex.code}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleBlur(ex.id, e)}
                      className="bg-[#121414]/80 p-1.5 border border-[#444748] text-[#ffb3ae] hover:text-white"
                      title="Toggle blur"
                    >
                      {unblurredIds[ex.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <img
                    src={ex.imageUrl}
                    alt={ex.title}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 opacity-90 group-hover:opacity-100 ${
                      unblurredIds[ex.id] ? 'nsfw-unblurred' : 'nsfw-blur'
                    }`}
                  />

                  <div className={`absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10 ${
                    unblurredIds[ex.id] ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <span className="font-mono-code text-xs text-white uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300 border-b border-[#e50026] pb-1 font-bold">
                      Reveal
                    </span>
                  </div>

                  <div className="relative z-20 mt-auto bg-black/80 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
                    <span className="font-serif-display text-sm text-white font-bold">{ex.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenStudioWithExhibit(ex);
                      }}
                      className="p-1.5 bg-[#e50026] text-white hover:bg-[#b3001e]"
                      title="Color in Studio"
                    >
                      <Paintbrush className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Grid for remaining Exhibits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {remainingExhibits.map((ex) => (
              <div
                key={ex.id}
                onClick={() => onSelectExhibit(ex)}
                className="group relative bg-[#0c0c0c] border border-[#2a2a2a] overflow-hidden nsfw-reveal cursor-pointer h-72 p-5 flex flex-col justify-between transition-all hover:border-[#e50026]"
              >
                <div className="flex justify-between items-start z-20">
                  <span className="bg-[#343535] px-3 py-1 font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest font-bold">
                    {ex.code}
                  </span>
                  <span className="font-mono-code text-[11px] text-[#e50026] bg-[#121414]/90 px-2.5 py-1 border border-[#2a2a2a]">
                    Difficulty: {ex.difficulty}
                  </span>
                </div>

                <img
                  src={ex.imageUrl}
                  alt={ex.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 opacity-90 group-hover:opacity-100 ${
                    unblurredIds[ex.id] ? 'nsfw-unblurred' : 'nsfw-blur'
                  }`}
                />

                <div className="relative z-20 mt-auto bg-black/85 p-4 flex justify-between items-center border-t border-[#2a2a2a]">
                  <div>
                    <h4 className="font-serif-display text-lg text-white font-bold">{ex.title}</h4>
                    <p className="font-sans text-xs text-[#8e9192] line-clamp-1">{ex.description}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenStudioWithExhibit(ex);
                    }}
                    className="px-3 py-1.5 bg-[#e50026] text-white font-mono-code text-xs uppercase flex items-center gap-1 hover:bg-[#b3001e]"
                  >
                    <Paintbrush className="w-3 h-3" /> Color
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExhibits.map((ex) => (
            <div
              key={ex.id}
              onClick={() => onSelectExhibit(ex)}
              className="group relative bg-[#0c0c0c] border border-[#2a2a2a] overflow-hidden nsfw-reveal cursor-pointer h-96 p-5 flex flex-col justify-between transition-all hover:border-[#e50026]"
            >
              <div className="flex justify-between items-start z-20">
                <span className="bg-[#343535] px-3 py-1 font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest font-bold">
                  {ex.code}
                </span>
                <button
                  onClick={(e) => toggleBlur(ex.id, e)}
                  className="bg-[#121414]/80 p-1.5 border border-[#444748] text-[#ffb3ae] hover:text-white"
                >
                  {unblurredIds[ex.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              <img
                src={ex.imageUrl}
                alt={ex.title}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 opacity-90 group-hover:opacity-100 ${
                  unblurredIds[ex.id] ? 'nsfw-unblurred' : 'nsfw-blur'
                }`}
              />

              <div className="relative z-20 mt-auto bg-black/90 p-4 border-t border-[#2a2a2a]">
                <h4 className="font-serif-display text-lg text-white font-bold">{ex.title}</h4>
                <p className="font-sans text-xs text-[#c4c7c7] mb-3">{ex.subtitle}</p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenStudioWithExhibit(ex);
                    }}
                    className="flex-1 py-1.5 bg-[#e50026] text-white font-mono-code text-xs uppercase font-bold flex items-center justify-center gap-1.5 hover:bg-[#b3001e]"
                  >
                    <Paintbrush className="w-3.5 h-3.5" /> Studio
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectExhibit(ex);
                    }}
                    className="px-3 py-1.5 bg-[#1f2020] text-[#e3e2e2] font-mono-code text-xs uppercase border border-[#444748]"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
