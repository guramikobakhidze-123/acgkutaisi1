import { migrate } from "drizzle-orm/node-postgres/migrator";
import { getDb, pool } from "./db";
import path from "path";

export async function runMigrations(): Promise<void> {
  console.log("Running database migrations...");
  try {
    const db = getDb();
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), "migrations"),
    });
    console.log("Database migrations completed successfully.");
  } catch (err) {
    console.error("Failed to run database migrations:", err);
    throw err;
  }
}
