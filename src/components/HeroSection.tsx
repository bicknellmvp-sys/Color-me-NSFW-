import React from 'react';

interface HeroSectionProps {
  onEnterGallery: () => void;
  onOpenStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEnterGallery,
  onOpenStudio
}) => {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-20 border-b border-[#2a2a2a] overflow-hidden bg-[#121414]">
      {/* Background subtle vignette overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#121414]/60 to-[#121414] pointer-events-none"></div>

      <div className="w-full max-w-4xl flex flex-col justify-center items-center relative z-10 text-center">
        {/* Centered Editorial Label Above Heading */}
        <div className="text-xs font-mono-code text-[#e50026] uppercase tracking-widest font-bold text-center mb-4">
          Editorial collections merging classical aesthetics and provocative complexity.
        </div>

        {/* Display Heading */}
        <h1 className="font-serif-display text-5xl sm:text-6xl md:text-8xl font-extrabold text-[#e3e2e2] uppercase tracking-tight leading-[0.95] mb-8">
          Coloring <br />
          <span 
            className="text-[#e50026] tracking-normal drop-shadow-[0_0_25px_rgba(229,0,38,0.3)]"
            style={{ fontFamily: 'Shanti', fontStyle: 'italic' }}
          >
            the Darkness
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#c4c7c7] max-w-2xl mb-12 leading-relaxed border-t border-b border-[#2a2a2a] py-6 px-4">
          An editorial exploration of provocative themes through intricate, high-difficulty line art. Designed for the discerning adult colorist.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={onEnterGallery}
            className="px-8 py-4 bg-[#e50026] text-white font-mono-code text-xs font-bold uppercase tracking-widest hover:bg-[#b3001e] transition-all border border-transparent shadow-[0_0_20px_rgba(229,0,38,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Enter Gallery</span>
          </button>

          <button
            onClick={onOpenStudio}
            className="px-8 py-4 bg-[#1f2020] text-[#e3e2e2] hover:text-white font-mono-code text-xs uppercase tracking-widest hover:bg-[#292a2a] transition-all border border-[#444748] hover:border-[#e50026] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span><span className="text-[#e50026]">NSFW</span> Playground</span>
          </button>
        </div>
      </div>
    </section>
  );
};
