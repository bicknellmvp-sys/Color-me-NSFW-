import React from 'react';
import { ArrowRight, BookOpen, ShieldAlert } from 'lucide-react';
import creatorPortrait from '../assets/images/creator_portrait_1786524998826.jpg';

interface ArchitectManifestoProps {
  onOpenManifestoModal: () => void;
}

export const ArchitectManifesto: React.FC<ArchitectManifestoProps> = ({
  onOpenManifestoModal
}) => {
  return (
    <section className="w-full py-24 px-4 sm:px-8 md:px-16 bg-[#0d0e0f] border-b border-[#2a2a2a] relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Creator Portrait Column */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="relative group">
            {/* Outer Subtle Frame */}
            <div className="absolute -inset-4 border border-[#444748] opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image Container */}
            <div className="relative z-10 bg-[#1f2020] p-2 border border-[#2a2a2a] shadow-2xl">
              <img
                src={creatorPortrait}
                alt="The Architect"
                referrerPolicy="no-referrer"
                className="w-full h-auto grayscale contrast-125 filter brightness-90 border border-[#2a2a2a] group-hover:brightness-100 transition-all duration-500"
              />
            </div>

            {/* Crimson Corner Accents from Spec */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#e50026]"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#e50026]"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-7 order-1 md:order-2 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex flex-col items-start text-left">
              <span className="font-mono-code text-xs text-[#e50026] uppercase tracking-widest font-bold block mb-1">
                THE ARCHITECT
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] uppercase leading-tight">
                Behind the <br />
                <span className="italic font-serif text-[#c4c7c7] font-normal">Forbidden Veil</span>
              </h2>
            </div>
          </div>

          <div className="font-sans text-base text-[#c4c7c7] space-y-6 max-w-xl leading-relaxed">
            <p>
              Driven by a fascination with the intersection of high-fashion editorial aesthetics and the occult, the creator of Color Me NSFW crafts each line with surgical precision. Every piece is a meditation on restraint, complexity, and the beauty found in the shadows.
            </p>
            <p>
              With a background in fine arts and a penchant for the provocative, they have redefined the adult coloring experience for those who seek more than just a pastime—they seek a ritual.
            </p>
          </div>

          <div className="pt-8 border-t border-[#2a2a2a]">
            <button
              onClick={onOpenManifestoModal}
              className="inline-flex items-center gap-4 group cursor-pointer focus:outline-none"
            >
              <span className="font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest font-bold group-hover:text-[#e50026] transition-colors">
                Read the Manifesto
              </span>
              <div className="p-2 bg-[#1b1c1c] border border-[#444748] group-hover:border-[#e50026] group-hover:bg-[#e50026] transition-all">
                <ArrowRight className="w-4 h-4 text-[#e50026] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
