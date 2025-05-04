// --- SignupWaitlistForm client component ---
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { trackEvent } from "@/lib/amplitude";
import { createUserWaitlist } from "@/actions/userWaitlistAction";

export function SignupWaitlistForm() {
  const [email, setEmail] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    trackEvent('signup_submit');
    startTransition(async () => {
      await createUserWaitlist(email);
      setThankYou(true);
    });
  }

  if (thankYou) {
    return <div className="text-green-600 font-semibold text-center py-4">Thank you for joining the waitlist!</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <form className="flex flex-col md:flex-row md:items-center gap-4 w-full justify-center" onSubmit={handleSubmit}>
        <Input
          className="px-4 py-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base w-full md:min-w-[350px] md:max-w-[350px] md:w-[350px]"
          placeholder="Enter your email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isPending}
        />
        <Button
          type="submit"
          className="px-8 py-6 rounded-full font-bold shadow bg-blue-600 text-white hover:bg-blue-700 transition min-w-[200px] w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
          disabled={isPending}
        >
          {isPending ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          ) : (
            "Get early access"
          )}
        </Button>
      </form>
      <p className="text-xs text-gray-500 text-center">We'll notify you when BillPal is ready. No spam, we promise.</p>
    </div>
  );
}
