"use client";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type SwapContextProps = {
  formType: "login" | "register";
  toggleFormType: () => void;
  toggleEmail: (value: string) => void;
  togglePassword: (value: string) => void;
  email: string;
  password: string;
};

const AuthSwapContext = createContext<SwapContextProps>({
  formType: "register",
  toggleFormType: () => {},
  toggleEmail: (value: string) => value,
  togglePassword: (value: string) => value,
  email: "",
  password: "",
});

export function useAuthSwap() {
  const context = useContext(AuthSwapContext);
  if (!context)
    throw new Error("useAuthSwap must be used within a AuthSwapProvider");
  return context;
}

export default function AuthSwapProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [formType, setFormType] = useState<"login" | "register">("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleFormType = useCallback(
    () => setFormType((prev) => (prev === "login" ? "register" : "login")),
    [],
  );
  const toggleEmail = useCallback((value: string) => setEmail(value), []);
  const togglePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  return (
    <AuthSwapContext.Provider
      value={{
        formType,
        toggleFormType,
        toggleEmail,
        togglePassword,
        email,
        password,
      }}
    >
      {children}
    </AuthSwapContext.Provider>
  );
}