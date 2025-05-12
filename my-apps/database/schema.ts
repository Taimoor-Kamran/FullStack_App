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
  email: text("email").notNull().unique(),
  univeristyId: integer("university_id").notNull().unique(),
  password: text('password').notNull(),
  universityCard: text("university_card").notNull().unique(),

});
