import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { DbCard } from "./models/Card";
import { Menu } from "./components/Menu";
import { CardSelectionTable } from "./components/CardSelectionTable";
import { CardAPI } from "./api";
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [database, setDatabase] = useState<DbCard[]>([]);
  const [pickedCards, setPickedCards] = useState<string[]>([]);

  useEffect(() => {
    CardAPI.getAllCards().then(res => {
      setDatabase(res)
    }).catch(err => console.error(err))
  }, [])

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Menu />
      <Layout>
        <Header></Header>
        <Content style={{padding: 20}}>
          <CardSelectionTable db={database} />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
