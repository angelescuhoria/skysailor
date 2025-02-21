import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [username()],
});