import { useEffect, useState } from "react";  
import { DbCard } from "./models/Card";
import { Menu } from "./components/Menu";
import { CardSelectionTable } from "./components/CardSelectionTable";
import { CardAPI } from "./api";
import { AppShell, Group, Header,Text} from "@mantine/core";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [database, setDatabase] = useState<DbCard[]>([]);
  const [pickedCards, setPickedCards] = useState<string[]>([]);

  useEffect(() => {
    CardAPI.getAllCards().then(res => {
      setDatabase(res)
    }).catch(err => console.error(err))
  }, [])

  return (
    <AppShell
      navbar={<Menu />}
      header={
        <Header height={70} p="md">
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Text>YGO PriceCalculator</Text>
            <ThemeSwitcher />
          </Group>
        </Header>
      }
    >
      
    </AppShell>
  );
}

export default App;
