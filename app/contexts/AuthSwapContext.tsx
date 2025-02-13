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
  isSwapping: boolean;
  setIsSwapping: Dispatch<SetStateAction<boolean>>;
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
  isSwapping: false,
  setIsSwapping: () => {},
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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isSwapping, setIsSwapping] = useState<boolean>(false);

  return (
    <AuthSwapContext.Provider
      value={{
        formType,
        setFormType,
        isAnimating,
        setIsAnimating,
        isSwapping,
        setIsSwapping,
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