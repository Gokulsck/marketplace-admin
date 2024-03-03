import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import supabase from "@/utils/supabase/server"
export const authOptions = {
    // Configure one or more authentication providers

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                // console.log("credentials", credentials)
                let client = supabase();
                let { username: email, password }: any = credentials;
                let { data, error } = await client.auth.signInWithPassword({ email, password });

                if (data?.user) {
                    return data.user
                }
                return null
            },
        }),
    ],
}

const callbacks = {

}

const handler = NextAuth({
    ...authOptions, callbacks: {
        signIn({ user }) {
            return '/admin/dashboard'
        },
    }
})

export { handler as GET, handler as POST }