using YGOPriceCalculator.Core.Models;

namespace YGOPriceCalculator.Domains.Cards.Models;

public class Collection : IEntity
{
    public List<CollectionItem> Cards { get; set; }
    public User User { get; set; }
    public Guid Id { get; set; }
    public byte[] RowVersion { get; set; }
}

public class CollectionItem : IEntity
{
    public Card Card { get; set; }
    public int Amount { get; set; }
    public Guid Id { get; set; }
    public byte[] RowVersion { get; set; }
}