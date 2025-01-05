import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure authentication providers
  providers: [
    // Google Authentication Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Email and Password Authentication Provider (Credentials)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Custom user authentication logic
        const user = await authenticateUser(credentials.email, credentials.password);
        if (user) {
          return user; // Return user object if authentication is successful
        }
        return null; // Return null to reject the login
      },
    }),
  ],

  // Callbacks to customize JWT and session handling
  callbacks: {
    // Customize the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    // Add custom fields to the session object
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },

  // Configure custom pages
  pages: {
    signIn: "/auth/login", // Custom login page
    signOut: "/auth/logout", // Custom logout page (optional)
    error: "/auth/error", // Custom error page (optional)
  },

  // Add a secret key for encrypting tokens
  secret: process.env.NEXTAUTH_SECRET,

  // Enable debug mode in development
  debug: process.env.NODE_ENV === "development",
});

// Mock authentication function for Credentials Provider
async function authenticateUser(email, password) {
  // Replace this with your actual user validation logic (e.g., database check)
  if (email === "test@example.com" && password === "password123") {
    return { id: 1, name: "Test User", email };
  }
  return null;
}
