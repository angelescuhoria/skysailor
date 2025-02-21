import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { db } from "@/utils/postgres";

export const auth = betterAuth({
  database: {
    db,
    type: "postgres",
  },
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  plugins: [username()],
});