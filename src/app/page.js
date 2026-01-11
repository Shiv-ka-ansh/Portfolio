"use client";

/**
 * Portfolio Home Page
 * 
 * COLOR PALETTE (ColorHunt):
 * - Primary: #213448 (Deep Navy)
 * - Secondary: #547792 (Steel Blue)
 * - Tertiary: #94B4C1 (Soft Teal)
 * - Accent: #EAE0CF (Warm Cream)
 * 
 * ARCHITECTURE:
 * This page composes all section components into a cohesive single-page portfolio.
 * 
 * ANIMATIONS SUMMARY:
 * | Animation Type        | Used In          | Trigger          |
 * |-----------------------|------------------|------------------|
 * | Geometric shapes      | Hero             | Mount + float    |
 * | Staggered cards       | Skills, Projects | Viewport entry   |
 * | 3D tilt + glow        | Projects         | Hover            |
 * | Scroll-driven line    | Experience       | Scroll progress  |
 * | Floating labels       | Contact form     | Focus state      |
 * | Icon animations       | All sections     | Hover + viewport |
 * | Background orbs       | Global           | Continuous       |
 */

import { FloatingOrbs } from "@/components/ui";
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#213448] text-[#EAE0CF]">
      {/* Background animated orbs */}
      <FloatingOrbs />

      {/* Main content */}
      <main className="relative z-10 flex w-full flex-col">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
