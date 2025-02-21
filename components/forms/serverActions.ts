"use server";

import { RegisterFormProps } from "@/types/FormProps";
import { db } from "@/utils/postgres";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { authClient } from "@/app/auth/auth-client";

export const handleRegisterSubmit = async (value: RegisterFormProps) => {
  await db.connect();
  const email = await db.query("SELECT email FROM users WHERE email = $1", [
    value.email,
  ]);
  if (email.rows.length > 0)
    throw new Error("User with this email already exists.");

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(value.password, salt);
  await db.query(
    "INSERT INTO users (username, email, password, salt) VALUES ($1, $2, $3, $4)",
    [value.username, value.email, hashedPassword, salt],
  );

  await authClient.signUp.email({
    email: value.email,
    password: value.password,
    name: value.username,
  });

  redirect("/");
};