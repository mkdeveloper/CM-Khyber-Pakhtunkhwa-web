import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql);
// import { drizzle } from "drizzle-orm/vercel-postgres";

// import { sql } from "@vercel/postgres";
// export const db = drizzle(sql);
