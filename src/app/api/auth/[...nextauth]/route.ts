import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth'

export const optionsAuth = {
  secrect: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ]
}

const handler = NextAuth(optionsAuth)

export { handler as GET, handler as POST }