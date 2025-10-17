import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { serverTrpc } from "../trpc-server";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: { scope: "read:user user:email" },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile, account }) {
      try {
        await serverTrpc.auth.googleAuth.mutate({
          email: user.email!,
          firstName: user.name ?? (profile as any)?.name,
          authMethod: account?.provider ?? "google",
        });

        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.jwtToken,
        expires: session.expires,
      };
    },

    async jwt({ token, account, user }) {
      if (account && user) {
        try {
          const data = await serverTrpc.auth.googleAuth.mutate({
            email: user.email!,
            firstName: user.name ?? undefined,
            authMethod: account.provider ?? "google",
          });

          token.jwtToken = data.token;
        } catch (error) {
          console.error("JWT token error:", error);
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};
