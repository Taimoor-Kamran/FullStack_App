import {
  varchar,
  uuid,
  integer,
  text,
  boolean,
  pgTable,
  pgEnum,
} from "drizzle-orm/pg-core";

export STATUS_ENUM = pgEnum('status', ['PENDING', 'APROVED', 'REJECTED'])

export ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN'])

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", {length: 255}).notNull(),
  email: text("email").notNull().unique(),
  univeristyId: integer("university_id").notNull().unique(),
  password: text('password').notNull(),
  universityCard: text("university_card").notNull(),
  status: text()

});
