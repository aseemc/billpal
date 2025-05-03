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
    <div className="w-full max-w-sm mx-auto space-y-2">
      <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0" onSubmit={handleSubmit}>
        <Input
          className="flex-1"
          placeholder="Enter your email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isPending}
        />
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer min-w-[140px] flex items-center justify-center"
          disabled={isPending}
        >
          {isPending ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          ) : (
            "Request Access"
          )}
        </Button>
      </form>
      <p className="text-xs text-gray-500 text-center">We'll notify you when BillPal is ready. No spam, we promise.</p>
    </div>
  );
}
