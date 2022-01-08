export interface DbCard {
    id: number,
    name: string,
    card_images: cardImage[],
    card_prices: cardPrices[]
}

interface cardPrices {
    cardmarket_price: string,
    tcgplayer_price: string,
    ebay_price: string,
    amazon_price: string,
    coolstuffinc_price: string
}

interface cardImage {
    id: number,
    image_url: string,
    image_url_small: string
}