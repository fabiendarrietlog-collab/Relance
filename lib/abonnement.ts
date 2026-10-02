import type { SupabaseClient } from "@supabase/supabase-js";

export async function aAbonnementActif(
  supabase: SupabaseClient,
  userId: string
): Promise<boolean> {
  const { data } = await supabase
    .from("subscriptions")
    .select("status")
    .eq("user_id", userId)
    .maybeSingle();

  return data?.status === "active" || data?.status === "trialing";
}
