import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { UniversitiesSection } from "./components/UniversitiesSection";
import { SolutionSection } from "./components/SolutionSection";
import { StudentJourneyVisual } from "./components/StudentJourneyVisual";
import { ServicesSection } from "./components/ServicesSection";
import { WhyThiqaSection } from "./components/WhyThiqaSection";
import { MalaysiaSection } from "./components/MalaysiaSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { LeadModal } from "./components/LeadModal";
import { PathwayAdvisorModal } from "./components/PathwayAdvisorModal";
import { LegalModal } from "./components/LegalModal";
import { MobileBottomNav } from "./components/MobileBottomNav";

export function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadInitialInterest, setLeadInitialInterest] = useState("");
  const [pathwaySummary, setPathwaySummary] = useState("");

  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<
    "privacy" | "terms" | "refund" | null
  >(null);
  const hasOpenModal =
    isLeadModalOpen || isAdvisorModalOpen || legalModalType !== null;

  useEffect(() => {
    if (!hasOpenModal) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsLeadModalOpen(false);
      setIsAdvisorModalOpen(false);
      setLegalModalType(null);
      setPathwaySummary("");
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [hasOpenModal]);

  const handleOpenLeadModal = (sourceOrInterest?: string) => {
    setPathwaySummary("");
    setLeadInitialInterest(sourceOrInterest || "");
    setIsLeadModalOpen(true);
  };

  const handlePathwaySelected = (pathwayResult: string) => {
    setIsAdvisorModalOpen(false);
    setLeadInitialInterest("");
    setPathwaySummary(pathwayResult);
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-arabic selection:bg-amber-500/20 selection:text-[#0F254B] overflow-x-hidden antialiased">
      {/* Sticky Header */}
      <Navbar
        onOpenLeadModal={handleOpenLeadModal}
        onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="overflow-x-hidden pb-16 lg:pb-0">
        <Hero
          onOpenLeadModal={handleOpenLeadModal}
          onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
        />

        <UniversitiesSection onOpenLeadModal={handleOpenLeadModal} />

        <StudentJourneyVisual onOpenLeadModal={handleOpenLeadModal} />

        <SolutionSection onOpenLeadModal={handleOpenLeadModal} />

        <ServicesSection onOpenLeadModal={handleOpenLeadModal} />

        <MalaysiaSection onOpenLeadModal={handleOpenLeadModal} />

        <WhyThiqaSection onOpenLeadModal={handleOpenLeadModal} />

        <TestimonialsSection />

        <FAQSection onOpenLeadModal={handleOpenLeadModal} />

        <FinalCTA onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating Elements & Mobile Navigation */}
      <WhatsAppFloatingButton />
      <MobileBottomNav
        onOpenLeadModal={handleOpenLeadModal}
        onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
      />

      {/* Modals */}
      <LeadModal
        key={isLeadModalOpen ? "lead-open" : "lead-closed"}
        isOpen={isLeadModalOpen}
        onClose={() => {
          setIsLeadModalOpen(false);
          setPathwaySummary("");
        }}
        initialInterest={leadInitialInterest}
        pathwaySummary={pathwaySummary}
      />

      <PathwayAdvisorModal
        key={isAdvisorModalOpen ? "advisor-open" : "advisor-closed"}
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
