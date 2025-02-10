"use client";

import React from "react";
import AuthContents from "./AuthContents";
import AuthSwapProvider from "@/app/contexts/AuthSwapContext";

export default function Auth() {
  return (
    <AuthSwapProvider>
      <AuthContents />
    </AuthSwapProvider>
  );
}