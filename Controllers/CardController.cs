using Microsoft.AspNetCore.Mvc;
using YGOPriceCalculator.Models;
using YGOPriceCalculator.Services;

namespace YGOPriceCalculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardController: ControllerBase
    {
        private readonly CardService _service;

        public CardController(CardService service)
        {
            _service = service;
        } 

        [HttpGet]
        public async Task<List<Card>> GetCards()
        {
            return await _service.GetCards();
        }

        [HttpGet("first")]
        public async Task<List<Card>> GetFirstCards()
        {
            return await _service.GetFirstCards();
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Card>> GetCard(string id)
        {
            var card = await _service.GetCard(id);
            if (card == null) return NotFound();

            return card;
        }

        [HttpPost]
        public async Task<IActionResult> UpdateDb(List<Card> cards)
        {
            if (_service.hasCards())
            {
                await _service.UpdateCards(cards);
                return CreatedAtAction(nameof(GetCards), cards);
            }
            await _service.CreateCards(cards);
            return CreatedAtAction(nameof(GetCards), cards);
        }
    }
}
