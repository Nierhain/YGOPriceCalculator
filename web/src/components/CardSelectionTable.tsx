import { Table, Image, Space } from "antd"
import { useEffect, useState } from "react"
import { DbCard } from "../models/DbCard"

interface SelectionTableProps {
    db: DbCard[],
}
export function CardSelectionTable({db}: SelectionTableProps) {
    const [selection, setSelection] = useState<DbCard[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {

        setSelection(db)
    }, [])

    useEffect(() => {
        setSelection(db.filter(el => el.name.includes(searchTerm)))
    }, [searchTerm])

    const addToSelection = (record: DbCard) => {
        setSelection(prevSelection => [...prevSelection, record])
    }

    const tableColumns = [
        {title: 'Bild', dataIndex: 'card_images.image_url', key: 'image', render: (img: string) => (<Image src={img}/>)},
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Aktionen', key: 'action', render: (text: any, record: DbCard) => (
      <Space size="middle">
        <a onClick={() => addToSelection(record)}>Hinzufügen</a>
      </Space>)}
    ]

    return(<Table dataSource={selection} columns={tableColumns} rowKey={(record) => record.id}></Table>)
}