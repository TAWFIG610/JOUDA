import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { UniversitiesSection } from './components/UniversitiesSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { StudentJourneyVisual } from './components/StudentJourneyVisual';
import { ServicesSection } from './components/ServicesSection';
import { WhyJoudaSection } from './components/WhyJoudaSection';
import { ProgramsSection } from './components/ProgramsSection';
import { MalaysiaSection } from './components/MalaysiaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { LeadModal } from './components/LeadModal';
import { PathwayAdvisorModal } from './components/PathwayAdvisorModal';
import { LegalModal } from './components/LegalModal';

export function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadInitialInterest, setLeadInitialInterest] = useState('');
  
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const handleOpenLeadModal = (sourceOrInterest?: string) => {
    setLeadInitialInterest(sourceOrInterest || '');
    setIsLeadModalOpen(true);
  };

  const handlePathwaySelected = (pathwayResult: string) => {
    setIsAdvisorModalOpen(false);
    setLeadInitialInterest(pathwayResult);
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-arabic selection:bg-emerald-500/20 selection:text-emerald-950 overflow-x-hidden antialiased">
      
      {/* Sticky Header */}
      <Navbar
        onOpenLeadModal={handleOpenLeadModal}
        onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="overflow-x-hidden">
        <Hero
          onOpenLeadModal={handleOpenLeadModal}
          onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
        />

        <TrustBar />

        {/* The Requested Infinite Marquee of Partner Universities */}
        <UniversitiesSection onOpenLeadModal={handleOpenLeadModal} />

        <ProblemSection />

        <SolutionSection onOpenLeadModal={handleOpenLeadModal} />

        <StudentJourneyVisual onOpenLeadModal={handleOpenLeadModal} />

        <ServicesSection onOpenLeadModal={handleOpenLeadModal} />

        <WhyJoudaSection onOpenLeadModal={handleOpenLeadModal} />

        <ProgramsSection
          onOpenLeadModal={handleOpenLeadModal}
          onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
        />

        <MalaysiaSection />

        <TestimonialsSection />

        <FAQSection onOpenLeadModal={handleOpenLeadModal} />

        <FinalCTA onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating Elements */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        initialInterest={leadInitialInterest}
      />

      <PathwayAdvisorModal
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
        onSelectPathway={handlePathwaySelected}
      />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

export default App;
