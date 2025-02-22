import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { db } from "@/utils/postgres";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/server/auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  plugins: [username()],
});