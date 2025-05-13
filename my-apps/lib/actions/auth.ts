"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

const signUp = async (params: AuthCredentials) => {
    const { fullName, email, universityId, password, universityCard} = params;

    const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))

}
