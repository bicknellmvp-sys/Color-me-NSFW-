import React from 'react';
import creatorPortrait from '../assets/images/creator_portrait_1786524998826.jpg';

export const AboutCreator: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 sm:px-8 md:px-16 bg-[#0d0e0f] border-b border-[#2a2a2a] relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Creator Portrait Column */}
        <div className="md:col-span-5 order-2 md:order-1 flex flex-col items-center">
          <div className="relative group w-full">
            <div className="absolute -inset-4 border border-[#444748] opacity-30"></div>
            <div className="relative z-10 bg-[#1f2020] p-2 border border-[#2a2a2a] shadow-2xl">
              <img
                src={creatorPortrait}
                alt="About the creator"
                referrerPolicy="no-referrer"
                className="w-full h-auto grayscale contrast-125 filter brightness-90 border border-[#2a2a2a]"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#e50026]"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#e50026]"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-7 order-1 md:order-2 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex flex-col items-start text-left">
              <span 
                className="font-shanti text-xs text-[#e50026] uppercase tracking-widest block italic font-normal mb-1"
                style={{ fontFamily: 'Shanti', fontStyle: 'italic' }}
              >
                About the creator
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] uppercase leading-tight">
                Behind the <br />
                <span className="italic font-serif text-[#c4c7c7] font-normal">Forbidden Veil</span>
              </h2>
            </div>
          </div>

          <div className="font-sans text-base text-[#c4c7c7] space-y-6 max-w-xl leading-relaxed">
            <p>
              As a business major and serial entrepreneur, the creator's goal with <strong className="text-white">Color Me <span className="text-[#e50026]">NSFW</span></strong> is to incorporate a deep fascination with the dark arts and its sometimes rigorous, ritualistic symbolism into high-contrast vector art. Life needs balance and coloring books.
            </p>
            <p>
              When not curating forbidden line art or managing ventures like <a href="https://theleft.one" target="_blank" rel="noopener noreferrer" className="text-[#e50026] hover:underline font-mono-code font-bold">theleft.one</a>, the creator lives happily in Fountain, Colorado with their sister Candace, nephew Noah, and beloved cat Tiger Lily Woods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
