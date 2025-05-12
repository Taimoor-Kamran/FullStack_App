import {
  varchar,
  uuid,
  integer,
  text,
  boolean,
  pgTable,
} from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", {length: 255}).notNull(),
});
