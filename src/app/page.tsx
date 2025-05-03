import Link from "next/link"
import Image from "next/image"
import { Check, CreditCard, Receipt, Split, Users, Bell, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

import Top from "@/images/top.png"
import Bottom from "@/images/bottom.png"

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white flex flex-col max-w-5xl mx-auto scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow rounded-b-2xl px-8 py-4 flex items-center justify-between w-full max-w-7xl mx-auto">
        <a href="#top" className="flex items-center cursor-pointer">
          <CreditCard className="h-8 w-8 text-blue-500" />
          <span className="ml-2 font-bold text-2xl">BillPal</span>
        </a>
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="#problem" className="hover:text-blue-500 transition">Problem</Link>
          <Link href="#features" className="hover:text-blue-500 transition">Solution</Link>
          <Link href="#benefits" className="hover:text-blue-500 transition">Benefits</Link>
          <Link href="#pricing" className="hover:text-blue-500 transition">Pricing</Link>
        </nav>
        <a href="#signup" className="ml-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 font-semibold hidden md:inline-block">Get Early Access</a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto py-32 px-4 gap-12 w-full mb-16">
        <div className="max-w-xl flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stop Chasing Friends for Subscription Money</h1>
          <p className="text-lg text-gray-600 mb-8">Easily split & manage shared subscriptions like Netflix, Spotify, and more with friends and family.</p>
          <a href="#signup" className="px-8 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 font-semibold inline-flex items-center gap-2">
            Get Early Access <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={Top}
            width={450}
            height={550}
            alt="BillPal Hero Illustration"
            className="rounded-xl shadow-2xl border"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl mb-16" id="problem">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
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
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl mb-16" id="features">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Solution: BillPal</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple app that makes splitting subscriptions with friends effortless.
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
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={Bottom}
                alt="BillPal App Features"
                className="rounded-xl shadow-xl border object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-20 bg-white rounded-2xl bg-gradient-to-b from-blue-50 to-white mb-16" id="benefits">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
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
                <h3 className="font-bold">Timely Payments</h3>
                <p className="text-sm text-gray-500">
                  Never miss a payment deadline or deal with service interruptions.
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
      <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white rounded-2xl mb-16" id="pricing">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
            <p className="max-w-2xl text-gray-500 md:text-lg">Choose the plan that fits your needs. <span className="text-blue-600 font-semibold">Early adopters get BillPal Pro free for 2 months!</span> Start for free, upgrade anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col border border-gray-200 transition-transform duration-200 hover:scale-105 min-h-[480px] h-full justify-between">
              <h3 className="text-xl font-bold mb-2">BillPal Free</h3>
              <p className="text-gray-500 mb-4 text-sm">Perfect for individuals or small groups managing a few shared items.</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Manage up to 3 shared subscriptions.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Invite up to 5 participants per subscription.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Standard automated payment reminders.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Basic payment status tracking.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Standard support.</li>
              </ul>
              <div className="flex-1 flex flex-col justify-end">
                <Button className="w-full bg-blue-100 text-blue-600 hover:bg-blue-200" disabled>Current Plan</Button>
              </div>
            </div>
            {/* Pro Plan */}
            {/* <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-xl p-8 flex flex-col border-2 border-blue-500 relative scale-105 z-10 transition-transform duration-200 hover:scale-110 min-h-[480px] h-full justify-between"> */}
            <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 bg-white rounded-2xl shadow p-8 flex flex-col border border-gray-200 relative transition-transform duration-200 hover:scale-105 min-h-[480px] h-full justify-between">
              <div className="flex justify-center absolute -top-4 left-0 w-full">
                <div className="bg-yellow-400 text-yellow-900 text-xs px-4 py-1 rounded-full font-bold shadow border border-yellow-300">Early Adopter Pricing</div>
              </div>
              <h3 className="text-xl font-bold mb-2">BillPal Pro</h3>
              <p className="text-gray-700 mb-4 font-semibold text-sm">For users managing multiple shared bills or larger groups, offering more flexibility.</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Manage unlimited shared subscriptions.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Invite unlimited participants per subscription.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Standard automated payment reminders.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Basic payment status tracking.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Advanced reminders, flexible cost splitting, export history, etc.</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5 min-w-[20px] min-h-[20px]" /> Priority support.</li>
              </ul>
              <div className="flex-1 flex flex-col justify-end">
                <div className="flex flex-col items-center mb-2">
                  <div className="text-3xl font-bold text-blue-700 flex items-end gap-2">
                    $3.99 <span className="text-base font-medium text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-600">or $39.99/year <span className="text-green-600 font-semibold">(save 17%)</span></div>
                  <div className="mt-2 text-xs text-blue-700 font-semibold bg-blue-100 px-3 py-1 rounded-full">First 2 months free for early adopters!</div>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg">Upgrade to Pro</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup/CTA Section */}
      <section className="w-full py-12 md:py-20 rounded-2xl bg-gradient-to-b from-blue-50 to-white" id="signup">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Early Access</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Be among the first to try BillPal when we launch.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto space-y-2">
            <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                Request Access
              </Button>
            </form>
            <p className="text-xs text-gray-500">We'll notify you when BillPal is ready. No spam, we promise.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t max-w-7xl mx-auto justify-center bg-white mt-8 rounded-t-2xl shadow">
        <p className="text-xs text-gray-500">© 2025 BillPal. All rights reserved.</p>
      </footer>
    </div>
  )
}
