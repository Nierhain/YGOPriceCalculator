import { Table, Image, Space, Input } from "antd"
import { useEffect, useState } from "react"
import { CardSelection, DbCard } from "../models/Card"
import {UpdateDb} from './UpdateDb'
interface SelectionTableProps {
    db: DbCard[],
}

const {Search} = Input

export function CardSelectionTable({db}: SelectionTableProps) {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const addToSelection = (card: DbCard, amount: number) => {
    }

    const tableColumns = [
        {title: 'Bild', dataIndex: 'imageURL', key: 'image', render: (img: string) => (<Image src={img} style={{width: 100}}/>)},
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Aktionen', key: 'action', render: (text: any, record: DbCard) => (
      <Space size="middle">
        <a onClick={() => addToSelection(record, 1)}>Hinzufügen</a>
        <a onClick={() => addToSelection(record, 3)}>Playset hinzufügen</a>
      </Space>)}
    ]

    return(<Table dataSource={db} bordered columns={tableColumns} rowKey={(record) => record.cardID} title={() => (<Space ><UpdateDb /><Search /></Space>)}></Table>)
}