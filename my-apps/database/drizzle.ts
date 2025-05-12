import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import config from "@/lib/config"; // ensure it exports a string

const sql = neon(config.env.databaseUrl); // must be a string
export const db = drizzle(sql); // do NOT wrap in { client: ... }
