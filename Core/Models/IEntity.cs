namespace YGOPriceCalculator.Core.Models;

public interface IEntity
{
    public Guid Id { get; set; }
    public byte[] RowVersion { get; set; }
}