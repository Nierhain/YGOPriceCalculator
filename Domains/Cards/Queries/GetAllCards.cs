using MediatR;
using YGOPriceCalculator.Core.Data;
using YGOPriceCalculator.Core.Models;
using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Domains.Cards.Queries;

public class GetAllCards: IRequest<Response<List<Card>>>{ }

public class GetAllCardsHandler : IRequestHandler<GetAllCards, Response<List<Card>>>
{
    private readonly IDbRepository _repository;

    public GetAllCardsHandler(IDbRepository repository)
    {
        _repository = repository;
    }

    public async Task<Response<List<Card>>> Handle(GetAllCards request, CancellationToken cancellationToken)
    {
        return Response<List<Card>>.Ok(await _repository.ReadList<Card>(x => true));
    }
}