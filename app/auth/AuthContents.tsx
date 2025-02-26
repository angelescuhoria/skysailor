"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { useAuthSwap } from "@/contexts/AuthSwapContext";
import { isDesktop } from "react-device-detect";
import { FlyingPlane } from "@/components";

export default function AuthContents() {
  const { formType, setIsAnimating, setIsSwapping } = useAuthSwap();
  const [zIndex, setZIndex] = useState({ login: 20, register: 30 });
  const isSwappedRef = useRef(false);
  const hasMounted = useRef(false);

  return (
    <div className="flex flex-row relative w-full min-h-[500px] overflow-hidden">
      <motion.div
        animate={
          isDesktop
            ? {
                left: formType === "login" ? "50%" : "0%",
              }
            : undefined
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        onUpdate={(latest) => {
          const progress =
            typeof latest.left === "number"
              ? latest.left
              : parseFloat(latest.left);
          if (progress >= 24.5 && progress < 26.5 && !isSwappedRef.current) {
            setZIndex((prev) => ({
              login: prev.register,
              register: prev.login,
            }));
            isSwappedRef.current = true;
          }
        }}
        onAnimationComplete={() => {
          if (!hasMounted.current) {
            hasMounted.current = true;
            return;
          }
          isSwappedRef.current = false;
          setIsAnimating(false);
          setIsSwapping((prev) => !prev);
        }}
        className={`${isDesktop && "absolute w-1/2 h-full z-10"}`}
      >
        <motion.div
          className={`main-card w-full flex flex-col px-4 gap-5 text-white absolute ${isDesktop ? `h-full rounded-none` : "h-auto rounded-xl"}`}
          style={{ zIndex: zIndex.login }}
          animate={
            !isDesktop ? { x: formType === "login" ? 0 : "120%" } : undefined
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3 className="h3 text-center mt-4">Login</h3>
          <LoginForm />
        </motion.div>

        <motion.div
          className={`main-card w-full flex flex-col px-4 gap-5 text-white absolute ${isDesktop ? `h-full rounded-none` : "h-auto rounded-xl"}`}
          style={{ zIndex: zIndex.register }}
          animate={
            !isDesktop
              ? { x: formType === "register" ? 0 : "-120%" }
              : undefined
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3 className="h3 text-center mt-4">Register</h3>
          <RegisterForm />
        </motion.div>
      </motion.div>

      {isDesktop && (
        <motion.div
          initial={{ left: "50%" }}
          animate={{
            left: formType === "login" ? "0%" : "50%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-1/2 h-full bg-dark z-50 flex items-center justify-center overflow-hidden"
        >
          <FlyingPlane />
        </motion.div>
      )}
    </div>
  );
}