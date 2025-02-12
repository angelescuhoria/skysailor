"use client";

import React from "react";
import LoginForm from "@/app/auth/LoginForm";
import RegisterForm from "@/app/auth/RegisterForm";
import { useAuthSwap } from "@/app/contexts/AuthSwapContext";

export default function AuthContents() {
  const { formType } = useAuthSwap();

  return (
    <div className="flex flex-row relative w-full min-h-[500px] overflow-hidden">
      <div
        className={`main-card w-full h-auto flex flex-col px-4 gap-5 text-white absolute transition-transform duration-500 ${
          formType === "login" ? "translate-x-0" : "translate-x-[120vw]"
        }`}
      >
        <h3 className="h3 text-center mt-2">Login</h3>
        <div>
          <LoginForm />
        </div>
      </div>
      <div
        className={`main-card w-full h-auto flex flex-col px-4 gap-5 text-white absolute transition-transform duration-500 ${
          formType === "register" ? "translate-x-0" : "translate-x-[120vw]"
        }`}
      >
        <h3 className="h3 text-center mt-2">Register</h3>
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}