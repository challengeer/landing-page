import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrophyIcon, UsersIcon, BoltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between px-4 md:px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Challengeer Logo"
              width={32}
              height={32}
              className="object-contain rounded-md"
              priority
            />
            <span className="text-xl font-bold">Challengeer</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </Link>
            <Link href="#download" className="text-sm font-medium transition-colors hover:text-primary">
              Download
            </Link>
          </nav>
          <div>
            <Button variant="outline" size="lg" asChild>
              <Link href="#download">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 md:px-6">
        <section className="py-6 md:py-12 lg:py-16 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold sm:text-2xl xl:text-6xl/none">
                    <span className="text-primary">Challenge</span> Your Friends.<br /> Prove Your <span className="text-primary">Skills</span>.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Challengeer is the ultimate social app that lets you challenge friends, track achievements, and show
                    off your skills in friendly competitions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="p-6">
                    <Link href="#download" className="inline-flex items-center">
                      Download Now
                      <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="p-6">
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border-8 border-foreground/10 shadow-xl">
                  <Image
                    src="/UserPage.png"
                    alt="Challengeer app screenshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Challenge and Win
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Challengeer provides all the tools you need to create, participate in, and win challenges with your
                  friends.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <TrophyIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Create Challenges</h3>
                <p className="text-center text-muted-foreground">
                  Create custom challenges for your friends with specific goals, timeframes, and rewards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Social Leaderboards</h3>
                <p className="text-center text-muted-foreground">
                  Compete with friends and see who{"'"}s at the top with real-time leaderboards and rankings.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BoltIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Achievement Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Track your progress, earn badges, and showcase your achievements on your profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Challengeer Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Get started with Challengeer in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Download the App</h3>
                <p className="text-center text-muted-foreground">
                  Download Challengeer from the App Store or Google Play Store.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Connect with Friends</h3>
                <p className="text-center text-muted-foreground">
                  Find and connect with your friends to start challenging them.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Create & Accept Challenges</h3>
                <p className="text-center text-muted-foreground">
                  Start creating challenges or accept ones from your friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Challenge Your Friends?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Join thousands of users already creating and completing challenges. Download Challengeer today and
                    start your first challenge!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="gap-2 p-6" size="lg">
                    <Link href="#download" className="flex-row items-center gap-2">
                      <div className="flex items-center gap-2">
                        <DevicePhoneMobileIcon className="h-5 w-5" />
                        App Store
                      </div>
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2 p-6" size="lg">
                    <Link href="#download" className="flex-row items-center gap-2">
                      <div className="flex items-center gap-2"> {/* No other solution found to align the icon and text */}
                        <DevicePhoneMobileIcon className="h-5 w-5" />
                        Google Play
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[250px] w-[125px] overflow-hidden rounded-xl border-4 border-foreground/10 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=500&width=250"
                      alt="Challengeer app screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] w-[125px] overflow-hidden rounded-xl border-4 border-foreground/10 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=500&width=250"
                      alt="Challengeer app screenshot"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Download Challengeer Today</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Be the first to know when we launch new features and updates.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 p-6" />
                <Button type="submit" className="p-6">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                We{"'"}ll keep you updated on our launch and new features.{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-6">
              <Button size="lg" className="p-6">
                <Link href="#" className="inline-flex items-center gap-2">
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                  Download on App Store
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="p-6">
                <Link href="#" className="inline-flex items-center gap-2">
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                  Get it on Google Play
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            {/* <TrophyIcon className="h-5 w-5 text-primary" /> */}
            <Image src="/icon.png" alt="Challengeer Logo" width={32} height={32} className="object-contain rounded-md" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} Challengeer. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
