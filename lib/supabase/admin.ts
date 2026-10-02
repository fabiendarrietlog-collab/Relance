import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const cle = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !cle) {
    throw new Error("Configuration Supabase manquante");
  }

  return createClient(url, cle, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
