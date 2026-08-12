import React, { useState } from 'react';
import { ActiveTab, Exhibit } from './types';
import { EXHIBITS_DATA } from './data/exhibits';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { GallerySection } from './components/GallerySection';
import { ColoringStudio } from './components/ColoringStudio';
import { AboutCreator } from './components/AboutCreator';
import { WhatnotStatsPage } from './components/WhatnotStatsPage';
import { UpcomingRelease } from './components/UpcomingRelease';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';
import { SupportModal } from './components/SupportModal';
import { PrintModal } from './components/PrintModal';
import { PropertiesModal } from './components/PropertiesModal';
import { ShareModal } from './components/ShareModal';
import { ActivityHubModal } from './components/ActivityHubModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('gallery');
  const [studioExhibit, setStudioExhibit] = useState<Exhibit | null>(EXHIBITS_DATA[0]);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  // Modals state for 3-dot options
  const [printExhibit, setPrintExhibit] = useState<Exhibit | null>(null);
  const [propertiesExhibit, setPropertiesExhibit] = useState<Exhibit | null>(null);
  const [shareExhibit, setShareExhibit] = useState<Exhibit | null>(null);
  const [isActivityHubOpen, setIsActivityHubOpen] = useState(false);

  const handleOpenStudioWithExhibit = (exhibit: Exhibit) => {
    setStudioExhibit(exhibit);
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnterGallery = () => {
    setActiveTab('gallery');
    const elem = document.getElementById('gallery-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121414] text-[#e3e2e2] font-sans relative flex flex-col antialiased selection:bg-[#e50026] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSupport={() => setIsSupportModalOpen(true)}
        onOpenActivityHub={() => setIsActivityHubOpen(true)}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-grow flex flex-col w-full max-w-[1920px] mx-auto relative z-10">
        {activeTab === 'gallery' && (
          <>
            <HeroSection
              onEnterGallery={handleEnterGallery}
              onOpenStudio={() => {
                setActiveTab('studio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <IntroductionSection />

            <GallerySection
              onOpenStudioWithExhibit={handleOpenStudioWithExhibit}
              onOpenPrintModal={(ex) => setPrintExhibit(ex)}
              onOpenPropertiesModal={(ex) => setPropertiesExhibit(ex)}
              onOpenShareModal={(ex) => setShareExhibit(ex)}
              onOpenActivityHub={() => setIsActivityHubOpen(true)}
            />

            <NewsletterAndFooter
              onOpenActivityHub={() => setIsActivityHubOpen(true)}
              onNavigateToActivity={() => {
                setActiveTab('whatnot');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {activeTab === 'studio' && (
          <div className="animate-in fade-in duration-300">
            <ColoringStudio
              initialExhibit={studioExhibit}
              onSelectOtherExhibit={(ex) => setStudioExhibit(ex)}
              onOpenPrintModal={(ex) => setPrintExhibit(ex)}
              onOpenShareModal={(ex) => setShareExhibit(ex)}
            />
            <NewsletterAndFooter
              onOpenActivityHub={() => setIsActivityHubOpen(true)}
              onNavigateToActivity={() => {
                setActiveTab('whatnot');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300 space-y-12">
            <AboutCreator />
            <IntroductionSection />
            <NewsletterAndFooter
              onOpenActivityHub={() => setIsActivityHubOpen(true)}
              onNavigateToActivity={() => {
                setActiveTab('whatnot');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'whatnot' && (
          <div className="animate-in fade-in duration-300">
            <WhatnotStatsPage 
              onOpenStudio={() => {
                setActiveTab('studio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenSupport={() => setIsSupportModalOpen(true)}
              onOpenReleaseNotes={() => {
                setActiveTab('upcoming');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <NewsletterAndFooter
              onOpenActivityHub={() => setIsActivityHubOpen(true)}
              onNavigateToActivity={() => {
                setActiveTab('whatnot');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="animate-in fade-in duration-300">
            <UpcomingRelease 
              onOpenStudio={() => {
                setActiveTab('studio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenSupport={() => setIsSupportModalOpen(true)}
            />
            <NewsletterAndFooter
              hideNewsletter={true}
              onOpenActivityHub={() => setIsActivityHubOpen(true)}
              onNavigateToActivity={() => {
                setActiveTab('whatnot');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </main>

      {/* Support / Patron Modal */}
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      {/* Print Resolution Modal */}
      <PrintModal
        exhibit={printExhibit}
        onClose={() => setPrintExhibit(null)}
      />

      {/* Properties Modal */}
      <PropertiesModal
        exhibit={propertiesExhibit}
        onClose={() => setPropertiesExhibit(null)}
      />

      {/* Share Modal */}
      <ShareModal
        exhibit={shareExhibit}
        onClose={() => setShareExhibit(null)}
      />

      {/* Activity & Print Log Hub Modal */}
      <ActivityHubModal
        isOpen={isActivityHubOpen}
        onClose={() => setIsActivityHubOpen(false)}
      />
    </div>
  );
}
