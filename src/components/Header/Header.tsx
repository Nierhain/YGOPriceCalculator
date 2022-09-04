import Button from "../shared/Button";
import ThemeToggle from "../ThemeToggle";

export default function () {
    return (
        <div className="sticky top-0 h-16 border-b dark:border-none bg-slate-50 dark:border-slate-900 dark:bg-slate-800 lg:py-2.5 dark:drop-shadow-lg dark:shadow-lg">
            <ThemeToggle />
        </div>
    );
}