import React, { useState, useRef, useEffect } from 'react';
import { Exhibit } from '../types';
import { EXHIBITS_DATA } from '../data/exhibits';
import { Paintbrush, RotateCcw, Download, Sparkles, Undo2, Redo2, Palette, Lock, ZoomIn, ZoomOut, RefreshCw, Check, Printer, Share2, Tablet, ChevronDown, BookOpen } from 'lucide-react';

interface ColoringStudioProps {
  initialExhibit?: Exhibit | null;
  onSelectOtherExhibit: (exhibit: Exhibit) => void;
  onOpenPrintModal: (exhibit: Exhibit) => void;
  onOpenShareModal: (exhibit: Exhibit) => void;
}

const PALETTES = [
  {
    name: 'Noir Crimson',
    colors: ['#e50026', '#93000a', '#ffdad6', '#ffb3ae', '#410004', '#121414']
  },
  {
    name: 'Gothic Velvet',
    colors: ['#2b1216', '#591a24', '#8c2838', '#c44558', '#f28a9b', '#fce8eb']
  },
  {
    name: 'Solomonic Gold',
    colors: ['#d4af37', '#aa820a', '#785b00', '#f3e5ab', '#ffecb3', '#2a2200']
  },
  {
    name: 'Obsidian & Ash',
    colors: ['#0d0e0f', '#242526', '#444748', '#8e9192', '#c4c7c7', '#ffffff']
  },
  {
    name: 'Erotic Violet',
    colors: ['#3b0038', '#6a0066', '#a11aa0', '#d858d7', '#f8a8f7', '#1a0018']
  }
];

export const ColoringStudio: React.FC<ColoringStudioProps> = ({
  initialExhibit,
  onSelectOtherExhibit,
  onOpenPrintModal,
  onOpenShareModal
}) => {
  const activeExhibit = initialExhibit || EXHIBITS_DATA[0];
  const [selectedPalette, setSelectedPalette] = useState(PALETTES[0]);
  const [activeColor, setActiveColor] = useState(PALETTES[0].colors[0]);
  const [brushSize, setBrushSize] = useState(12);
  const [tool, setTool] = useState<'brush' | 'fill' | 'eraser'>('brush');
  const [lineArtLocked, setLineArtLocked] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const savedState = localStorage.getItem(`colormensfw_canvas_${activeExhibit.id}`);

    if (savedState) {
      const img = new Image();
      img.src = savedState;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setHistory([savedState]);
        setHistoryIndex(0);
      };
      img.onerror = () => {
        // Fallback if saved state fails
        ctx.fillStyle = '#0d0e0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL();
        setHistory([dataUrl]);
        setHistoryIndex(0);
      };
    } else {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = activeExhibit.imageUrl;

      img.onload = () => {
        ctx.fillStyle = '#0d0e0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        ctx.filter = 'grayscale(100%) contrast(150%) brightness(90%)';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.restore();

        const dataUrl = canvas.toDataURL();
        setHistory([dataUrl]);
        setHistoryIndex(0);
        localStorage.setItem(`colormensfw_canvas_${activeExhibit.id}`, dataUrl);
      };

      img.onerror = () => {
        ctx.fillStyle = '#0d0e0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#e3e2e2';
        ctx.lineWidth = 4;
        ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
        ctx.fillStyle = '#e3e2e2';
        ctx.font = '24px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(activeExhibit.title.toUpperCase(), canvas.width / 2, canvas.height / 2);

        const dataUrl = canvas.toDataURL();
        setHistory([dataUrl]);
        setHistoryIndex(0);
        localStorage.setItem(`colormensfw_canvas_${activeExhibit.id}`, dataUrl);
      };
    }
  }, [activeExhibit]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    if (tool === 'fill') {
      ctx.fillStyle = activeColor;
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      saveState();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'eraser') {
      ctx.strokeStyle = '#0d0e0f';
      ctx.globalCompositeOperation = 'source-over';
    } else {
      ctx.strokeStyle = activeColor;
      if (lineArtLocked) {
        ctx.globalCompositeOperation = 'multiply';
      } else {
        ctx.globalCompositeOperation = 'source-over';
      }
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(dataUrl);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    localStorage.setItem(`colormensfw_canvas_${activeExhibit.id}`, dataUrl);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      restoreState(history[prevIndex]);
      localStorage.setItem(`colormensfw_canvas_${activeExhibit.id}`, history[prevIndex]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      restoreState(history[nextIndex]);
      localStorage.setItem(`colormensfw_canvas_${activeExhibit.id}`, history[nextIndex]);
    }
  };

  const restoreState = (dataUrl: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  const resetCanvas = () => {
    if (history.length > 0) {
      restoreState(history[0]);
      setHistory([history[0]]);
      setHistoryIndex(0);
      localStorage.setItem(`colormensfw_canvas_${activeExhibit.id}`, history[0]);
      showToast('Canvas reset to blank line art');
    }
  };

  const downloadMasterpiece = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `COLOR_ME_NSFW_${activeExhibit.id}_colored.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('Masterpiece saved to hard drive');
  };

  return (
    <div className="w-full min-h-screen bg-[#0d0e0f] py-12 px-4 sm:px-8 border-b border-[#2a2a2a] relative">
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#e50026] text-white px-5 py-3 font-mono-code text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-top-3">
          <Check className="w-4 h-4" /> {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Android Flip Page Tablet Frame Header */}
        <div className="flex flex-col items-start justify-start text-left gap-6 border-b border-[#2a2a2a] pb-6 bg-[#161818] p-6 border-l-4 border-l-[#e50026]">
          <div className="relative flex-1 w-full flex flex-col items-start text-left">
            <label 
              className="block text-[11px] leading-[12px] italic font-shanti text-[#e50026] uppercase tracking-widest font-normal mb-2 flex items-center justify-start gap-1.5 text-left w-full"
              style={{ fontFamily: 'Shanti', fontSize: '11px', lineHeight: '12px', fontWeight: 'normal', textAlign: 'left', fontStyle: 'italic' }}
            >
              Table of contents
            </label>
            <div className="relative inline-block text-left w-full max-w-3xl">
              <h1 className="w-full flex items-center justify-between gap-4 font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e3e2e2] uppercase bg-[#121414] hover:bg-[#1f2122] border-2 border-[#2a2a2a] hover:border-[#e50026] px-6 py-4 transition-all cursor-pointer group text-left">
                <span className="flex items-center justify-start gap-3 truncate flex-wrap">
                  <span>{activeExhibit.title}</span>
                  <span className="text-[#8e9192] text-base sm:text-lg md:text-xl font-mono-code font-normal">[{activeExhibit.code}]</span>
                </span>
                <ChevronDown className="w-6 h-6 text-[#e50026] transition-transform duration-200 shrink-0 group-hover:translate-y-0.5" />
              </h1>

              <select
                value={activeExhibit.id}
                onChange={(e) => {
                  const found = EXHIBITS_DATA.find(ex => ex.id === e.target.value);
                  if (found) {
                    onSelectOtherExhibit(found);
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 text-base font-cinzel"
                style={{ fontFamily: 'Cinzel, serif' }}
                title="Select Chapter"
              >
                {EXHIBITS_DATA.map((ex) => (
                  <option key={ex.id} value={ex.id} className="bg-[#161818] text-[#e3e2e2] py-2 font-cinzel" style={{ fontFamily: 'Cinzel, serif' }}>
                    {ex.code} — {ex.title} ({ex.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 flex-wrap shrink-0">
            <span className="font-shanti text-xs text-[#8e9192] uppercase" style={{ fontFamily: 'Shanti' }}>Quick Switch:</span>
            {EXHIBITS_DATA.map((ex) => (
              <button
                key={ex.id}
                onClick={() => onSelectOtherExhibit(ex)}
                className={`px-3 py-1.5 text-xs font-shanti uppercase transition-all ${
                  activeExhibit.id === ex.id
                    ? 'bg-[#e50026] text-white font-bold'
                    : 'bg-[#1b1c1c] text-[#8e9192] hover:text-white border border-[#2a2a2a]'
                }`}
                style={{ fontFamily: 'Shanti' }}
              >
                {ex.code.split('/')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-shanti" style={{ fontFamily: 'Shanti' }}>
          
          {/* Left Toolbar with Undo / Redo & Tools */}
          <div className="lg:col-span-3 bg-[#121414] border border-[#2a2a2a] p-5 space-y-6">
            
            {/* Undo / Redo Row */}
            <div className="flex gap-2 bg-[#0d0e0f] p-2 border border-[#2a2a2a]">
              <button
                onClick={handleUndo}
                disabled={historyIndex <= 0}
                className="flex-1 py-2 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#444748] disabled:opacity-30 text-xs font-shanti uppercase flex items-center justify-center gap-1 text-white"
                style={{ fontFamily: 'Shanti' }}
              >
                <Undo2 className="w-3.5 h-3.5" /> Undo
              </button>
              <button
                onClick={handleRedo}
                disabled={historyIndex >= history.length - 1}
                className="flex-1 py-2 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#444748] disabled:opacity-30 text-xs font-shanti uppercase flex items-center justify-center gap-1 text-white"
                style={{ fontFamily: 'Shanti' }}
              >
                <Redo2 className="w-3.5 h-3.5" /> Redo
              </button>
            </div>

            {/* Tool Modes */}
            <div className="space-y-2">
              <span className="font-shanti text-xs text-[#c4c7c7] uppercase tracking-wider block font-bold border-b border-[#2a2a2a] pb-1" style={{ fontFamily: 'Shanti' }}>
                Flip Page Coloring Tools
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setTool('brush')}
                  className={`py-2 px-2 text-xs font-shanti uppercase flex flex-col items-center gap-1 border transition-all ${
                    tool === 'brush' ? 'bg-[#e50026] text-white border-[#e50026] font-bold' : 'bg-[#1b1c1c] text-[#8e9192] border-[#2a2a2a]'
                  }`}
                  style={{ fontFamily: 'Shanti' }}
                >
                  <Paintbrush className="w-4 h-4" /> Brush
                </button>

                <button
                  onClick={() => setTool('fill')}
                  className={`py-2 px-2 text-xs font-shanti uppercase flex flex-col items-center gap-1 border transition-all ${
                    tool === 'fill' ? 'bg-[#e50026] text-white border-[#e50026] font-bold' : 'bg-[#1b1c1c] text-[#8e9192] border-[#2a2a2a]'
                  }`}
                  style={{ fontFamily: 'Shanti' }}
                >
                  <Sparkles className="w-4 h-4" /> Tint Flood
                </button>

                <button
                  onClick={() => setTool('eraser')}
                  className={`py-2 px-2 text-xs font-shanti uppercase flex flex-col items-center gap-1 border transition-all ${
                    tool === 'eraser' ? 'bg-[#e50026] text-white border-[#e50026] font-bold' : 'bg-[#1b1c1c] text-[#8e9192] border-[#2a2a2a]'
                  }`}
                  style={{ fontFamily: 'Shanti' }}
                >
                  <RotateCcw className="w-4 h-4" /> Eraser
                </button>
              </div>
            </div>

            {/* Brush Size Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-shanti" style={{ fontFamily: 'Shanti' }}>
                <span className="text-[#c4c7c7]">BRUSH NIB SIZE</span>
                <span className="text-[#e50026] font-bold">{brushSize}px</span>
              </div>
              <input
                type="range"
                min="2"
                max="60"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="w-full accent-[#e50026] bg-[#0d0e0f] h-2 cursor-pointer"
              />
            </div>

            {/* Line Art Lock Toggle */}
            <div className="pt-2 border-t border-[#2a2a2a]">
              <button
                onClick={() => {
                  setLineArtLocked(!lineArtLocked);
                  showToast(lineArtLocked ? 'Line Art Multiply Unlocked' : 'Line Art Multiply Lock ON');
                }}
                className={`w-full py-2.5 px-3 border font-shanti text-xs uppercase flex items-center justify-between transition-all ${
                  lineArtLocked 
                    ? 'bg-[#1b1c1c] border-[#e50026] text-[#e3e2e2]' 
                    : 'bg-[#0d0e0f] border-[#2a2a2a] text-[#8e9192]'
                }`}
                style={{ fontFamily: 'Shanti' }}
              >
                <span className="flex items-center gap-1.5">
                  <Lock className={`w-3.5 h-3.5 ${lineArtLocked ? 'text-[#e50026]' : 'text-[#8e9192]'}`} />
                  Line Protection
                </span>
                <span className="text-[10px] font-bold text-[#e50026]">
                  {lineArtLocked ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>

            {/* Palettes Selector */}
            <div className="space-y-3 pt-2 border-t border-[#2a2a2a]">
              <div className="flex justify-between items-center">
                <span className="font-shanti text-xs text-[#c4c7c7] uppercase font-bold" style={{ fontFamily: 'Shanti' }}>Palette Set</span>
                <Palette className="w-3.5 h-3.5 text-[#e50026]" />
              </div>

              <div className="space-y-2">
                {PALETTES.map((pal) => (
                  <button
                    key={pal.name}
                    onClick={() => {
                      setSelectedPalette(pal);
                      setActiveColor(pal.colors[0]);
                    }}
                    className={`w-full p-2 text-left border transition-all ${
                      selectedPalette.name === pal.name
                        ? 'bg-[#1b1c1c] border-[#e50026]'
                        : 'bg-[#0d0e0f] border-[#2a2a2a] hover:border-[#444748]'
                    }`}
                    style={{ fontFamily: 'Shanti' }}
                  >
                    <div className="text-[11px] font-shanti text-[#c4c7c7] mb-1 uppercase font-bold">{pal.name}</div>
                    <div className="flex gap-1">
                      {pal.colors.map((c) => (
                        <span
                          key={c}
                          className="flex-1 h-4 border border-black/30"
                          style={{ backgroundColor: c }}
                        ></span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Color Swatches */}
            <div className="space-y-2 pt-2 border-t border-[#2a2a2a]">
              <span className="font-shanti text-xs text-[#c4c7c7] uppercase block font-bold" style={{ fontFamily: 'Shanti' }}>Active Swatches</span>
              <div className="grid grid-cols-6 gap-1.5">
                {selectedPalette.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={`h-8 border transition-transform ${
                      activeColor === color ? 'ring-2 ring-[#e50026] scale-110 z-10 border-white' : 'border-[#2a2a2a]'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Interactive Flip Page Canvas Area */}
          <div className="lg:col-span-9 bg-[#121414] border border-[#2a2a2a] p-4 flex flex-col items-center space-y-4 font-shanti" style={{ fontFamily: 'Shanti' }}>
            
            {/* Top Canvas Controls Bar */}
            <div className="w-full flex flex-wrap justify-between items-center gap-3 bg-[#0d0e0f] p-3 border border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 2.0))}
                  className="p-1.5 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#444748] text-xs font-shanti uppercase"
                  style={{ fontFamily: 'Shanti' }}
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 text-[#e3e2e2]" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.7))}
                  className="p-1.5 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#444748] text-xs font-shanti uppercase"
                  style={{ fontFamily: 'Shanti' }}
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 text-[#e3e2e2]" />
                </button>
                <span className="font-shanti text-xs text-[#8e9192]" style={{ fontFamily: 'Shanti' }}>Zoom: {Math.round(zoomLevel * 100)}%</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={resetCanvas}
                  className="px-3 py-1.5 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-[#e50026] text-xs font-shanti text-[#ffb3ae] uppercase flex items-center gap-1.5"
                  style={{ fontFamily: 'Shanti' }}
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Clear All
                </button>

                <button
                  onClick={() => onOpenPrintModal(activeExhibit)}
                  className="px-3 py-1.5 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-white text-xs font-shanti text-white uppercase flex items-center gap-1.5"
                  style={{ fontFamily: 'Shanti' }}
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>

                <button
                  onClick={() => onOpenShareModal(activeExhibit)}
                  className="px-3 py-1.5 bg-[#1b1c1c] border border-[#2a2a2a] hover:border-white text-xs font-shanti text-white uppercase flex items-center gap-1.5"
                  style={{ fontFamily: 'Shanti' }}
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>

                <button
                  onClick={downloadMasterpiece}
                  className="px-4 py-1.5 bg-[#e50026] hover:bg-[#b3001e] text-white text-xs font-shanti uppercase font-bold flex items-center gap-1.5 shadow-lg"
                  style={{ fontFamily: 'Shanti' }}
                >
                  <Download className="w-3.5 h-3.5" /> Save to Hard Drive
                </button>
              </div>
            </div>

            {/* Android Tablet Flip Page Canvas Container */}
            <div className="relative w-full overflow-auto max-h-[680px] bg-[#070808] border-4 border-[#343535] rounded-xl flex justify-center items-center p-6 shadow-2xl">
              <div 
                className="transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
              >
                <canvas
                  ref={canvasRef}
                  width={700}
                  height={880}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="cursor-crosshair border-2 border-[#444748] shadow-2xl bg-[#0d0e0f] max-w-full h-auto"
                />
              </div>
            </div>

            <div className="w-full flex justify-between items-center text-[11px] font-shanti text-[#8e9192] px-2" style={{ fontFamily: 'Shanti' }}>
              <span className="font-shanti" style={{ fontFamily: 'Shanti' }}>Android Flip Page Mode: Touch & drag to color. Use Undo/Redo anytime.</span>
              <span className="font-shanti" style={{ fontFamily: 'Shanti' }}>Difficulty: {activeExhibit.difficulty}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
