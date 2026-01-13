import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWaves } from "@/components/landing/HeroWaves";
import { FeatureCards } from "@/components/landing/FeatureCards";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Animated Waves Background */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-24">
        {/* Animated Waves Background - Refreshes on theme change */}
        <HeroWaves />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Master Your Robot's{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Drivetrain
            </span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Speed, Control, and Precision for FTC, FRC & FLL
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/drivetrains">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Explore Drivetrains</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/calculators">
              <Button size="lg" variant="outline" className="backdrop-blur-sm">
                Try Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="border-y bg-muted/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Drivetrain Types</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">3D</div>
              <div className="text-sm text-muted-foreground">Simulator</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Competition-Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards with Glossary Tooltips */}
      <FeatureCards />

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Start Your Drivetrain Journey Today</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join hundreds of teams optimizing their robots for competition
          </p>
          <Link href="/drivetrains">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Credits Section */}
      <section className="border-t py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Built on Championship Knowledge</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border bg-card">
                <h4 className="font-semibold text-lg mb-2 text-primary">Primary Sources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Practical Guide to Robotics</strong>
                    <br />by Phoebe Xu & Grace Yu (Entradox Robotics, 2021)
                  </li>
                  <li>
                    <strong className="text-foreground">CTRL ALT FTC</strong>
                    <br />Control Theory Resources & Documentation
                  </li>
                  <li>
                    <strong className="text-foreground">FIRST Tech Challenge</strong>
                    <br />Official Game Manuals & Technical Resources
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <h4 className="font-semibold text-lg mb-2 text-primary">Community & Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">FTC Kaizen</strong>
                    <br />Continuous improvement & learning platform
                  </li>
                  <li>
                    <strong className="text-foreground">REV Robotics</strong>
                    <br />Technical documentation & specifications
                  </li>
                  <li>
                    <strong className="text-foreground">Chief Delphi & FTC Forums</strong>
                    <br />Community knowledge & best practices
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Made with 💜 for the FIRST community • 
                <Link href="/resources" className="ml-1 text-primary hover:underline">
                  View all credits & resources
                </Link>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                This guide is provided for educational purposes. All trademarks and registered marks are properties of their respective owners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
