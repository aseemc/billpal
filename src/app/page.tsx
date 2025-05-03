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
    <div className="flex min-h-screen flex-col items-center px-4 my-6">
      <div className="w-full max-w-screen-lg rounded-2xl border shadow-lg bg-white flex flex-col min-h-screen">
        <header className="w-full max-w-screen-lg mx-auto px-4 lg:px-6 h-16 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <CreditCard className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-xl font-bold">BillPal</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
              Benefits
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#signup">
              Get Started
            </Link>
          </nav>
        </header>
        <main className="flex-1 w-full max-w-screen-lg mx-auto">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
            <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                      Stop Chasing Friends for Subscription Money
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl">
                      Easily split & manage shared subscriptions like Netflix, Spotify, and more with friends and family.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#signup">
                      <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                        Get Early Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#features">
                      <Button size="lg" variant="outline">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={Top}
                    width={450}
                    height={550}
                    alt="BillPal Hero Illustration"
                    className="rounded-xl shadow-2xl border"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32" id="problem">
            <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Problem</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Managing shared subscriptions shouldn't be a headache.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card className="border-2 border-blue-100 h-full flex-1">
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
                <Card className="border-2 border-blue-100 h-full flex-1">
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
                <Card className="border-2 border-blue-100 h-full flex-1">
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

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="features">
            <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Solution: BillPal</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A simple app that makes splitting subscriptions with friends effortless.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 gap-12">
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
                    // width={300}
                    // height={600}
                    alt="BillPal App Features"
                    className="rounded-xl shadow-xl border"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32" id="benefits">
            <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    How BillPal makes your life easier
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
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

          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50" id="signup">
            <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Early Access</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Be among the first to try BillPal when we launch.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required />
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                      Request Access
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">We'll notify you when BillPal is ready. No spam, we promise.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t max-w-screen-lg mx-auto justify-center">
          <p className="text-xs text-gray-500">© 2025 BillPal. All rights reserved.</p>
          {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav> */}
        </footer>
      </div>
    </div>
  )
}
