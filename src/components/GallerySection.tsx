import React, { useState } from 'react';
import { Exhibit } from '../types';
import { EXHIBITS_DATA } from '../data/exhibits';
import { MoreVertical, Paintbrush, Download, Share2, Printer, Info, Sparkles, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface GallerySectionProps {
  onOpenStudioWithExhibit: (exhibit: Exhibit) => void;
  onOpenPrintModal: (exhibit: Exhibit) => void;
  onOpenPropertiesModal: (exhibit: Exhibit) => void;
  onOpenShareModal: (exhibit: Exhibit) => void;
  onOpenActivityHub: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenStudioWithExhibit,
  onOpenPrintModal,
  onOpenPropertiesModal,
  onOpenShareModal,
  onOpenActivityHub
}) => {
  const [activeTabCategory, setActiveTabCategory] = useState<string>('Domination');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [unblurredIds, setUnblurredIds] = useState<Record<string, boolean>>({});

  const toggleBlur = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUnblurredIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['Domination', 'Restraint', 'Esoteric', 'Portrait', 'High Difficulty'];

  // Filter exhibits by tab category or show all for that category
  const categoryExhibits = EXHIBITS_DATA.filter(ex => 
    activeTabCategory === 'High Difficulty' ? ex.difficulty === 'Ritual' || ex.difficulty === 'High' : ex.category === activeTabCategory
  );

  // Show only 3 teaser pictures per tab unless expanded (2 on mobile via hidden sm:flex on 3rd item)
  const [showAllInCategory, setShowAllInCategory] = useState(false);
  const displayedExhibits = showAllInCategory ? categoryExhibits : categoryExhibits.slice(0, 3);

  return (
    <section id="gallery-section" className="w-full py-20 px-4 sm:px-8 md:px-16 bg-[#0d0e0f] border-b border-[#2a2a2a] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        


        {/* Uncolored Pictures Box with Header */}
        <div className="bg-[#121414] border-2 border-[#2a2a2a] p-6 sm:p-10 relative">
          <div 
            className="absolute top-0 right-0 bg-[#e50026] text-white font-mono-code text-[10px] uppercase px-3 py-1 font-bold tracking-widest"
            style={{ fontFamily: 'Shanti', fontStyle: 'italic' }}
          >
            Uncolored Archive Plates
          </div>

          <div className="mb-8 text-center flex flex-col items-center space-y-2">
            <div className="inline-flex flex-col items-start text-left max-w-3xl">
              <span 
                className="font-mono-code text-xs text-[#e50026] uppercase tracking-widest block font-bold mb-1"
                style={{ fontFamily: 'Shanti', fontStyle: 'italic' }}
              >
                <span className="text-[#e50026]">NSFW</span> Gallery
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] uppercase tracking-tight">
                Uncolored Line Art
              </h2>
            </div>
            <p className="font-sans text-base text-[#c4c7c7] max-w-3xl leading-relaxed text-center mx-auto">
              Welcome to the gallery archive. Select any uncolored plate below to color within the <span className="text-[#e50026]">NSFW</span> Playground, print at master resolution, or inspect properties.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#2a2a2a] pb-4 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTabCategory(cat);
                  setShowAllInCategory(false);
                }}
                className={`px-4 py-2 font-mono-code text-xs uppercase tracking-widest transition-all ${
                  activeTabCategory === cat
                    ? 'bg-[#e50026] text-white font-bold shadow-lg'
                    : 'bg-[#1b1c1c] text-[#8e9192] hover:text-white border border-[#2a2a2a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pictures Grid (Showing 3 teasers on desktop, 2 on mobile, or all) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedExhibits.map((ex, idx) => {
              const isFirstExhibit = ex.id === EXHIBITS_DATA[0].id;
              const isThirdTeaser = idx === 2 && !showAllInCategory;

              return (
                <div
                  key={ex.id}
                  className={`group relative bg-[#090a0a] border border-[#2a2a2a] overflow-hidden h-[420px] flex-col justify-between p-5 transition-all hover:border-[#e50026] ${
                    isFirstExhibit ? 'nsfw-reveal' : ''
                  } ${isThirdTeaser ? 'hidden sm:flex' : 'flex'}`}
                >
                  {/* Top Bar */}
                  <div className="flex justify-between items-start z-20">
                    <div className="bg-[#1b1c1c] px-3 py-1 border border-[#444748]">
                      <span className="font-mono-code text-xs text-[#e3e2e2] uppercase tracking-wider font-bold">
                        {ex.code}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isFirstExhibit && (
                        <button
                          onClick={(e) => toggleBlur(ex.id, e)}
                          className="bg-[#121414]/90 p-1.5 border border-[#444748] text-[#ffb3ae] hover:text-white"
                          title="Toggle blur"
                        >
                          {unblurredIds[ex.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      )}

                      {/* 3 Dot Options Menu Button */}
                      <div className="relative">
                        <button
                          onClick={() => setOpenMenuId(openMenuId === ex.id ? null : ex.id)}
                          className="p-1.5 bg-[#1b1c1c] border border-[#444748] text-[#e3e2e2] hover:text-[#e50026] transition-colors"
                          title="Options"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {/* Dropdown 3 Dot Menu */}
                        {openMenuId === ex.id && (
                          <div className="absolute right-0 top-8 w-56 bg-[#161818] border border-[#343535] shadow-2xl z-50 py-2 flex flex-col text-left">
                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                onOpenPrintModal(ex);
                              }}
                              className="px-4 py-2.5 text-xs font-mono-code text-[#e3e2e2] hover:bg-[#e50026] hover:text-white flex items-center gap-2.5"
                            >
                              <Printer className="w-3.5 h-3.5" /> Print (Resolution Options)
                            </button>
                            
                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                const link = document.createElement('a');
                                link.href = ex.imageUrl;
                                link.download = `${ex.id}_lineart.png`;
                                link.click();
                              }}
                              className="px-4 py-2.5 text-xs font-mono-code text-[#e3e2e2] hover:bg-[#e50026] hover:text-white flex items-center gap-2.5"
                            >
                              <Download className="w-3.5 h-3.5" /> Save to Hard Drive
                            </button>

                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                onOpenStudioWithExhibit(ex);
                              }}
                              className="px-4 py-2.5 text-xs font-mono-code text-[#e3e2e2] hover:bg-[#e50026] hover:text-white flex items-center gap-2.5"
                            >
                              <Paintbrush className="w-3.5 h-3.5" /> Color on <span className="text-[#e50026]">NSFW</span> Playground
                            </button>

                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                onOpenShareModal(ex);
                              }}
                              className="px-4 py-2.5 text-xs font-mono-code text-[#e3e2e2] hover:bg-[#e50026] hover:text-white flex items-center gap-2.5"
                            >
                              <Share2 className="w-3.5 h-3.5" /> Share (Social / Email)
                            </button>

                            <button
                              onClick={() => {
                                setOpenMenuId(null);
                                onOpenPropertiesModal(ex);
                              }}
                              className="px-4 py-2.5 text-xs font-mono-code text-[#e3e2e2] hover:bg-[#e50026] hover:text-white flex items-center gap-2.5 border-t border-[#2a2a2a]"
                            >
                              <Info className="w-3.5 h-3.5" /> Properties
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Artwork Image */}
                  <img
                    src={ex.imageUrl}
                    alt={ex.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 opacity-90 group-hover:opacity-100 ${
                      isFirstExhibit
                        ? (unblurredIds[ex.id] ? 'nsfw-unblurred scale-105' : 'nsfw-blur')
                        : ''
                    }`}
                  />

                  {/* Overlay Click to Reveal (Only for first exhibit) */}
                  {isFirstExhibit && (
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/30 transition-colors pointer-events-none z-10 ${
                      unblurredIds[ex.id] ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <span className="font-serif-display text-xl text-white uppercase tracking-widest font-bold border-b border-[#e50026] pb-1">
                        Click to Reveal
                      </span>
                    </div>
                  )}

                  {/* Bottom Card Bar */}
                  <div className="relative z-20 mt-auto bg-black/90 p-4 border-t border-[#2a2a2a] flex justify-between items-center">
                    <div>
                      <h4 className="font-serif-display text-base text-white font-bold truncate max-w-[180px]">{ex.title}</h4>
                      <p className="font-mono-code text-[10px] text-[#8e9192]">Difficulty: {ex.difficulty}</p>
                    </div>

                    <button
                      onClick={() => onOpenStudioWithExhibit(ex)}
                      className="px-3 py-1.5 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase font-bold flex items-center gap-1.5"
                    >
                      <Paintbrush className="w-3 h-3" /> Playground
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See All Button */}
          {categoryExhibits.length > 3 && !showAllInCategory && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllInCategory(true)}
                className="px-8 py-3 bg-[#1f2020] hover:bg-[#e50026] text-[#e3e2e2] hover:text-white font-mono-code text-xs uppercase tracking-widest border border-[#444748] transition-all font-bold"
              >
                See All {categoryExhibits.length} Exhibits in {activeTabCategory}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
