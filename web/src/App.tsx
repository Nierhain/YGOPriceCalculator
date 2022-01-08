import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { DbCard } from "./models/DbCard";
import { UpdateDb } from "./components/UpdateDb";
import { Menu } from "./components/Menu";
import { CardSelectionTable } from "./components/CardSelectionTable";
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [database, setDatabase] = useState<DbCard[]>([]);
  const [pickedCards, setPickedCards] = useState<string[]>([]);

  const updateState = (data: any[]) => {
    console.log(data)
    setDatabase(data)
  }

  return (
    <Layout>
      <Menu />
      <Layout style={{ marginLeft: 200 }}>
        <Header></Header>
        <Content style={{padding: 20}}>
          <UpdateDb updateState={updateState} />
          <CardSelectionTable db={database} />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
