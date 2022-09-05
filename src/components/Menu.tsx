import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import SidebarButton from "./Sidebar/SidebarButton";

interface MenuProps {
    items: MenuItem[];
}
export default function Menu({ items }: MenuProps) {
    const { pathname } = useRouter()
    const isActive = (path: string) => {
        return pathname === path
    }
    return (
        <ul className="mt-8 space-y-2 tracking-wide">
            {items.map((item) => (
                <Link href={item.link} key={item.link}>
                    <li className={"cursor-pointer"}>
                        <SidebarButton label={item.label} icon={item.icon} isActive={isActive(item.link)} />
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export interface MenuItem {
    label: string;
    link: string;
    icon?: ReactNode;
}
