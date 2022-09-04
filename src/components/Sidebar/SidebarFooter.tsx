import { IconLogin, IconLogout } from "@tabler/icons";
import { signIn, signOut, useSession } from "next-auth/react";
import SidebarButton from "./SidebarButton";

export default function () {
    const { data: session } = useSession();
    return (
        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
            {session ? (
                <SidebarButton
                    label="Logout"
                    icon={<IconLogout />}
                    onClick={() => {
                        signOut();
                    }}
                />
            ) : (
                <SidebarButton
                    label="Login"
                    icon={<IconLogin />}
                    onClick={() => {
                        signIn("discord");
                    }}
                />
            )}
        </div>
    );
}
