using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace YGOPriceCalculator.Models
{
    public record Card
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [JsonPropertyName("id")]
        public string? Id { get; set; }
        [BsonElement("name")]
        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;
        [BsonElement("cardID")]
        [JsonPropertyName("cardID")]
        public int CardID { get; set; }
        [BsonElement("imageURL")]
        [JsonPropertyName("imageURL")]
        public string ImageURL { get; set; } = null!;
        [BsonElement("thumbnailURL")]
        [JsonPropertyName("thumbnailURL")]
        public string ThumbnailURL { get; set; } = null!;
        [BsonElement("cardmarket_price")]
        [JsonPropertyName("cardmarket_price")]
        public decimal CardmarketPrice { get; set; }
        [BsonElement("tcgplayer_price")]
        [JsonPropertyName("tcgplayer_price")]
        public decimal TcgplayerPrice { get; set; }
        [BsonElement("ebay_price")]
        [JsonPropertyName("ebay_price")]
        public decimal EbayPrice { get; set; }
        [BsonElement("amazon_price")]
        [JsonPropertyName("amazon_price")]
        public decimal AmazonPrice { get; set; }
        [BsonElement("coolstuffinc_price")]
        [JsonPropertyName("coolstuffinc_price")]
        public decimal CoolstuffincPrice { get; set; }
    }
}
