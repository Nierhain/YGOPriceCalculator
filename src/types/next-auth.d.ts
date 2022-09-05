import { DefaultSession } from "next-auth";
import { Roles } from "../models/enums";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user?: {
            id: string;
            role: Roles;
        } & DefaultSession["user"];
    }

    interface User {
        role: string
    }
}
