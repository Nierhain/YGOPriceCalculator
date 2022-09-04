import { IconMoonStars, IconSun } from "@tabler/icons";
import { useTheme } from "next-themes";
export default function () {
  const { theme, setTheme } = useTheme();

  if(!theme) return null;
  return (
    <div onClick={() => setTheme(theme === "dark" ? "dark" : "light")}>
      {theme === "dark" ? <IconMoonStars /> : <IconSun />}
    </div>
  );
}
