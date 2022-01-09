import { useState } from 'react'
import {Layout, Menu as AntMenu} from 'antd'
const {Sider} = Layout

export function Menu(){
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return(
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <AntMenu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <AntMenu.Item key="1">
              Select Cards
            </AntMenu.Item>
            <AntMenu.Item key="2">
              Show Wantlist
            </AntMenu.Item>
            <AntMenu.Item key="3">
              Get Price Data
            </AntMenu.Item>
          </AntMenu>
    </Sider>)
}