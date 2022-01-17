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

        public async Task UpdateCards(List<Card> cards)
        {
            List<WriteModel<Card>> writeModels = new List<WriteModel<Card>>();
            cards.ForEach(card => {
                var filter = Builders<Card>.Filter.Eq(c => c.CardID, card.CardID);
                var updateCardmarket = Builders<Card>.Update.Set(c => c.CardmarketPrice, card.CardmarketPrice);
                var updateTcgplayer = Builders<Card>.Update.Set(c => c.TcgplayerPrice, card.TcgplayerPrice);
                var updateEbay = Builders<Card>.Update.Set(c => c.EbayPrice, card.EbayPrice);
                var updateAmazon = Builders<Card>.Update.Set(c => c.AmazonPrice, card.AmazonPrice);
                var updateCoolstuff = Builders<Card>.Update.Set(c => c.CoolstuffincPrice, card.CoolstuffincPrice);
                writeModels.Add(new UpdateOneModel<Card>(filter, updateCardmarket));
                writeModels.Add(new UpdateOneModel<Card>(filter, updateTcgplayer));
                writeModels.Add(new UpdateOneModel<Card>(filter, updateEbay));
                writeModels.Add(new UpdateOneModel<Card>(filter, updateAmazon));
                writeModels.Add(new UpdateOneModel<Card>(filter, updateCoolstuff));
            });

            await _context.BulkWriteAsync(writeModels);
        }

        public bool hasCards()
        {
            return _context.EstimatedDocumentCount() > 0;
        }
    }
}
