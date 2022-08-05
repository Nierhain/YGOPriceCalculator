import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import {useColorScheme} from '@mantine/hooks'
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

interface AppProviderProps {
  children: React.ReactNode;
}
export default function ({ children }: AppProviderProps) {
  const preferredColorScheme = useColorScheme("dark");
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>{children}</BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
