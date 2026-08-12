import React, { useState } from 'react';
import { SUPPORT_TIERS } from '../data/exhibits';
import { SupportTier } from '../types';
import { X, Check, Heart, Shield, Sparkles } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<SupportTier | null>(SUPPORT_TIERS[1]);
  const [pledgeComplete, setPledgeComplete] = useState(false);

  if (!isOpen) return null;

  const handlePledge = () => {
    setPledgeComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121414] border border-[#444748] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative shadow-2xl border-t-4 border-t-[#e50026]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8e9192] hover:text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#2a2a2a] pb-4">
          <div className="inline-flex flex-col items-start text-left">
            <div className="font-mono-code text-xs text-[#e50026] uppercase tracking-widest flex items-center gap-1.5 font-bold mb-1">
              <Heart className="w-4 h-4" /> Support The Studio
            </div>
            <h2 className="font-serif-display text-3xl font-bold text-[#e3e2e2] uppercase">
              Become a Patron of the Shadows
            </h2>
          </div>
          <p className="font-sans text-sm text-[#c4c7c7]">
            Your support funds continuous high-difficulty line art production, physical heavy-stock printing, and vector archiving.
          </p>
        </div>

        {!pledgeComplete ? (
          <>
            {/* Tier Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SUPPORT_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`p-5 border cursor-pointer flex flex-col justify-between transition-all relative ${
                    selectedTier?.id === tier.id
                      ? 'bg-[#1b1c1c] border-[#e50026] shadow-lg'
                      : 'bg-[#0d0e0f] border-[#2a2a2a] hover:border-[#444748]'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-4 bg-[#e50026] text-white px-2 py-0.5 text-[9px] font-mono-code uppercase font-bold tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <div className="space-y-3">
                    <div className="font-serif-display text-lg font-bold text-white uppercase">{tier.name}</div>
                    <div className="font-mono-code text-2xl font-bold text-[#e50026]">{tier.price}</div>
                    <p className="font-sans text-xs text-[#8e9192] leading-relaxed">{tier.description}</p>

                    <ul className="space-y-2 pt-3 border-t border-[#2a2a2a]">
                      {tier.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-sans text-xs text-[#c4c7c7]">
                          <Check className="w-3.5 h-3.5 text-[#e50026] shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full mt-6 py-2.5 font-mono-code text-xs uppercase tracking-wider font-bold transition-all ${
                      selectedTier?.id === tier.id
                        ? 'bg-[#e50026] text-white'
                        : 'bg-[#121414] text-[#8e9192] border border-[#2a2a2a]'
                    }`}
                  >
                    {selectedTier?.id === tier.id ? 'Selected' : 'Choose Tier'}
                  </button>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs font-mono-code text-[#8e9192] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#e50026]" /> Cancel anytime. Instant download keys granted.
              </div>

              <button
                onClick={handlePledge}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs font-bold uppercase tracking-widest transition-all shadow-xl"
              >
                Pledge {selectedTier?.price} Now
              </button>
            </div>
          </>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#e50026]/20 border border-[#e50026] rounded-full flex items-center justify-center mx-auto text-[#e50026]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-white uppercase">
              Pledge Confirmed in Grimoire
            </h3>
            <p className="font-sans text-sm text-[#c4c7c7] max-w-md mx-auto">
              Thank you for supporting <span className="text-white font-bold">{selectedTier?.name}</span>. Access keys to vector PDF archives have been dispatched.
            </p>
            <button
              onClick={() => {
                setPledgeComplete(false);
                onClose();
              }}
              className="px-8 py-3 bg-[#1f2020] border border-[#444748] text-white font-mono-code text-xs uppercase tracking-widest"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
