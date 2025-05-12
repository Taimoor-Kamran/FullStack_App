import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
});
