using MediatR;
using Microsoft.AspNetCore.Mvc;
using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Core.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CardController : ControllerBase
{
    private readonly IMediator _mediator;

    public CardController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetCards()
    {
        return await _mediator.Send(new GetCards());
    }

    [HttpGet("first")]
    public async Task<IActionResult> GetFirstCards()
    {
        return Ok();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCard(Guid id)
    {
        return Ok();
    }

    [HttpPost]
    public async Task<IActionResult> UpdateDb(List<Card> cards)
    {
        return Ok();
    }
}