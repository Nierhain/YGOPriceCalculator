import { Button } from "antd"
import { CardAPI } from "../api"
import { DbCard } from "../models/Card"

export function UpdateDb(){
    
    const update = () => {
        CardAPI.getAllCardsFromRemote().then( res => {
            let request: DbCard[] = []
            res.forEach(card => {
                let dbCard: DbCard = {
                    cardID: card.id,
                    name: card.name,
                    imageURL: card.card_images[0].image_url,
                    thumbnailURL: card.card_images[0].image_url_small,
                    cardmarket_price: Number.parseFloat(card.card_prices[0].cardmarket_price),
                    tcgplayer_price: Number.parseFloat(card.card_prices[0].tcgplayer_price),
                    ebay_price: Number.parseFloat(card.card_prices[0].ebay_price),
                    amazon_price: Number.parseFloat(card.card_prices[0].amazon_price),
                    coolstuffinc_price: Number.parseFloat(card.card_prices[0].coolstuffinc_price)
                }
                request.push(dbCard)
            })
            console.log(request)
            CardAPI.updateDB(request).then(res => console.log(res)).catch(err => console.error(err))
        })
    }

    return(<Button type="primary" onClick={update}>Update Db</Button>)
}