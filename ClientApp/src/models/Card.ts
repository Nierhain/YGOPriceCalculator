export interface DbCard {
    id?: string,
    name: string,
    cardID: number,
    imageURL: string,
    thumbnailURL: string
    cardmarket_price: number,
    tcgplayer_price: number,
    ebay_price: number,
    amazon_price: number,
    coolstuffinc_price: number
}

export interface CardSelection {
    card: DbCard,
    amount: number,
}

export interface YGOPDCard {
    id: number,
    name: string,
    desc: string,
    archetype: string,
    race: string,
    type: string,
    card_images: [
        {id: number, image_url: string, image_url_small: string}
    ],
    card_prices: [
        {cardmarket_price: string, tcgplayer_price: string, ebay_price: string, amazon_price: string, coolstuffinc_price: string}
    ],
    card_sets: [
        {set_code: string, set_name: string, set_price: string, set_rarity: string, set_rarity_code: string}
    ]
}
