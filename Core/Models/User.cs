using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Core.Models;

public class User : IEntity
{
    public string Name { get; set; }
    public List<Collection> Collections { get; set; }
    public Guid Id { get; set; }
    public byte[] RowVersion { get; set; }

    public string[] Includes => new[]
    {
        nameof(Collections)
    };
}