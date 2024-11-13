import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
  providers : [
    GoogleProvider({
      clientId : process.env.GOOGLE_CLIENT_ID ??"",
      clientSecret : process.env.GOOGLE_CLIENT_SECRET ??"",
    })
  ],

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.sub = account.providerAccountId;
      }
      return token;
    },
  },


})

export {handler as GET, handler as POST}
