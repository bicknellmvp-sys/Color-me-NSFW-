import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Download, Terminal, Sparkles, BookOpen, Star, Coffee } from 'lucide-react';

interface UpcomingReleaseProps {
  onPreviewChapter?: () => void;
  onOpenStudio?: () => void;
  onOpenSupport?: () => void;
}

export const UpcomingRelease: React.FC<UpcomingReleaseProps> = ({ onPreviewChapter, onOpenStudio, onOpenSupport }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full space-y-12 py-12 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-[#2a2a2a] pb-8 flex flex-col items-center text-center justify-center gap-6">
        <div className="space-y-3 flex flex-col items-center">
          <div className="inline-flex flex-col items-center text-center max-w-2xl">
            <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-[#e50026] uppercase tracking-widest font-bold mb-1">
              <Sparkles className="w-4 h-4 text-[#e50026]" /> Documentation
            </div>
            <h1 
              className="font-serif-display font-cinzel text-4xl sm:text-5xl font-bold text-[#e3e2e2] uppercase tracking-tight text-center"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Release Notes
            </h1>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c4c7c7] max-w-2xl leading-relaxed text-center mx-auto">
            Developer changelogs, studio release documentation, and exclusive waitlist access for the upcoming ritual book drops.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          {onOpenSupport && (
            <button
              onClick={onOpenSupport}
              className="px-5 py-2.5 bg-transparent border border-[#444748] hover:bg-white hover:text-black text-[#e3e2e2] transition-all font-mono-code text-xs uppercase tracking-widest font-bold flex items-center gap-2 shrink-0 shadow-md group"
            >
              <Coffee className="w-4 h-4 text-[#e50026] group-hover:text-black transition-colors" />
              <span>Buy me a coffee</span>
            </button>
          )}

          <a
            href="https://github.com/color-me-nsfw/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <Star className="w-4 h-4 fill-current text-white" />
            Star on GitHub
          </a>
        </div>
      </div>

      {/* Main Container: Full width Release Notes Box + Waitlist Box Below */}
      <div className="space-y-12 w-full">
        {/* 1. Release Notes & GitHub README Box (Full Width & Symmetrical) */}
        <div className="w-full bg-[#161818] border border-[#2a2a2a] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col items-center justify-center text-center border-b border-[#2a2a2a] pb-6 gap-3">
            <div className="inline-flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-mono-code text-[#e50026] uppercase tracking-widest font-bold mb-1">
                <Terminal className="w-4 h-4 text-[#e50026]" /> Official Version History
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight text-center">
                Release Notes & GitHub README
              </h3>
            </div>
            <span className="px-3 py-1 bg-[#0d0e0f] border border-[#333] text-xs font-mono-code text-[#e50026] font-bold">
              v2.4.0 — Production
            </span>
          </div>

          <div className="space-y-6 text-xs sm:text-sm font-sans text-[#c4c7c7]">
            {/* Project README Header */}
            <div className="bg-[#0d0e0f] p-5 border border-[#262727] space-y-2 text-center max-w-3xl mx-auto">
              <h4 className="font-mono-code font-bold text-white text-sm uppercase tracking-wider text-[#e50026]">
                # Color me <span className="text-[#e50026]">NSFW</span> — Adult Vector Coloring Studio
              </h4>
              <p className="text-[#8e9192] leading-relaxed">
                Color me <span className="text-[#e50026]">NSFW</span> is a high-precision, interactive digital coloring canvas and print studio built for mature artists. Built with React 18, TypeScript, Vite, motion, and Tailwind CSS.
              </p>
            </div>

            {/* Symmetrical 2-Column Grid inside the Release Notes Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* v2.4.0 Release Changelog */}
              <div className="bg-[#0d0e0f] p-5 border border-[#262727] space-y-3 flex flex-col justify-between">
                <div>
                  <h5 className="font-mono-code font-bold text-white uppercase text-xs tracking-wider border-b border-[#222] pb-2 flex items-center justify-between mb-3">
                    <span>Changelog Highlights (v2.4.0)</span>
                    <span className="text-[#e50026]">[Latest]</span>
                  </h5>
                  <ul className="space-y-2.5 text-xs text-[#8e9192] font-mono-code">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e50026]">•</span>
                      <span><strong className="text-white">SVG Vector Line Art Engine:</strong> Multi-layered SVG fills with zero color bleed and infinite scalability.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e50026]">•</span>
                      <span><strong className="text-white">Custom Palette Builder:</strong> Hex input sliders, custom swatch saving, and local storage state persistence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e50026]">•</span>
                      <span><strong className="text-white">300 DPI Export Suite:</strong> High-resolution PNG image generation and print-ready vector PDF rendering.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e50026]">•</span>
                      <span><strong className="text-white">Cinzel Display Typography:</strong> Classical serif display fonts paired with brutalist dark UI elements.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Developer CLI Setup */}
              <div className="bg-[#0d0e0f] p-5 border border-[#262727] space-y-3 flex flex-col justify-between">
                <div>
                  <h5 className="font-mono-code font-bold text-white uppercase text-xs tracking-wider border-b border-[#222] pb-2 flex items-center justify-between mb-3">
                    <span>Developer Instructions (GitHub Repo)</span>
                    <span className="text-[#8e9192]">npm / vite</span>
                  </h5>
                  <div className="bg-[#121414] p-4 border border-[#2a2a2a] font-mono-code text-[11px] text-[#4af6c6] space-y-2">
                    <div><span className="text-[#8e9192]"># 1. Clone repository & install dependencies</span></div>
                    <div>git clone https://github.com/color-me-nsfw/studio.git</div>
                    <div>npm install</div>
                    <div className="pt-2"><span className="text-[#8e9192]"># 2. Start local development server (Port 3000)</span></div>
                    <div>npm run dev</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Waitlist Box */}
        <div className="w-full bg-[#161818] border border-[#2a2a2a] p-6 sm:p-8 space-y-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center gap-3 border-b border-[#2a2a2a] pb-4">
            <BookOpen className="w-5 h-5 text-[#e50026]" />
            <h2 
              className="font-serif-display font-cinzel text-xl sm:text-2xl font-bold text-[#e3e2e2] uppercase tracking-tight"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Digital Drops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Book Preview Artwork */}
            <div className="md:col-span-5 relative border border-[#2a2a2a] bg-[#0c0c0c] p-3 shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLt9AGoQ9qhXHhQ-5V6Z8VDUVcNYvA_Z8i7ri4nLQ2Tg5UGhdIanp8u8TtsjHmtbA6OND24uvGQ5abGuQwr2TfuAhHj7I1iM5HbliAbztrjdgFwLA246AixTos2z2ow5bBD9vvWgIlcAnKz2PfB-RfkDvT1wzRb7-H9mixLGojRH8vLfew4O2ixCVra0N8qjEre3T1EzYDg-CBdIFCIUrAs2z-v3ftyrnyZBaKbJDbv2rd72bQWD3NRdSw"
                alt="Slave a Demon the Solomonic Way"
                className="w-full h-auto max-h-[320px] object-cover grayscale mix-blend-lighten border border-[#333] mx-auto"
              />
            </div>

            {/* Book Info & Waitlist Form */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#e3e2e2] uppercase leading-tight">
                  Slave a Demon <br />
                  <span className="text-[#c4c7c7] text-xl italic font-serif font-normal">
                    the Solomonic Way
                  </span>
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#8e9192] border-l-2 border-[#e50026] pl-4 py-1 leading-relaxed">
                  A Ritual Coloring Book. High-complexity esoteric designs merging classical demonology with brutalist vector aesthetics.
                </p>
              </div>

              {/* Pure Waitlist Form (No Newsletter) */}
              <div className="pt-2">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="space-y-1">
                      <label className="font-mono-code text-[11px] text-[#e3e2e2] uppercase font-bold tracking-wider">
                        Join the Ritual Waitlist
                      </label>
                      <p className="text-[11px] text-[#8e9192] font-sans">
                        Register your email to receive early access passwords and priority print drops.
                      </p>
                    </div>

                    <div className="flex border border-[#2a2a2a] focus-within:border-[#e50026] transition-colors bg-[#0d0e0f]">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER YOUR EMAIL FOR WAITLIST"
                        className="bg-transparent border-none outline-none text-[#e3e2e2] font-mono-code text-xs p-3.5 w-full placeholder:text-[#8e9192] focus:ring-0"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3.5 bg-[#e50026] hover:bg-[#b3001e] text-white transition-colors border-l border-[#2a2a2a] flex items-center justify-center font-mono-code text-xs font-bold uppercase tracking-wider shrink-0"
                      >
                        Join
                      </button>
                    </div>
                    <span className="text-[10px] font-mono-code text-[#8e9192]">
                      Waitlist members receive an instant 300 DPI vector PDF sample download upon submission.
                    </span>
                  </form>
                ) : (
                  <div className="bg-[#0c0c0c] border border-[#e50026] p-5 text-left space-y-4 animate-in fade-in">
                    <div className="flex items-center gap-2 text-[#ffb3ae] font-mono-code text-xs font-bold uppercase">
                      <CheckCircle2 className="w-4 h-4 text-[#e50026]" /> Waitlist Confirmed
                    </div>
                    <p className="font-sans text-xs text-[#c4c7c7]">
                      Your email (<span className="text-white">{email}</span>) is now reserved in the priority waitlist ledger.
                    </p>
                    {onPreviewChapter && (
                      <button
                        onClick={onPreviewChapter}
                        className="w-full py-2.5 bg-[#e50026] text-white font-mono-code text-xs uppercase font-bold flex items-center justify-center gap-2 hover:bg-[#b3001e] transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download Chapter 1 PDF Sample
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

