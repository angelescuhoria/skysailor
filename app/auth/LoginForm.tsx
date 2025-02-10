"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { LoginFormProps } from "@/types/FormProps";
import Image from "next/image";
import { useAuthSwap } from "@/app/contexts/AuthSwapContext";

export default function LoginForm() {
  const { toggleFormType } = useAuthSwap();
  const form = useForm<LoginFormProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-5">
          <form.Field name="email">
            {(field) => (
              <input
                type="email"
                placeholder="joe.fernandez@example.com"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="input placeholder:text-gray"
              />
            )}
          </form.Field>
          <form.Field name="password">
            {(field) => (
              <input
                type="password"
                placeholder="Password"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="input placeholder:text-gray"
              />
            )}
          </form.Field>
        </div>
        <button type="submit" className="py-2 w-full bg-green text-dark my-5">
          Login
        </button>
      </form>
      <div className="flex flex-row justify-center gap-5 mb-5">
        <button>Forgot password?</button>
        <button
          className="relative flex flex-row items-center gap-1 text-green"
          onClick={toggleFormType}
        >
          <Image
            src="/icons/form_arrow.png"
            alt="arrow right"
            width={16}
            height={16}
            className="rotate-180"
          />
          <span>Register now</span>
        </button>
      </div>
    </div>
  );
}