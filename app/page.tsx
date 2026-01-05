import { SplineSceneBasic } from "@/components/ui/demo";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { GitHubSection } from "@/components/sections/github";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-black">
        {/* Hero Section */}
        <section id="home" className="min-h-screen p-8 flex items-center justify-center pt-20">
          <div className="max-w-7xl w-full">
            <SplineSceneBasic />
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* GitHub Section */}
        <GitHubSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-black border-t border-neutral-800 py-8">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p className="text-neutral-500 text-sm">
              © 2026 Keegan May. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
