"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SwapContextProps = {
  formType: "login" | "register";
  setFormType: Dispatch<SetStateAction<"register" | "login">>;
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

const AuthSwapContext = createContext<SwapContextProps>({
  formType: "register",
  setFormType: () => {},
  isAnimating: false,
  setIsAnimating: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
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
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <AuthSwapContext.Provider
      value={{
        formType,
        setFormType,
        isAnimating,
        setIsAnimating,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthSwapContext.Provider>
  );
}