"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { RegisterFormProps } from "@/types/FormProps";
import Image from "next/image";
import { useAuthSwap } from "@/app/contexts/AuthSwapContext";

export default function LoginForm() {
  const { setFormType, setIsAnimating } = useAuthSwap();
  const form = useForm<RegisterFormProps>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
          <form.Field name="username">
            {(field) => (
              <div>
                <label htmlFor={field.name} className="text-sm">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Red-ish squirrel"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input placeholder:text-gray"
                />
              </div>
            )}
          </form.Field>
          <form.Field name="email">
            {(field) => (
              <div>
                <label htmlFor={field.name} className="text-sm">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="joe.fernandez@example.com"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input placeholder:text-gray"
                />
              </div>
            )}
          </form.Field>
          <form.Field name="password">
            {(field) => (
              <div>
                <label htmlFor={field.name} className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input placeholder:text-gray"
                />
              </div>
            )}
          </form.Field>
          <form.Field name="confirmPassword">
            {(field) => (
              <div>
                <label htmlFor={field.name} className="text-sm">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input placeholder:text-gray"
                />
              </div>
            )}
          </form.Field>
        </div>
        <button type="submit" className="py-2 w-full bg-green text-dark my-5">
          Register
        </button>
      </form>
      <div className="flex flex-row justify-center gap-5 mb-5">
        <button>Forgot password?</button>
        <button
          className="relative flex flex-row items-center gap-1 text-green"
          onClick={() => {
            setFormType("login");
            setIsAnimating(true);
          }}
        >
          <span>Login</span>
          <Image
            src="/icons/form_arrow.png"
            alt="arrow right"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}