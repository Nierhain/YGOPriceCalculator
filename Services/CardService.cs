using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using YGOPriceCalculator.Models;

namespace YGOPriceCalculator.Services
{
    public class CardService
    {
        private readonly IMongoCollection<Card> _context;
        public CardService(IOptions<CardDatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _context = mongoDatabase.GetCollection<Card>(settings.Value.CollectionName);
        }

        public async Task<List<Card>> GetCards()
        {
            return await _context.Find(_ => true).ToListAsync();
        }

        public async Task<List<Card>> GetFirstCards()
        {
            return await _context.Find(x => true).Limit(100).ToListAsync();
        }

        public async Task<Card?> GetCard(string id)
        {
            return await _context.Find(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreateCards(List<Card> cards)
        {
            await _context.InsertManyAsync(cards);
        }
    }
}
