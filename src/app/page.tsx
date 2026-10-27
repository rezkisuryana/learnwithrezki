import { AboutInstructor } from "@/components/sections/about-instructor";
import { Faq } from "@/components/sections/faq";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { LearningApproach } from "@/components/sections/learning-approach";
import { LearningPaths } from "@/components/sections/learning-paths";
import { TeachingDocumentation } from "@/components/sections/teaching-documentation";
import { TrialPricing } from "@/components/sections/trial-pricing";
import { TrustIndicators } from "@/components/sections/trust-indicators";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <FeaturedProjects />
      <AboutInstructor />
      <LearningPaths />
      <LearningApproach />
      <TeachingDocumentation />
      <TrialPricing />
      <Faq />
      <FinalCta />
    </>
  );
}
