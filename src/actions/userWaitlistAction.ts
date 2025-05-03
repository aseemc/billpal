"use server";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function createUserWaitlist(email: string) {
  if (!email) return;
  await supabase.from('user_waitlist').insert([{ email }]);
} 