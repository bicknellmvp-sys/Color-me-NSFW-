import React, { useState } from 'react';
import { Check, Compass } from 'lucide-react';

interface NewsletterAndFooterProps {
  onOpenActivityHub?: () => void;
  onNavigateToActivity?: () => void;
  onNavigateToAbout?: () => void;
  hideNewsletter?: boolean;
}

export const NewsletterAndFooter: React.FC<NewsletterAndFooterProps> = ({
  onOpenActivityHub,
  onNavigateToActivity,
  onNavigateToAbout,
  hideNewsletter = false,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* The Ink & Ledger */}
      {!hideNewsletter && (
        <section className="w-full py-24 px-4 sm:px-8 md:px-16 bg-[#0d0e0f] border-t border-b border-[#2a2a2a] relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
            <div className="inline-flex flex-col items-start text-left">
              <div className="text-xs font-mono-code text-[#e50026] uppercase tracking-widest font-bold mb-1">
                Stay Connected
              </div>
              <h2 
                className="font-serif-display font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] uppercase tracking-tight"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                The Ink & Ledger
              </h2>
            </div>
            <p className="font-sans text-base text-[#c4c7c7] max-w-xl mx-auto leading-relaxed text-center">
              Exclusive updates, private release drop passwords, and new vector archives delivered directly to your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="w-full max-w-xl mx-auto flex flex-col sm:flex-row border border-[#2a2a2a] focus-within:border-[#e50026] transition-colors bg-[#121414]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="bg-transparent border-none outline-none text-[#e3e2e2] font-mono-code text-xs p-4 flex-grow placeholder:text-[#8e9192] focus:ring-0"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#e50026] text-white font-mono-code text-xs font-bold uppercase tracking-widest hover:bg-[#b3001e] transition-colors border-l border-[#2a2a2a]"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="p-4 bg-[#1b1c1c] border border-[#e50026] max-w-xl mx-auto text-xs font-mono-code text-[#ffb3ae] uppercase flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-[#e50026]" /> Subscribed to The Ink & Ledger. Welcome.
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="w-full px-4 sm:px-8 md:px-16 py-16 bg-[#0d0e0f] border-t border-[#292a2a] flex flex-col md:flex-row justify-between items-start gap-12 z-10 relative">
        <div className="flex flex-col gap-1 max-w-sm">
          <div 
            className="font-serif-display font-cinzel text-2xl md:text-3xl font-bold text-[#e3e2e2] uppercase tracking-tight"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Color me <span className="text-[#e50026]">NSFW</span>
          </div>
          <div 
            className="text-[9px] leading-[13px] font-shanti text-[#8e9192] uppercase tracking-widest"
            style={{ fontFamily: 'Shanti' }}
          >
            Precision Line Art For Mature Minds
          </div>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest border-b border-[#2a2a2a] pb-2 font-bold">
              Connect
            </span>
            <a href="mailto:architect@color-me-nsfw.com" className="font-sans text-sm text-[#8e9192] hover:text-[#e50026] transition-colors">
              Contact
            </a>
            <a 
              href="https://theleft.one" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-sans text-sm text-[#8e9192] hover:text-[#e50026] transition-colors flex items-center"
            >
              <span className="font-ruthie text-base">the<span className="text-[#E60026]">left</span>.one</span>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest border-b border-[#2a2a2a] pb-2 font-bold">
              Legal
            </span>
            <button className="font-sans text-sm text-[#8e9192] hover:text-[#e50026] transition-colors text-left">
              Privacy Policy
            </button>
            <button className="font-sans text-sm text-[#8e9192] hover:text-[#e50026] transition-colors text-left">
              Terms of Service
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono-code text-xs text-[#e3e2e2] uppercase tracking-widest border-b border-[#2a2a2a] pb-2 font-bold">
              Information
            </span>
            <button
              onClick={() => {
                if (onNavigateToActivity) {
                  onNavigateToActivity();
                } else if (onOpenActivityHub) {
                  onOpenActivityHub();
                }
              }}
              className="font-sans text-sm text-[#8e9192] hover:text-[#e50026] transition-colors text-left"
            >
              Activity
            </button>
            <button
              onClick={() => {
                if (onNavigateToAbout) onNavigateToAbout();
              }}
              className="font-sans text-sm text-[#8e9192] hover:text-[#e50026] transition-colors text-left"
            >
              About the creator
            </button>
          </div>
        </div>

        <div 
          className="w-full md:w-auto pt-8 md:pt-0 border-t border-[#2a2a2a] md:border-none font-mono-code text-xs text-[#8e9192] uppercase tracking-widest leading-relaxed text-center flex flex-col items-center justify-center md:self-end"
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          <span>© 2024 COLOR ME <span className="text-[#e50026]">NSFW</span>.</span>
          <span>All rights reserved Left Hand Products</span>
        </div>
      </footer>
    </>
  );
};
