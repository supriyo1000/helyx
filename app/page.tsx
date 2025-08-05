import { Navigation } from "@/components/features/navigation"
import { HeroSection } from "@/components/features/hero-section"
import { FeaturesGrid } from "@/components/features/features-grid"
import { SponsorsSection } from "@/components/features/sponsors-section"
import { CustomThemesSection } from "@/components/features/custom-themes-section"
import { AccessibilitySection } from "@/components/features/accessibility-section"
import { DarkModeSection } from "@/components/features/dark-mode-section"
import { CustomizationSection } from "@/components/features/customization-section"
import { HeroUIProSection } from "@/components/features/heroui-pro-section"
import { FeaturesOverview } from "@/components/features/features-overview"
import { SupportSection } from "@/components/features/support-section"
import { CommunitySection } from "@/components/features/community-section"
import { InstallBanner } from "@/components/features/install-banner"
import { Footer } from "@/components/features/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Top Banner */}
      <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-background border-b-1 border-divider px-6 py-2 sm:px-3.5">
        <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
          <a
            className="text-small flex items-end sm:text-[0.93rem] text-foreground hover:opacity-80 transition-opacity"
            href="https://heroui.chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden md:block" role="img" aria-label="rocket">
              🚀
            </span>
            <span className="inline-flex md:ml-1 animate-text-gradient font-medium bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-600 dark:from-zinc-200 via-zinc-400 to-zinc-200">
              Generate, edit and deploy beautiful apps
            </span>
          </a>
          <a
            className="flex group min-w-[120px] items-center font-semibold text-background bg-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[1px]"
            href="https://heroui.chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-foreground group-hover:bg-foreground/70 transition-background px-3 py-1 text-sm font-medium text-background">
              HeroUI Chat
              <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12h16m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <Navigation />

      <main className="container mx-auto max-w-7xl px-6 grow">
        <HeroSection />
        <FeaturesGrid />
        <SponsorsSection />
        <CustomThemesSection />
        <AccessibilitySection />
        <DarkModeSection />
        <CustomizationSection />
        <HeroUIProSection />
        <FeaturesOverview />
        <SupportSection />
        <InstallBanner />
        <CommunitySection />
      </main>

      <Footer />
    </div>
  )
}
