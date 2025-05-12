import config  from "@/lib/config";
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(config.env.databaseUrl)

export const db = drizzle(process.env.DATABASE_URL!);
