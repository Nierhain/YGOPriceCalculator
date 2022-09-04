import { IconBrandVscode, IconHome } from "@tabler/icons";
import Menu, { MenuItem } from "./Menu";
import SidebarFooter from "./Sidebar/SidebarFooter";
import SidebarUser from "./Sidebar/SidebarUser";

const menuItems: MenuItem[] = [
    { label: "Home", link: "/", icon: <IconHome /> },
    { label: "All Cards", link: "/cards", icon: <IconHome /> },
    { label: "Your Lists", link: "/collections", icon: <IconHome /> },
];

export default function () {
    return (
        <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r px-6 pb-3 transition duration-300 dark:border-slate-900 bg-slate-50 dark:bg-slate-800 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <a href="#" title="home">
                        <IconBrandVscode />
                    </a>
                </div>
                <SidebarUser />
                <Menu items={menuItems} />
            </div>
            <SidebarFooter />
        </aside>
    );
}
