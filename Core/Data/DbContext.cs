using Microsoft.EntityFrameworkCore;
using YGOPriceCalculator.Core.Models;
using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Core.Data;

public class DbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public DbContext(DbContextOptions options) : base(options)
    {
    }

    public virtual DbSet<Card> Cards { get; set; }
    public virtual DbSet<Collection> Collections { get; set; }
    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<CollectionItem> CollectionItems { get; set; }
}