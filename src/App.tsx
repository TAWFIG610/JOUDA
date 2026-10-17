import { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { HowSection } from "./components/HowSection";
import { UniversitiesSection } from "./components/UniversitiesSection";
import { CostsSection } from "./components/CostsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { ConsultModal } from "./components/ConsultModal";
import { LegalModal } from "./components/LegalModal";

export function App() {
  const [consultSource, setConsultSource] = useState<string | null>(null);
  const [consultOpenCount, setConsultOpenCount] = useState(0);
  const [legal, setLegal] = useState<"privacy" | "terms" | "refund" | null>(null);

  const openConsult = useCallback((source: string) => {
    setConsultSource(source);
    setConsultOpenCount((n) => n + 1);
  }, []);
  const closeConsult = useCallback(() => setConsultSource(null), []);
  const closeLegal = useCallback(() => setLegal(null), []);

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar onOpenConsult={openConsult} />

      <main>
        {/* 1 */}
        <Hero onOpenConsult={openConsult} />
        {/* 2. Trust: who we are, figures, company details, logos */}
        <AboutSection />
        {/* 3. Services and steps in one section */}
        <HowSection />
        {/* 4 */}
        <UniversitiesSection />
        {/* 5. Costs, commitments and official checks */}
        <CostsSection />
        {/* 6 */}
        <TestimonialsSection />
        {/* 7 */}
        <FAQSection />
        {/* 8 */}
        <FinalCTA onOpenConsult={openConsult} />
      </main>

      <Footer onOpenLegal={setLegal} />
      <WhatsAppFloatingButton />

      {/* Remounted on each open so the form starts fresh */}
      {consultSource !== null && <ConsultModal key={consultOpenCount} isOpen onClose={closeConsult} source={consultSource} />}
      <LegalModal type={legal} onClose={closeLegal} />
    </div>
  );
}

export default App;
