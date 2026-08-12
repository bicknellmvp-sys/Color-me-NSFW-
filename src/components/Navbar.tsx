import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenSupport: () => void;
  onOpenActivityHub?: () => void;
}

const WHATNOT_STATS = [
  '890 Shares',
  '2.8K Downloads',
  '382h Time Spent',
  '1.4K Completions'
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenSupport,
  onOpenActivityHub
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statIndex, setStatIndex] = useState(0);

  useEffect(() => {
    let count = 0;
    const maxCycles = WHATNOT_STATS.length;
    const interval = setInterval(() => {
      count++;
      setStatIndex((prev) => (prev + 1) % WHATNOT_STATS.length);
      if (count >= maxCycles - 1) {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-[#121414]/90 backdrop-blur-md flex justify-between items-center w-full px-4 sm:px-8 md:px-16 py-5 max-w-none border-b border-[#292a2a] sticky top-0 z-50">
      {/* Brand Title */}
      <button 
        onClick={() => {
          onSelectTab('gallery');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="text-left group focus:outline-none"
      >
        <div 
          className="font-cinzel font-serif-display text-xl sm:text-2xl md:text-3xl font-bold text-[#e3e2e2] uppercase tracking-tight group-hover:text-white transition-colors"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Color me <span className="text-[#e50026]">NSFW</span>
        </div>
        <div 
          className="text-[9px] font-shanti text-[#8e9192] uppercase tracking-widest hidden sm:block"
          style={{ fontFamily: 'Shanti' }}
        >
          Precision Line Art For Mature Minds
        </div>
      </button>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex gap-8 items-center">
        <button
          onClick={() => {
            onSelectTab('gallery');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-mono-code text-xs uppercase tracking-widest transition-all pb-1 ${
            activeTab === 'gallery'
              ? 'text-[#e50026] font-bold border-b-2 border-[#e50026]'
              : 'text-[#c4c7c7] hover:text-white'
          }`}
        >
          Gallery
        </button>

        <button
          onClick={() => {
            onSelectTab('studio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-mono-code text-xs uppercase tracking-widest transition-all pb-1 ${
            activeTab === 'studio'
              ? 'text-[#e50026] font-bold border-b-2 border-[#e50026]'
              : 'text-[#c4c7c7] hover:text-white'
          }`}
        >
          <span className="text-[#e50026]">NSFW</span> Playground
        </button>

        <button
          onClick={() => {
            onSelectTab('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-mono-code text-xs uppercase tracking-widest transition-all pb-1 ${
            activeTab === 'about'
              ? 'text-[#e50026] font-bold border-b-2 border-[#e50026]'
              : 'text-[#c4c7c7] hover:text-white'
          }`}
        >
          About the creator
        </button>

        <button
          onClick={() => {
            onSelectTab('whatnot');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-mono-code text-xs uppercase tracking-widest transition-all pb-1 ${
            activeTab === 'whatnot'
              ? 'text-[#e50026] font-bold border-b-2 border-[#e50026]'
              : 'text-[#c4c7c7] hover:text-white'
          }`}
        >
          <span key={statIndex} className="animate-in fade-in duration-300">
            {WHATNOT_STATS[statIndex]}
          </span>
        </button>

        <a
          href="https://theleft.one"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 flex items-center transition-colors text-[#c4c7c7] hover:text-white"
        >
          <span className="font-ruthie text-base">the<span className="text-[#E60026]">left</span>.one</span>
        </a>
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-3 lg:gap-4">
        <button
          onClick={onOpenSupport}
          className="hidden md:flex px-5 py-2.5 bg-transparent border border-[#444748] hover:bg-white hover:text-black text-[#e3e2e2] transition-all font-mono-code text-xs uppercase tracking-widest items-center group shrink-0"
        >
          <span>Buy me a coffee</span>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#e3e2e2] hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Required Hamburger Options */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#121414]/98 border-b border-[#2a2a2a] p-6 flex flex-col gap-5 z-50 backdrop-blur-xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              onSelectTab('gallery');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left font-mono-code text-sm uppercase tracking-widest py-2 border-b border-[#2a2a2a] ${
              activeTab === 'gallery' ? 'text-[#e50026] font-bold' : 'text-[#e3e2e2]'
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => {
              onSelectTab('studio');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left font-mono-code text-sm uppercase tracking-widest py-2 border-b border-[#2a2a2a] ${
              activeTab === 'studio' ? 'text-[#e50026] font-bold' : 'text-[#e3e2e2]'
            }`}
          >
            <span className="text-[#e50026]">NSFW</span> Playground
          </button>

          <button
            onClick={() => {
              onSelectTab('about');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left font-mono-code text-sm uppercase tracking-widest py-2 border-b border-[#2a2a2a] ${
              activeTab === 'about' ? 'text-[#e50026] font-bold' : 'text-[#e3e2e2]'
            }`}
          >
            About the creator
          </button>

          <button
            onClick={() => {
              onSelectTab('whatnot');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left font-mono-code text-sm uppercase tracking-widest py-2 border-b border-[#2a2a2a] ${
              activeTab === 'whatnot' ? 'text-[#e50026] font-bold' : 'text-[#e3e2e2]'
            }`}
          >
            <span key={statIndex} className="animate-in fade-in duration-300">
              {WHATNOT_STATS[statIndex]}
            </span>
          </button>

          {onOpenActivityHub && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenActivityHub();
              }}
              className="text-left font-mono-code text-sm uppercase tracking-widest py-2 border-b border-[#2a2a2a] text-[#e3e2e2] hover:text-[#e50026] flex items-center justify-between"
            >
              <span>Activity & Print Hub</span>
              <span className="text-xs text-[#e50026]">Open →</span>
            </button>
          )}

          <a
            href="https://theleft.one"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 flex items-center transition-colors text-[#e3e2e2] hover:text-white border-b border-[#2a2a2a]"
          >
            <span className="font-ruthie text-base">the<span className="text-[#E60026]">left</span>.one</span>
          </a>

          {/* Collector & Archive */}
          {onOpenActivityHub && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenActivityHub();
              }}
              className="text-left font-mono-code text-sm uppercase tracking-widest py-3 px-4 bg-[#1b1c1c] border border-[#e50026] text-white hover:bg-[#e50026] transition-colors flex items-center justify-between font-bold"
            >
              <span>Collector & Archive</span>
              <span className="text-xs text-[#ffb3ae]">Open Hub →</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
