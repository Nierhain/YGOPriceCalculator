import { IconMoonStars, IconSun } from "@tabler/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function () {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 flex-col items-center justify-center rounded border bg-white text-black dark:border-slate-800 dark:bg-slate-800 dark:text-white">
            {theme === "dark" ? <IconMoonStars /> : <IconSun />}
        </button>
    );
}
