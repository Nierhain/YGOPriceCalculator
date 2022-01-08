import { useState } from 'react'
import {Layout, Menu as AntMenu} from 'antd'
const {Sider} = Layout

export function Menu(){
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return(<Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}
        style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}>
        <AntMenu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <AntMenu.Item key="1">
              Option 1
            </AntMenu.Item>
            <AntMenu.Item key="2">
              Option 2
            </AntMenu.Item>
          </AntMenu>
    </Sider>)
}