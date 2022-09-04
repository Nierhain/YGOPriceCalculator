import { MouseEventHandler, ReactNode } from "react";

interface SidebarButtonProps {
    label: string;
    isActive: boolean;
    icon?: ReactNode;
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => MouseEventHandler<HTMLButtonElement> | void;
}

const baseClasses =
    "group flex w-full items-center space-x-4 rounded-md px-4 py-3 text-gray-600 transition-all hover:bg-gray-200 dark:text-gray-200 hover:dark:bg-slate-700 hover:dark:text-gray-100";

const getClassNames = (active: boolean) => {
    if (active) {
        let classes = baseClasses + " bg-blue-600"
        console.log("active")
        return classes;
    }
    return baseClasses;
};

export default function SidebarButton({
    label,
    isActive,
    icon,
    onClick,
}: SidebarButtonProps) {
    return (
        <button className={getClassNames(isActive)} onClick={onClick}>
            {icon}
            <span className="group-hover:dark:text-gray-100">{label}</span>
        </button>
    );
}
