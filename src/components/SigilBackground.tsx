import React from 'react';
import { SigilConfig } from '../types';
import { Sliders, Eye, EyeOff, RotateCw, Sparkles, RefreshCw } from 'lucide-react';

interface SigilBackgroundProps {
  config: SigilConfig;
  onChangeConfig: (newConfig: Partial<SigilConfig>) => void;
  isOpenControl: boolean;
  onToggleControl: () => void;
}

export const LAEVUS_SIGIL_URL = "https://lh3.googleusercontent.com/aida/AP1WRLsfCPslp6WsZ7XpufhkSjRRrdJz_V0HaXnHTuYAqdLm2IHq_6W8mK1JKnLAKBGVP5MYC4nxpkhbFVAHF_tybEUbXC6nUSMMItJUgDDFqAr5Jmy4tkW2Hnr9ohEeNjKG1CNCeOnWRCeO2pU6iJ3J7DfdWRDeE7Y-av_OcMCdlvKiQW8eaQml4Bydn4HN2exyPG8k6F74p5eOHj_hfhMDkYE2ooi_x2J01aGNc0oK2xqtC493AUjwl117wOw";

export const SigilBackground: React.FC<SigilBackgroundProps> = ({
  config,
  onChangeConfig,
  isOpenControl,
  onToggleControl
}) => {
  // Color tint style filter generator
  const getFilterStyle = () => {
    let filter = 'grayscale(100%)';
    if (config.colorTint === 'crimson') {
      filter = 'sepia(100%) hue-rotate(320deg) saturate(600%) brightness(0.8)';
    } else if (config.colorTint === 'gold') {
      filter = 'sepia(100%) hue-rotate(10deg) saturate(400%) brightness(1.1)';
    } else if (config.colorTint === 'cyan') {
      filter = 'sepia(100%) hue-rotate(160deg) saturate(500%) brightness(1.0)';
    }
    return filter;
  };

  const animationClass = config.rotationSpeed === 1 
    ? 'animate-slow-rotate' 
    : config.rotationSpeed === 2 
    ? 'animate-slow-rotate [animation-duration:90s]' 
    : config.rotationSpeed === 3 
    ? 'animate-slow-rotate [animation-duration:45s]' 
    : '';

  return (
    <>
      {/* Background Sigil Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden transition-all duration-700 ease-out"
        style={{ opacity: config.opacity }}
      >
        <div className={`relative transition-transform duration-500 ${config.isPulsing ? 'animate-pulse-glow' : ''}`}>
          <img
            src={LAEVUS_SIGIL_URL}
            alt="Laevus Sigil Background"
            className={`w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] max-w-none object-contain transition-all duration-500 ${animationClass}`}
            style={{
              filter: getFilterStyle(),
              mixBlendMode: config.blendMode as any,
              transform: `scale(${config.scale})`
            }}
          />
        </div>
      </div>

      {/* Sigil Visibility Quick Bar / Drawer Toggle Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {isOpenControl && (
          <div className="bg-[#1b1c1c]/95 backdrop-blur-md border border-[#444748] p-5 shadow-2xl max-w-xs w-72 text-sm text-[#e3e2e2] space-y-4 rounded-none border-l-2 border-l-[#e50026] animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2">
              <span className="font-mono-code text-xs uppercase text-[#ffb3ae] tracking-widest flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#e50026]" /> Sigil Visibility Controls
              </span>
              <button 
                onClick={onToggleControl}
                className="text-[#8e9192] hover:text-white transition-colors"
                title="Close panel"
              >
                ✕
              </button>
            </div>

            {/* Opacity Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono-code">
                <span className="text-[#c4c7c7]">SIGIL OPACITY</span>
                <span className="text-[#e50026] font-bold">{Math.round(config.opacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.02"
                value={config.opacity}
                onChange={(e) => onChangeConfig({ opacity: parseFloat(e.target.value) })}
                className="w-full accent-[#e50026] bg-[#0d0e0f] h-1.5 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8e9192] font-mono-code">
                <span>0% (Hidden)</span>
                <span>15% (Optimal)</span>
                <span>50% (High)</span>
              </div>
            </div>

            {/* Color Tint */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono-code text-[#c4c7c7] block">SIGIL TINT</span>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'silver', label: 'Silver', color: '#c8c6c5' },
                  { id: 'crimson', label: 'Crimson', color: '#e50026' },
                  { id: 'gold', label: 'Gold', color: '#d4af37' },
                  { id: 'cyan', label: 'Void', color: '#0088cc' }
                ].map((tint) => (
                  <button
                    key={tint.id}
                    onClick={() => onChangeConfig({ colorTint: tint.id as any })}
                    className={`py-1 px-1 text-[10px] font-mono-code uppercase text-center border transition-all ${
                      config.colorTint === tint.id 
                        ? 'border-[#e50026] bg-[#e50026]/20 text-white font-bold' 
                        : 'border-[#2a2a2a] text-[#8e9192] hover:border-[#444748]'
                    }`}
                  >
                    <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: tint.color }}></span>
                    {tint.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rotation & Animation */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono-code text-[#c4c7c7] block">ROTATION & PULSE</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onChangeConfig({ rotationSpeed: (config.rotationSpeed + 1) % 4 })}
                  className="flex-1 py-1.5 px-2 bg-[#121414] border border-[#2a2a2a] hover:border-[#444748] text-xs font-mono-code flex items-center justify-center gap-1 text-[#c4c7c7]"
                >
                  <RotateCw className={`w-3 h-3 text-[#e50026] ${config.rotationSpeed > 0 ? 'animate-spin' : ''}`} />
                  {config.rotationSpeed === 0 ? 'Static' : config.rotationSpeed === 1 ? 'Slow' : config.rotationSpeed === 2 ? 'Medium' : 'Fast'}
                </button>

                <button
                  onClick={() => onChangeConfig({ isPulsing: !config.isPulsing })}
                  className={`flex-1 py-1.5 px-2 border text-xs font-mono-code flex items-center justify-center gap-1 ${
                    config.isPulsing 
                      ? 'border-[#e50026] bg-[#e50026]/20 text-white' 
                      : 'bg-[#121414] border-[#2a2a2a] text-[#8e9192]'
                  }`}
                >
                  {config.isPulsing ? 'Pulse: ON' : 'Pulse: OFF'}
                </button>
              </div>
            </div>

            {/* Scale Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono-code">
                <span className="text-[#c4c7c7]">SIGIL SCALE</span>
                <span className="text-[#8e9192]">{Math.round(config.scale * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="1.5"
                step="0.05"
                value={config.scale}
                onChange={(e) => onChangeConfig({ scale: parseFloat(e.target.value) })}
                className="w-full accent-[#e50026] bg-[#0d0e0f] h-1.5 cursor-pointer"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={() => onChangeConfig({
                opacity: 0.12,
                colorTint: 'silver',
                rotationSpeed: 0,
                blendMode: 'lighten',
                scale: 1.0,
                isPulsing: false
              })}
              className="w-full py-1.5 border border-[#444748] hover:bg-[#292a2a] text-xs font-mono-code uppercase tracking-wider text-[#c4c7c7] flex items-center justify-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Reset To Spec Default (12%)
            </button>
          </div>
        )}

        <button
          onClick={onToggleControl}
          className="px-4 py-2.5 bg-[#1f2020] hover:bg-[#292a2a] text-white border border-[#444748] shadow-xl text-xs font-mono-code uppercase tracking-widest flex items-center gap-2 group transition-all"
        >
          <Sliders className="w-4 h-4 text-[#e50026] group-hover:rotate-45 transition-transform" />
          <span>Sigil Fix ({Math.round(config.opacity * 100)}%)</span>
          {config.opacity > 0 ? (
            <Eye className="w-3.5 h-3.5 text-[#ffb3ae]" />
          ) : (
            <EyeOff className="w-3.5 h-3.5 text-[#8e9192]" />
          )}
        </button>
      </div>
    </>
  );
};
