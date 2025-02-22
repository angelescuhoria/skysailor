"use client";

import { createContext, ReactNode, useContext } from "react";
import { authClient } from "@/app/auth/auth-client";
import { BetterFetchError } from "@better-fetch/fetch";

type Props = {
  children: ReactNode;
};

type Session = typeof authClient.$Infer.Session;

type AuthSessionContextType = {
  session: Session | null;
  isPending: boolean;
  error: BetterFetchError | null;
};

export const AuthSessionContext = createContext<
  AuthSessionContextType | undefined
>(undefined);

export function useAuthSession() {
  const context = useContext(AuthSessionContext);
  if (!context)
    throw new Error("useAuthSession must be used within a AuthSessionProvider");
  return context;
}

export default function AuthSessionProvider({ children }: Props) {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <AuthSessionContext.Provider value={{ session, isPending, error }}>
      {children}
    </AuthSessionContext.Provider>
  );
}