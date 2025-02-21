"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { RegisterFormProps } from "@/types/FormProps";
import Image from "next/image";
import { useAuthSwap } from "@/contexts/AuthSwapContext";
import {
  handleConfirmPasswordChange,
  handleEmailChange,
  handlePasswordChange,
  handleUsernameChange,
} from "./actions";
import { toast, ToastContainer } from "react-toastify";
import { handleRegisterSubmit } from "@/components/forms/serverActions";

export default function RegisterForm() {
  const { setFormType, setIsAnimating } = useAuthSwap();
  const [password, setPassword] = useState<string>("");
  const form = useForm<RegisterFormProps>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      try {
        await handleRegisterSubmit(value);
      } catch {
        toast("User with this email already exists.", {
          type: "error",
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-4">
          <form.Field
            name="username"
            validators={{
              onChange: ({ value }) => handleUsernameChange(value),
            }}
          >
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
                  pattern=".{4,8}"
                  className="input placeholder:text-gray"
                  id="username"
                />
                {field.state.meta.errors ? (
                  <em role="alert" className="text-sm text-red-500">
                    {field.state.meta.errors.join(", ")}
                  </em>
                ) : null}
              </div>
            )}
          </form.Field>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => handleEmailChange(value),
            }}
          >
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
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;"
                  id="register_email"
                />
                {field.state.meta.errors ? (
                  <em role="alert" className="text-sm text-red-500">
                    {field.state.meta.errors.join(", ")}
                  </em>
                ) : null}
              </div>
            )}
          </form.Field>
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                setPassword(value);
                return handlePasswordChange(value);
              },
            }}
          >
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
                  minLength={6}
                  id="register_password"
                />
                {field.state.meta.errors ? (
                  <em role="alert" className="text-sm text-red-500">
                    {field.state.meta.errors.join(", ")}
                  </em>
                ) : null}
              </div>
            )}
          </form.Field>
          <form.Field
            name="confirmPassword"
            validators={{
              onChange: ({ value }) =>
                handleConfirmPasswordChange(value, password),
            }}
          >
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
                  id="confirm_password"
                />
                {field.state.meta.errors ? (
                  <em role="alert" className="text-sm text-red-500">
                    {field.state.meta.errors.join(", ")}
                  </em>
                ) : null}
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