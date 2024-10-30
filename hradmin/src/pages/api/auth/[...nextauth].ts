import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/appRouter"; // Adjust path if needed
import { createContext } from "../../../server/context";

export default createNextApiHandler({
  router: appRouter,
  createContext,
});


providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize(credentials) {
        if (credentials.username === "hradmin@test.com" && credentials.password === "TestPass1234") {
          return { id: 1, name: "HR Admin", role: "admin" };
        }
        return null;
      }
    })
  ],
  