import client from '@/apollo/client';
import { LOGIN_MUTATION} from '@/apollo/user';
import type { Session } from 'next-auth';
import type { User as NextAuthUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

import Credentials from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';
interface CustomToken extends JWT {
  accessToken?: string;
  refreshToken?: string;
}

interface CustomUser extends NextAuthUser {
  accessToken?: string;
  refreshToken?: string;
}

export const authConfig  = {
  callbacks: {
    async jwt({ token, user }:{ token: CustomToken; user?: CustomUser }) {
        
        return { ...token, ...user};
    },
    async session({ session, token }:{ session: Session; token: CustomToken }) {
        session.user = token
        return session;
    },
},
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        try {
          
          const { data } = await client.mutate({
            mutation: LOGIN_MUTATION,
            variables: { email:credentials?.email, password : credentials?.password },
          });
          const cookieStore = cookies()
          cookieStore.set("access_token", data?.login?.access_token, {
            maxAge: 10 * 60 * 60, 
            path: "/",
          });
          
          cookieStore.set("refresh_token", data?.login?.refresh_token, {
            maxAge: 20 * 24 * 60 * 60, 
            path: "/",
          });
          return {...data.login,id:"1",email:credentials?.email}
        } catch (error) {
          return null
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
};
