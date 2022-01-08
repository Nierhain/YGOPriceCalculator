import { Button } from "antd"
import { CardAPI } from "../api"
import { DbCard } from "../models/DbCard"

interface UpdateProps {
    updateState: (cards: DbCard[]) => void
}

export function UpdateDb({updateState}: UpdateProps){
    
    const update = () => {
        CardAPI.getAllCards().then(res => updateState(res))
    }

    return(<Button type="primary" onClick={update}>Update Db</Button>)
}