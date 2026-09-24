import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ITShowcaseCarousel } from './components/ITShowcaseCarousel';
import { FeaturedServices } from './components/FeaturedServices';
import { InfrastructureShowcase } from './components/InfrastructureShowcase';
import { ProjectCalculator } from './components/ProjectCalculator';
import { Testimonials } from './components/Testimonials';
import { ContactAndLocation } from './components/ContactAndLocation';
import { LiveSupportChat } from './components/LiveSupportChat';
import { PhpCodeExportModal } from './components/PhpCodeExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isPhpModalOpen, setIsPhpModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('');
  const [customQuoteMessage, setCustomQuoteMessage] = useState<string>('');
  const [customPoints, setCustomPoints] = useState<string>('');

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceCategory(serviceTitle);
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferQuoteFromCalculator = (summary: string, category: string, points: string) => {
    setCustomQuoteMessage(summary);
    setSelectedServiceCategory(category);
    setCustomPoints(points);
  };

  const handleOpenDiagnostic = () => {
    // Focus or scroll to contact section
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar 
        onOpenPhpModal={() => setIsPhpModalOpen(true)}
        onOpenDiagnosticModal={handleOpenDiagnostic}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenDiagnostic={handleOpenDiagnostic}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Eye-catching Executive IT Infrastructure Carousel */}
        <div id="galeria-ti">
          <ITShowcaseCarousel onSelectSlideAction={handleSelectServiceForQuote} />
        </div>

        {/* Featured Corporate Services */}
        <FeaturedServices 
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* High-Tech Infrastructure & Fluke Lab Showcase */}
        <InfrastructureShowcase />

        {/* Interactive Corporate Project & SLA Calculator */}
        <ProjectCalculator 
          onTransferQuote={handleTransferQuoteFromCalculator}
        />

        {/* Corporate Client Testimonials */}
        <Testimonials />

        {/* Contact Form & Google Maps Location */}
        <ContactAndLocation 
          initialServiceCategory={selectedServiceCategory}
          initialMessage={customQuoteMessage}
          initialPoints={customPoints}
        />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenPhpModal={() => setIsPhpModalOpen(true)}
      />

      {/* Live Technical Support Chat Widget */}
      <LiveSupportChat 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenContactWithService={handleSelectServiceForQuote}
      />

      {/* PHP Code & GitHub Execution Modal */}
      <PhpCodeExportModal 
        isOpen={isPhpModalOpen}
        onClose={() => setIsPhpModalOpen(false)}
      />
    </div>
  );
}
