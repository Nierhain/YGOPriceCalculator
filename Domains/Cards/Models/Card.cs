using YGOPriceCalculator.Core.Models;

namespace YGOPriceCalculator.Domains.Cards.Models;

public record Card : IEntity
{
    public string Name { get; set; } = null!;
    public int CardID { get; set; }
    public string ImageURL { get; set; } = null!;
    public string ThumbnailURL { get; set; } = null!;
    public decimal CardmarketPrice { get; set; }
    public decimal TcgplayerPrice { get; set; }
    public decimal EbayPrice { get; set; }
    public decimal AmazonPrice { get; set; }
    public decimal CoolstuffincPrice { get; set; }
    public Guid Id { get; set; }
    public byte[] RowVersion { get; set; }
}