// app/providers.tsx
"use client";

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, ReactNode } from "react";

// Supabase environment variables (replace with your own keys)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://YOUR_SUPABASE_URL";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_ANON_KEY";

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

const SupabaseContext = createContext<SupabaseClient | null>(null);

export function SupabaseProvider({ children }: { children: ReactNode }) {
  return (
    <SupabaseContext.Provider value={supabase}> {children} </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) throw new Error("useSupabase must be used within SupabaseProvider");
  return context;
};
