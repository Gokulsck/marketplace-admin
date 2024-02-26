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
                
                console.log("credentials", credentials)
                let client = supabase();
                let { username: email, password }: any = credentials;
                let { data, error } = await client.auth.signInWithPassword({ email, password });
                
                console.log('data, error', data, error)
                // const res = await fetch("/your/endpoint", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()

                // // If no error and we have user data, return it
                // if (res.ok && user) {
                //     return user
                // }
                // // Return null if user data could not be retrieved
                return null
            },
            
        }),
        // ...add more providers here
    ],
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }