import React from 'react';
import { BarChart3, Clock, Download, Share2, CheckCircle2, Layers, Cpu, Flame, Trophy, Eye, Sparkles, Terminal } from 'lucide-react';

interface WhatnotStatsPageProps {
  onOpenStudio?: () => void;
  onOpenSupport?: () => void;
  onOpenReleaseNotes?: () => void;
}

export const WhatnotStatsPage: React.FC<WhatnotStatsPageProps> = ({ onOpenStudio, onOpenSupport, onOpenReleaseNotes }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="border-b border-[#2a2a2a] pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-[#161818] p-8 border-l-4 border-l-[#e50026]">
        <div className="space-y-3">
          <div className="inline-flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#e50026] uppercase tracking-widest font-bold mb-1">
              Comprehensive Studio Telemetry
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <h1 
                className="font-serif-display font-cinzel text-4xl sm:text-5xl font-bold text-[#e3e2e2] uppercase tracking-tight"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <span className="text-[#e50026]">NSFW</span> STATS
              </h1>

              {(onOpenReleaseNotes || onOpenStudio) && (
                <button
                  onClick={onOpenReleaseNotes || onOpenStudio}
                  className="px-4 py-2 bg-[#e50026] hover:bg-[#b3001e] text-white font-mono-code text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center gap-2"
                >
                  v2.4.0 Release Notes →
                </button>
              )}
            </div>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#c4c7c7] max-w-2xl leading-relaxed">
            Central telemetry dashboard and project documentation hub for Color me <span className="text-[#e50026]">NSFW</span>. Overview of studio runtime analytics, community completion rankings, user activity metrics, high-resolution vector exports, and release notes.
          </p>
        </div>
      </div>

      {/* Primary Key Performance Indicators (KPIs) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Completions */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-5 space-y-2 relative overflow-hidden group hover:border-[#e50026] transition-all">
          <div className="flex items-center justify-between text-[#8e9192]">
            <span className="text-xs font-mono-code uppercase tracking-wider">Completions</span>
          </div>
          <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#e3e2e2] group-hover:text-white transition-colors">
            1,420
          </div>
          <p className="text-[11px] font-sans text-[#8e9192] pt-1 border-t border-[#222]">
            +142 finished this week
          </p>
        </div>

        {/* Hours Spent */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-5 space-y-2 relative overflow-hidden group hover:border-[#e50026] transition-all">
          <div className="flex items-center justify-between text-[#8e9192]">
            <span className="text-xs font-mono-code uppercase tracking-wider">Hrs Spent</span>
          </div>
          <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#e3e2e2] group-hover:text-white transition-colors">
            382h
          </div>
          <p className="text-[11px] font-sans text-[#8e9192] pt-1 border-t border-[#222]">
            Avg 18m per coloring session
          </p>
        </div>

        {/* Shares */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-5 space-y-2 relative overflow-hidden group hover:border-[#e50026] transition-all">
          <div className="flex items-center justify-between text-[#8e9192]">
            <span className="text-xs font-mono-code uppercase tracking-wider">Shares</span>
          </div>
          <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#e3e2e2] group-hover:text-white transition-colors">
            890
          </div>
          <p className="text-[11px] font-sans text-[#8e9192] pt-1 border-t border-[#222]">
            High-res gallery embeds
          </p>
        </div>

        {/* Downloads */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-5 space-y-2 relative overflow-hidden group hover:border-[#e50026] transition-all">
          <div className="flex items-center justify-between text-[#8e9192]">
            <span className="text-xs font-mono-code uppercase tracking-wider">Downloads</span>
          </div>
          <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#e3e2e2] group-hover:text-white transition-colors">
            2,840
          </div>
          <p className="text-[11px] font-sans text-[#8e9192] pt-1 border-t border-[#222]">
            300 DPI Vector & PNG
          </p>
        </div>

        {/* Studio Version */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-5 space-y-2 relative overflow-hidden group hover:border-[#e50026] transition-all col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-[#8e9192]">
            <span className="text-xs font-mono-code uppercase tracking-wider">Version</span>
          </div>
          <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#e50026] group-hover:text-white transition-colors">
            v2.4
          </div>
          <p className="text-[11px] font-sans text-[#8e9192] pt-1 border-t border-[#222]">
            Vector engine & Cinzel styles
          </p>
        </div>
      </div>

      {/* Analytics Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Popular Chapters Analytics */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-4">
            <h3 className="font-serif-display text-xl font-bold text-white uppercase flex items-center gap-2">
              Chapter Activity
            </h3>
            <span className="text-xs font-mono-code text-[#e50026] font-bold">Live Data</span>
          </div>

          <div className="space-y-4">
            {[
              { code: 'EXH. 01', title: 'The Sovereign Throne', category: 'Domination', completions: '482', percent: 85 },
              { code: 'EXH. 02', title: 'Velvet Bindings', category: 'Restraint', completions: '390', percent: 68 },
              { code: 'EXH. 03', title: 'Basement Protocol', category: 'Esoteric', completions: '295', percent: 52 },
              { code: 'EXH. 04', title: 'The Bound Demon', category: 'High Difficulty', completions: '253', percent: 44 },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5 bg-[#0d0e0f] p-3.5 border border-[#262727]">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono-code text-[#e50026] font-bold">{item.code} — {item.title}</span>
                  <span className="font-mono-code text-[#c4c7c7]">{item.completions} completions</span>
                </div>
                <div className="w-full bg-[#1e2020] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#e50026] h-full transition-all duration-500" 
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#8e9192] pt-1">
                  <span>Category: {item.category}</span>
                  <span>{item.percent}% engagement</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Stats & Activity */}
        <div className="bg-[#161818] border border-[#2a2a2a] p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-4">
            <h3 className="font-serif-display text-xl font-bold text-white uppercase flex items-center gap-2">
              User Activity
            </h3>
            <span className="text-xs font-mono-code text-[#e50026] font-bold">User Stats</span>
          </div>

          <div className="space-y-4 text-xs font-sans text-[#c4c7c7]">
            <div className="bg-[#0d0e0f] p-3.5 border border-[#262727] border-l-2 border-l-[#8e9192] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white font-mono-code text-sm">Session Activity</span>
                <span className="text-[#8e9192] font-mono-code text-[11px]">Today</span>
              </div>
              <p className="text-[#8e9192]">1h 42m active coloring session in Chapter 1: Crown of Thorne.</p>
            </div>

            <div className="bg-[#0d0e0f] p-3.5 border border-[#262727] border-l-2 border-l-[#8e9192] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white font-mono-code text-sm">Masterpiece Fills</span>
                <span className="text-[#8e9192] font-mono-code text-[11px]">48 Swatches</span>
              </div>
              <p className="text-[#8e9192]">Completed 14 precision vector fills & saved 3 custom color palettes.</p>
            </div>

            <div className="bg-[#0d0e0f] p-3.5 border border-[#262727] border-l-2 border-l-[#8e9192] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white font-mono-code text-sm">Exports, Shares, & Downloads</span>
                <span className="text-[#8e9192] font-mono-code text-[11px]">4 Files</span>
              </div>
              <p className="text-[#8e9192]">Downloaded 300 DPI high-resolution PNG & PDF vector prints.</p>
            </div>

            <div className="bg-[#0d0e0f] p-3.5 border border-[#262727] border-l-2 border-l-[#8e9192] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white font-mono-code text-sm">Streak & Engagement</span>
                <span className="text-[#8e9192] font-mono-code text-[11px]">5-Day Streak</span>
              </div>
              <p className="text-[#8e9192]">Active consecutive days coloring in the <span className="text-[#e50026]">NSFW</span> Studio.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
