"use client";
import Image from "next/image"
import { Check, CreditCard, Receipt, Split, Users, Bell, Menu, X } from "lucide-react"
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/amplitude";
import { createUserWaitlist } from "@/actions/userWaitlistAction";

import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

import Top from "@/images/top.png"
import Bottom from "@/images/bottom.png"

import { SignupWaitlistForm } from "@/components/signup-waitlist-form";

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  // Hero email state
  const [heroEmail, setHeroEmail] = useState("");
  const [heroThankYou, setHeroThankYou] = useState(false);
  const [heroPending, setHeroPending] = useState(false);

  useEffect(() => {
    trackEvent("page_view", { page: "home" });
  }, []);

  async function handleHeroSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!heroEmail) return;
    trackEvent('hero_email_submit_click');
    setHeroPending(true);
    await createUserWaitlist(heroEmail);
    setHeroThankYou(true);
    setHeroPending(false);
  }

  return (
    <div id="top" className="min-h-screen flex flex-col scroll-smooth">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mx-auto py-24 px-10 gap-12 mb-16 w-full">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stop Chasing Friends for Subscription Money</h1>
          <p className="text-lg text-gray-600 mb-8">Easily split & manage shared subscriptions like Netflix, Spotify, and more with friends and family.</p>
          {heroThankYou ? (
            <div className="text-green-600 font-semibold text-center py-4 w-full md:w-[350px]">Thank you for joining the waitlist!</div>
          ) : (
            <form className="flex flex-col md:flex-row md:items-center gap-4 mb-6 w-full" onSubmit={handleHeroSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base w-full md:w-[350px]"
                value={heroEmail}
                onChange={e => setHeroEmail(e.target.value)}
                disabled={heroPending}
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
                disabled={heroPending}
              >
                {heroPending ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : (
                  "Get Early Access"
                )}
              </button>
            </form>
          )}
          <div className="w-full flex justify-start mb-8">
            <div className="flex items-center rounded-xl py-3 gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4,5,6].map(i => (
                  <Image
                    key={i}
                    src={`/avatar_${i}.jpg`}
                    alt={`User avatar ${i}`}
                    width={35}
                    height={35}
                    className="rounded-full border-2 border-white object-cover bg-white"
                    style={{ zIndex: 10 - i }}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm whitespace-nowrap">100+ waiting to try it out!</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 w-full">
          <Image
            src={Top}
            width={650}
            height={750}
            alt="BillPal Hero Illustration"
            className="rounded-xl shadow-2xl border shadow-blue-100"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl" id="problem">
        <div className="w-full px-10 md:px-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Problem</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Managing shared subscriptions shouldn't be a headache.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-1 border-blue-100 h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Awkward Reminders</h3>
                <p className="text-gray-500">
                  "Hey, you still owe me for Netflix..." No one enjoys sending or receiving these messages.
                </p>
              </CardContent>
            </Card>
            <Card className="border-1 border-blue-100 h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Receipt className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Payment Tracking</h3>
                <p className="text-gray-500">
                  Keeping track of who paid what and when becomes a confusing spreadsheet nightmare.
                </p>
              </CardContent>
            </Card>
            <Card className="border-1 border-blue-100 h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Bell className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Forgotten Due Dates</h3>
                <p className="text-gray-500">
                  Missing payment deadlines leads to service interruptions and late fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl" id="features">
        <div className="w-full px-10 md:px-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Solution</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BillPal makes sharing subscriptions simple, transparent, and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <CreditCard className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Add Shared Subscriptions</h3>
                    <p className="text-sm text-gray-500">
                      Easily add any subscription service with cost, billing date, and payment details.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Invite Friends</h3>
                    <p className="text-sm text-gray-500">
                      Add friends to your subscription groups with just their email or phone number.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Bell className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Automatic Reminders</h3>
                    <p className="text-sm text-gray-500">
                      Everyone gets notified before payment is due, so no more awkward reminders.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Split className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Track Payments</h3>
                    <p className="text-sm text-gray-500">
                      See who's paid their share and who still owes money at a glance.
                    </p>
                  </div>
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition text-center"
                onClick={() => trackEvent('get_early_access_click', { location: 'features' })}
              >
                Get Early Access
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={Bottom}
                alt="BillPal App Features"
                className="rounded-xl shadow-xl border object-contain shadow-blue-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
    <section className="w-full py-12 md:py-20 bg-white rounded-2xl bg-gradient-to-b from-blue-50 to-white" id="benefits">
        <div className="w-full px-10 md:px-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How BillPal makes your life easier
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <Card className="h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold">Save Time</h3>
                <p className="text-sm text-gray-500">No more manual tracking or sending payment reminders.</p>
              </CardContent>
            </Card>
            <Card className="h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold">Avoid Awkwardness</h3>
                <p className="text-sm text-gray-500">Let the app handle payment reminders so you don't have to.</p>
              </CardContent>
            </Card>
            <Card className="h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold">Stay Organized</h3>
                <p className="text-sm text-gray-500">
                  All your shared subscriptions in one place, clearly organized.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold">Flexible Splitting</h3>
                <p className="text-sm text-gray-500">
                  Split costs evenly or customize how much each person pays.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full flex-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full flex flex-col">
                <div className="p-2 bg-blue-100 rounded-full">
                  <CreditCard className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold">Seamless Payments</h3>
                <p className="text-sm text-gray-500">
                  Seamless integrated payment solution for your friends, allowing them to pay instantly and securely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white bg-gradient-to-b from-blue-50 to-white" id="pricing">
        <div className="max-w-5xl mx-auto px-10">
          <h2 className="text-4xl font-extrabold text-center mb-2">Simple Pricing</h2>
          <p className="text-lg text-gray-500 text-center mb-8">Start for free, upgrade when you need more features. <div className="text-blue-800 text-center font-semibold text-lg py-2">
              🎉 Early adopters get <span className="font-bold">3 months free</span>!
            </div></p>

          <div className="flex items-center justify-center mb-10 gap-4">
            <span className={isAnnual ? "text-gray-400" : "text-blue-600 font-semibold"}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={isAnnual ? "text-blue-600 font-semibold" : "text-gray-400"}>Annual <span className="ml-1 text-green-600 font-semibold">(save 17%)</span></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center p-8">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-3xl font-extrabold mb-1">$0<span className="text-lg font-normal text-gray-400">/month</span></div>
              <div className="text-gray-500 mb-6">Perfect for small groups</div>
              <ul className="mb-8 space-y-3 text-base text-gray-700 w-full">
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Up to 3 subscriptions</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Up to 5 friends</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Basic payment reminders</li>
              </ul>
              <button className="w-full border border-gray-300 rounded-lg py-3 font-semibold text-gray-700 hover:bg-gray-50 transition">Get Started</button>
            </div>
            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow border-2 border-blue-500 flex flex-col items-center p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-bold shadow">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-3xl font-extrabold mb-1">
                {isAnnual ? "$49.99" : "$4.99"}
                <span className="text-lg font-normal text-gray-400">/{isAnnual ? "year" : "month"}</span>
              </div>
              <div className="text-gray-500 mb-6">For friend groups who share everything</div>
              <ul className="mb-8 space-y-3 text-base text-gray-700 w-full">
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Unlimited subscriptions</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Up to 10 friends</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Automated payments</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Payment history</li>
              </ul>
              <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition">Get Started</button>
            </div>
            {/* Family Plan */}
            <div className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center p-8">
              <h3 className="text-xl font-bold mb-2">Family</h3>
              <div className="text-3xl font-extrabold mb-1">
                {isAnnual ? "$99.99" : "$9.99"}
                <span className="text-lg font-normal text-gray-400">/{isAnnual ? "year" : "month"}</span>
              </div>
              <div className="text-gray-500 mb-6">For large groups and families</div>
              <ul className="mb-8 space-y-3 text-base text-gray-700 w-full">
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Unlimited subscriptions</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Unlimited friends</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Priority support</li>
                <li className="flex items-center gap-2"><Check className="text-blue-500" />Custom payment schedules</li>
              </ul>
              <button className="w-full border border-gray-300 rounded-lg py-3 font-semibold text-gray-700 hover:bg-gray-50 transition">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Signup/CTA Section */}
      <section className="w-full py-12 md:py-20 rounded-2xl bg-gradient-to-b from-blue-50 to-white" id="signup">
        <div className="mx-auto w-full max-w-4xl px-10 md:px-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to stop chasing friends for money?</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Be among the first to try BillPal when we launch.
            </p>
          </div>
          <SignupWaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="shrink-0 px-10 md:px-10 border-t mx-auto bg-white shadow w-full mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between py-6 gap-4">
          {/* Left: Icon and name */}
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto mb-2 sm:mb-0">
            <CreditCard className="h-7 w-7 text-blue-500" />
            <span className="ml-2 font-bold text-lg">BillPal</span>
          </div>
          {/* Center: Links */}
          <nav className="flex gap-4 justify-center w-full sm:w-auto mb-2 sm:mb-0">
            <a
              href="/toc.txt"
              className="text-xs text-gray-500 hover:underline underline-offset-4"
              onClick={() => trackEvent('terms_footer_link_click')}
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy.txt"
              className="text-xs text-gray-500 hover:underline underline-offset-4"
              onClick={() => trackEvent('privacy_footer_link_click')}
            >
              Privacy Policy
            </a>
          </nav>
          {/* Right: Copyright */}
          <div className="text-xs text-gray-500 text-center w-full sm:w-auto">© 2025 BillPal. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow w-full">
      <div className="flex items-center justify-between px-10 py-4 w-full mx-auto">
        <a href="#top" className="flex items-center cursor-pointer">
          <CreditCard className="h-8 w-8 text-blue-500" />
          <span className="ml-2 font-bold text-2xl">BillPal</span>
        </a>
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#problem" className="hover:text-blue-500 transition" onClick={() => trackEvent('nav_click', { section: 'problem' })}>Problem</a>
          <a href="#features" className="hover:text-blue-500 transition" onClick={() => trackEvent('nav_click', { section: 'solution' })}>Solution</a>
          <a href="#benefits" className="hover:text-blue-500 transition" onClick={() => trackEvent('nav_click', { section: 'benefits' })}>Benefits</a>
          <a href="#pricing" className="hover:text-blue-500 transition" onClick={() => trackEvent('nav_click', { section: 'pricing' })}>Pricing</a>
        </nav>
        <a href="#signup" className="ml-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 font-semibold hidden md:inline-block" onClick={() => trackEvent('get_early_access_click', { location: 'header' })}>Get Early Access</a>
        <button className="md:hidden p-2 rounded-full hover:bg-gray-100" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex flex-col">
            <div className="bg-white shadow-lg rounded-b-2xl px-8 py-6 flex flex-col gap-6 absolute top-0 left-0 right-0">
              <div className="flex items-center justify-between">
                <a href="#top" className="flex items-center cursor-pointer" onClick={() => setMenuOpen(false)}>
                  <CreditCard className="h-8 w-8 text-blue-500" />
                  <span className="ml-2 font-bold text-2xl">BillPal</span>
                </a>
                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex flex-col gap-6 font-medium text-gray-700">
                <a href="#problem" className="hover:text-blue-500 transition" onClick={() => { trackEvent('nav_click', { section: 'problem' }); setMenuOpen(false); }}>Problem</a>
                <a href="#features" className="hover:text-blue-500 transition" onClick={() => { trackEvent('nav_click', { section: 'solution' }); setMenuOpen(false); }}>Solution</a>
                <a href="#benefits" className="hover:text-blue-500 transition" onClick={() => { trackEvent('nav_click', { section: 'benefits' }); setMenuOpen(false); }}>Benefits</a>
                <a href="#pricing" className="hover:text-blue-500 transition" onClick={() => { trackEvent('nav_click', { section: 'pricing' }); setMenuOpen(false); }}>Pricing</a>
              </nav>
              <a href="#signup" className="px-6 py-3 bg-blue-500 text-white rounded-full shadow font-semibold text-center" onClick={() => { trackEvent('get_early_access_click', { location: 'header' }); setMenuOpen(false); }}>Get Early Access</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}