import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials" 
import { users } from "./database/schema"


export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },
  providers: [CredentialsProvider({
    async authorize(credentials){
        if(!credentials?.email || !credentials?.password){
            return null
        }
        const user = await db
            .select()
            .from(users)

    }
  })],
})